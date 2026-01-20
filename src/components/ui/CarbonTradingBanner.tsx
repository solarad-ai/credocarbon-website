import { useEffect, useState } from 'react';
import { Leaf, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DATA_URLS } from '../../config/dataUrls';

interface Registry {
    id: string;
    name: string;
    symbol: string;
    issued: number | null;
    retired: number | null;
    unit: string;
    records: number | null;
    active: boolean;
}

interface RegistryData {
    lastUpdated: string;
    carbonRegistries: Registry[];
    recRegistries: Registry[];
    totals: {
        carbon: { issued: number; retired: number };
        rec: { issued: number; retired: number };
    };
}

// Format large numbers with K, M, B suffixes
const formatNumber = (num: number, decimals: number = 1): string => {
    if (num >= 1e9) return (num / 1e9).toFixed(decimals) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(decimals) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(decimals) + 'K';
    return num.toFixed(decimals);
};

export default function CarbonTradingBanner() {
    const [data, setData] = useState<RegistryData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(DATA_URLS.registryData)
            .then(res => res.json())
            .then((registryData: RegistryData) => {
                setData(registryData);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load registry data:', err);
                setLoading(false);
            });
    }, []);

    if (loading || !data) {
        return (
            <div className="relative w-full bg-white/5 backdrop-blur-md border-b border-white/10 py-3">
                <div className="flex justify-center items-center gap-2 text-emerald-400/60">
                    <div className="w-4 h-4 border-2 border-emerald-400/40 border-t-emerald-400 rounded-full animate-spin" />
                    <span className="text-xs">Loading registry data...</span>
                </div>
            </div>
        );
    }

    // Filter active registries with valid issued data for the banner
    const activeCarbon = data.carbonRegistries.filter(r => r.active && r.issued !== null);
    const activeRec = data.recRegistries.filter(r => r.active && r.issued !== null);

    return (
        <div dir="ltr" className="relative w-full bg-slate-950/40 backdrop-blur-sm border-b border-white/10">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent animate-shimmer" />

            <div className="relative flex items-center py-2 md:py-2.5 px-2 md:px-4">
                {/* Last 12 months label - left side */}
                <div className="flex-shrink-0 mr-2 md:mr-4 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-slate-800/80 border border-slate-600/50">
                    <span className="text-[9px] md:text-[10px] font-medium text-slate-400">
                        Last 12 months
                    </span>
                </div>

                <div className="flex-1 overflow-hidden">
                    <div className="flex gap-4 md:gap-6 animate-scroll-left">
                        {/* Combined sequence: Carbon + RECs, then duplicate for seamless loop */}
                        {[0, 1].map((seq) => (
                            <div key={seq} className="flex gap-4 md:gap-6 flex-shrink-0">
                                {/* === CARBON REGISTRIES === */}
                                <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                                    <Leaf className="h-3.5 w-3.5 text-emerald-400" />
                                    <span className="text-[10px] md:text-xs font-bold text-emerald-400 uppercase tracking-wider">
                                        Carbon Credits
                                    </span>
                                </div>

                                {/* Carbon Registry Items */}
                                {activeCarbon.map((registry) => (
                                    <div
                                        key={`carbon-${seq}-${registry.id}`}
                                        className="flex-shrink-0 flex items-center gap-3 md:gap-4 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-slate-900/90 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 shadow-lg"
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-xs md:text-sm font-bold text-emerald-50">
                                                {registry.symbol}
                                            </span>
                                            <span className="text-[8px] md:text-[9px] text-emerald-200/90 hidden sm:block">
                                                {registry.name.length > 15 ? registry.name.slice(0, 15) + '...' : registry.name}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-[8px] md:text-[9px] text-emerald-300/70 uppercase tracking-wide">
                                                Issued
                                            </span>
                                            <span className="text-xs md:text-sm font-semibold text-emerald-100 flex items-center gap-1">
                                                <TrendingUp className="h-2.5 w-2.5 text-emerald-400 hidden md:block" />
                                                {formatNumber(registry.issued!)}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-[8px] md:text-[9px] text-cyan-300/70 uppercase tracking-wide">
                                                Retired
                                            </span>
                                            <span className="text-xs md:text-sm font-semibold text-cyan-100">
                                                {registry.retired ? formatNumber(registry.retired) : 'N/A'}
                                            </span>
                                        </div>
                                        <div className="hidden md:flex px-1.5 py-0.5 rounded bg-slate-800/80 text-[8px] text-slate-400">
                                            {registry.unit}
                                        </div>
                                    </div>
                                ))}

                                {/* Divider */}
                                <div className="flex-shrink-0 flex items-center px-2">
                                    <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-500/50 to-transparent" />
                                </div>

                                {/* === REC REGISTRIES === */}
                                <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                                    <Zap className="h-3.5 w-3.5 text-cyan-400" />
                                    <span className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase tracking-wider">
                                        RECs
                                    </span>
                                </div>

                                {/* REC Registry Items */}
                                {activeRec.map((registry) => (
                                    <div
                                        key={`rec-${seq}-${registry.id}`}
                                        className="flex-shrink-0 flex items-center gap-3 md:gap-4 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-slate-900/90 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 shadow-lg"
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-xs md:text-sm font-bold text-cyan-50">
                                                {registry.symbol}
                                            </span>
                                            <span className="text-[8px] md:text-[9px] text-cyan-200/90 hidden sm:block">
                                                {registry.name.length > 15 ? registry.name.slice(0, 15) + '...' : registry.name}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-[8px] md:text-[9px] text-cyan-300/70 uppercase tracking-wide">
                                                Issued
                                            </span>
                                            <span className="text-xs md:text-sm font-semibold text-cyan-100 flex items-center gap-1">
                                                <TrendingUp className="h-2.5 w-2.5 text-cyan-400 hidden md:block" />
                                                {formatNumber(registry.issued!)}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-[8px] md:text-[9px] text-amber-300/70 uppercase tracking-wide">
                                                Redeemed
                                            </span>
                                            <span className="text-xs md:text-sm font-semibold text-amber-100">
                                                {registry.retired ? formatNumber(registry.retired) : 'N/A'}
                                            </span>
                                        </div>
                                        <div className="hidden md:flex px-1.5 py-0.5 rounded bg-slate-800/80 text-[8px] text-slate-400">
                                            {registry.unit}
                                        </div>
                                    </div>
                                ))}

                                {/* Spacer between sequences */}
                                <div className="flex-shrink-0 w-8" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info button - links to detailed registry page - right side */}
                <Link
                    to="/insights"
                    className="flex items-center justify-center flex-shrink-0 ml-2 md:ml-4 w-6 h-6 md:w-7 md:h-7 rounded-full bg-slate-800/80 border border-slate-600/50 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
                    title="View detailed registry data"
                >
                    <span className="text-[10px] md:text-xs font-bold">i</span>
                </Link>
            </div>

            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }

                .animate-scroll-left {
                    animation: scroll-left 25s linear infinite;
                }

                /* Continuous scrolling - no pause on hover */

                .animate-shimmer {
                    animation: shimmer 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
