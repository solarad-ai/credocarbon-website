import { useState, useEffect, useCallback } from "react";
import { FileText, Calendar, Clock, ArrowRight, ExternalLink, Loader2, RefreshCw, User } from "lucide-react";

// Hashnode GraphQL API endpoint and blog host
const HASHNODE_API = "https://gql.hashnode.com";
// const BLOG_HOST = "credocarbon.hashnode.dev"; // API requires the .hashnode.dev subdomain
const BLOG_HOST = "blog.credocarbon.com"
const BLOG_URL = "https://blog.credocarbon.com"; // Custom domain for links (note: blog not blogs)
const POSTS_PER_PAGE = 50; // Optimal limit - 100 causes API errors

// GraphQL query to fetch posts from Hashnode with pagination
const GET_POSTS_QUERY = `
  query GetPosts($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      title
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            tags {
              name
              slug
            }
            author {
              name
              profilePicture
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

interface BlogPost {
    id: string;
    title: string;
    brief: string;
    slug: string;
    publishedAt: string;
    readTimeInMinutes: number;
    coverImage?: {
        url: string;
    };
    tags?: Array<{
        name: string;
        slug: string;
    }>;
    author?: {
        name: string;
        profilePicture: string;
    };
}

interface PageInfo {
    hasNextPage: boolean;
    endCursor: string | null;
}

interface HashnodeResponse {
    data: {
        publication: {
            title: string;
            posts: {
                edges: Array<{
                    node: BlogPost;
                    cursor: string;
                }>;
                pageInfo: PageInfo;
            };
        };
    };
}

// Decorative gradient patterns for cards
const decorativePatterns = [
    {
        bg: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
        accent: "bg-emerald-400",
    },
    {
        bg: "from-violet-500/20 via-purple-500/20 to-pink-500/20",
        accent: "bg-violet-400",
    },
    {
        bg: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
        accent: "bg-orange-400",
    },
    {
        bg: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
        accent: "bg-cyan-400",
    },
    {
        bg: "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
        accent: "bg-rose-400",
    },
    {
        bg: "from-lime-500/20 via-green-500/20 to-emerald-500/20",
        accent: "bg-lime-400",
    },
];

export default function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [pageInfo, setPageInfo] = useState<PageInfo>({ hasNextPage: false, endCursor: null });

    const fetchPosts = useCallback(async (cursor?: string | null, append = false) => {
        try {
            if (append) {
                setLoadingMore(true);
            } else {
                setLoading(true);
                setError(null);
            }

            // Add cache-busting timestamp to URL to bypass CDN cache
            const cacheBuster = `?t=${Date.now()}_${Math.random().toString(36).substring(7)}`;
            const apiUrl = `${HASHNODE_API}${cacheBuster}`;

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0",
                },
                cache: "no-store", // Prevent browser caching to always fetch fresh posts
                body: JSON.stringify({
                    query: GET_POSTS_QUERY,
                    variables: {
                        host: BLOG_HOST,
                        first: POSTS_PER_PAGE,
                        after: cursor || null,
                    },
                    // Add timestamp to bust any CDN/API caching
                    extensions: {
                        timestamp: Date.now(),
                        random: Math.random()
                    }
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }

            const data: HashnodeResponse = await response.json();

            if (data.data?.publication?.posts?.edges) {
                const fetchedPosts = data.data.publication.posts.edges.map(
                    (edge) => edge.node
                );

                if (append) {
                    setPosts((prev) => [...prev, ...fetchedPosts]);
                } else {
                    setPosts(fetchedPosts);
                }

                const newPageInfo = data.data.publication.posts.pageInfo;
                setPageInfo(newPageInfo);

                // AUTOMATIC RECURSIVE FETCH: If there are more posts on initial load, fetch them all
                if (!append && newPageInfo.hasNextPage && newPageInfo.endCursor) {
                    // Recursively fetch the next batch
                    setTimeout(() => {
                        fetchPosts(newPageInfo.endCursor, true);
                    }, 100); // Small delay to avoid rate limiting
                }
            }
        } catch (err) {
            console.error("Error fetching posts:", err);
            console.error("Full error details:", JSON.stringify(err, null, 2));
            setError("Failed to load blog posts. Please try again later.");
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleLoadMore = () => {
        if (pageInfo.hasNextPage && pageInfo.endCursor) {
            fetchPosts(pageInfo.endCursor, true);
        }
    };

    const handleRefresh = () => {
        setPosts([]);
        fetchPosts();
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const getPostUrl = (slug: string) => {
        return `${BLOG_URL}/${slug}`;
    };

    // Split posts for layout
    const featuredPost = posts[0];
    const sidebarPosts = posts.slice(1, 3);
    const gridPosts = posts.slice(3);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl translate-x-1/2" />
                <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-16">
                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 mb-4">
                                <FileText className="w-4 h-4 text-emerald-400" />
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                                    Blog & Insights
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50">
                                Latest from{" "}
                                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                    CredoCarbon
                                </span>
                            </h1>
                        </div>

                        {!loading && posts.length > 0 && (
                            <button
                                onClick={handleRefresh}
                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors self-start md:self-auto"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Refresh
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative pb-20">
                <div className="mx-auto max-w-7xl px-4">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-32">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full blur-xl bg-emerald-400/20 animate-pulse" />
                                <Loader2 className="relative w-16 h-16 text-emerald-400 animate-spin" />
                            </div>
                            <p className="mt-6 text-slate-400 text-lg">Loading posts...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-red-400/30 bg-red-500/10 text-red-400 mb-6">
                                {error}
                            </div>
                            <p className="text-slate-400 mb-6">
                                Visit our blog directly at{" "}
                                <a
                                    href={BLOG_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-400 hover:underline"
                                >
                                    {BLOG_HOST}
                                </a>
                            </p>
                            <button
                                onClick={handleRefresh}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-all"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Posts Layout */}
                    {!loading && !error && posts.length > 0 && (
                        <>
                            {/* Featured Section: Hero + Sidebar */}
                            <div className="grid lg:grid-cols-3 gap-6 mb-12">
                                {/* Featured Post (Large) */}
                                {featuredPost && (
                                    <a
                                        href={getPostUrl(featuredPost.slug)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="lg:col-span-2 group"
                                    >
                                        <article className="relative h-full rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-500">
                                            {/* Decorative Background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="grid md:grid-cols-2 h-full">
                                                {/* Image */}
                                                <div className="relative h-64 md:h-full overflow-hidden">
                                                    {featuredPost.coverImage?.url ? (
                                                        <img
                                                            src={featuredPost.coverImage.url}
                                                            alt={featuredPost.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30" />
                                                    )}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                                                    {/* Tag Badge */}
                                                    {featuredPost.tags?.[0] && (
                                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
                                                            {featuredPost.tags[0].name}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="relative p-8 flex flex-col justify-center">
                                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4 group-hover:text-emerald-100 transition-colors leading-tight">
                                                        {featuredPost.title}
                                                    </h2>

                                                    <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">
                                                        {featuredPost.brief}
                                                    </p>

                                                    {/* Author & Meta */}
                                                    <div className="flex items-center gap-4">
                                                        {featuredPost.author?.profilePicture ? (
                                                            <img
                                                                src={featuredPost.author.profilePicture}
                                                                alt={featuredPost.author.name}
                                                                className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400/30"
                                                            />
                                                        ) : (
                                                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                                                                <User className="w-5 h-5 text-emerald-400" />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <p className="text-sm font-medium text-slate-200">
                                                                {featuredPost.author?.name || "CredoCarbon"}
                                                            </p>
                                                            <div className="flex items-center gap-3 text-xs text-slate-400">
                                                                <span className="flex items-center gap-1">
                                                                    <Clock className="w-3 h-3" />
                                                                    {featuredPost.readTimeInMinutes} min read
                                                                </span>
                                                                <span>{formatDate(featuredPost.publishedAt)}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Read Arrow */}
                                                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <ArrowRight className="w-5 h-5 text-slate-950" />
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                )}

                                {/* Sidebar Posts */}
                                <div className="flex flex-col gap-6">
                                    {sidebarPosts.map((post) => (
                                        <a
                                            key={post.id}
                                            href={getPostUrl(post.slug)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex-1"
                                        >
                                            <article className="relative h-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-300">
                                                {/* Image */}
                                                <div className="relative h-32 overflow-hidden">
                                                    {post.coverImage?.url ? (
                                                        <img
                                                            src={post.coverImage.url}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-violet-500/30 to-pink-500/30" />
                                                    )}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                                                    {post.tags?.[0] && (
                                                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/90 text-slate-950 text-[10px] font-bold uppercase">
                                                            {post.tags[0].name}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="p-5">
                                                    <h3 className="text-lg font-semibold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors line-clamp-2 leading-snug">
                                                        {post.title}
                                                    </h3>

                                                    <div className="flex items-center gap-3">
                                                        {post.author?.profilePicture ? (
                                                            <img
                                                                src={post.author.profilePicture}
                                                                alt={post.author.name}
                                                                className="w-7 h-7 rounded-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center">
                                                                <User className="w-3.5 h-3.5 text-slate-400" />
                                                            </div>
                                                        )}
                                                        <div className="text-xs text-slate-400">
                                                            <span className="text-slate-300">{post.author?.name || "CredoCarbon"}</span>
                                                            <span className="mx-2">·</span>
                                                            <span>{post.readTimeInMinutes} min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Grid Posts with Decorative Elements */}
                            {gridPosts.length > 0 && (
                                <>
                                    <div className="flex items-center gap-4 mb-8">
                                        <h2 className="text-2xl font-bold text-slate-200">More Articles</h2>
                                        <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {gridPosts.map((post, index) => {
                                            const pattern = decorativePatterns[index % decorativePatterns.length];

                                            return (
                                                <a
                                                    key={post.id}
                                                    href={getPostUrl(post.slug)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group"
                                                >
                                                    <article className="relative">
                                                        {/* Decorative Background Shape */}
                                                        <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${pattern.bg} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

                                                        {/* Card */}
                                                        <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/90 backdrop-blur-sm group-hover:border-slate-600 transition-all duration-300">
                                                            {/* Image Container with Pattern */}
                                                            <div className="relative">
                                                                {/* Decorative Corner */}
                                                                <div className={`absolute -top-10 -right-10 w-32 h-32 ${pattern.accent} opacity-20 rounded-full blur-2xl`} />

                                                                <div className="relative h-48 overflow-hidden">
                                                                    {post.coverImage?.url ? (
                                                                        <img
                                                                            src={post.coverImage.url}
                                                                            alt={post.title}
                                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                            loading="lazy"
                                                                        />
                                                                    ) : (
                                                                        <div className={`w-full h-full bg-gradient-to-br ${pattern.bg}`} />
                                                                    )}
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                                                                </div>

                                                                {/* Tag */}
                                                                {post.tags?.[0] && (
                                                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-600/50 text-emerald-400 text-xs font-semibold uppercase tracking-wide">
                                                                        {post.tags[0].name}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            {/* Content */}
                                                            <div className="p-6">
                                                                <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-emerald-100 transition-colors line-clamp-2 leading-tight">
                                                                    {post.title}
                                                                </h3>

                                                                <p className="text-sm text-slate-400 mb-5 line-clamp-2 leading-relaxed">
                                                                    {post.brief}
                                                                </p>

                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center gap-3">
                                                                        {post.author?.profilePicture ? (
                                                                            <img
                                                                                src={post.author.profilePicture}
                                                                                alt={post.author.name}
                                                                                className="w-8 h-8 rounded-full object-cover border border-slate-600"
                                                                            />
                                                                        ) : (
                                                                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                                                                                <User className="w-4 h-4 text-slate-400" />
                                                                            </div>
                                                                        )}
                                                                        <div className="text-xs">
                                                                            <p className="text-slate-300 font-medium">{post.author?.name || "CredoCarbon"}</p>
                                                                            <p className="text-slate-500">{formatDate(post.publishedAt)}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                                                        <Clock className="w-3.5 h-3.5" />
                                                                        {post.readTimeInMinutes} min
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </>
                            )}

                            {/* Load More */}
                            <div className="flex flex-col items-center gap-6 mt-16">
                                {pageInfo.hasNextPage && (
                                    <button
                                        onClick={handleLoadMore}
                                        disabled={loadingMore}
                                        className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loadingMore ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Loading...
                                            </>
                                        ) : (
                                            <>
                                                Load More Articles
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                )}

                                {!pageInfo.hasNextPage && posts.length > 3 && (
                                    <p className="text-slate-500">
                                        You've explored all {posts.length} articles! ✨
                                    </p>
                                )}

                                <a
                                    href={BLOG_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                                >
                                    <span>View on Hashnode</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </>
                    )}

                    {/* Empty State */}
                    {!loading && !error && posts.length === 0 && (
                        <div className="text-center py-32">
                            <div className="relative inline-block mb-6">
                                <div className="absolute inset-0 rounded-3xl blur-2xl bg-emerald-400/10" />
                                <FileText className="relative w-20 h-20 text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-300 mb-3">
                                No posts yet
                            </h3>
                            <p className="text-slate-500">
                                Check back soon for exciting updates!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-cyan-600/20" />
                        <div className="absolute inset-0 backdrop-blur-xl" />
                        <div className="absolute inset-0 border border-emerald-400/30 rounded-3xl" />

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl" />

                        <div className="relative p-12 md:p-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                                Stay in the loop
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                                Subscribe to get the latest insights on carbon markets, sustainability, and climate tech.
                            </p>
                            <a
                                href={`${BLOG_URL}/newsletter`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-50 text-slate-900 font-bold text-lg hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-xl"
                            >
                                Subscribe to Newsletter
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
