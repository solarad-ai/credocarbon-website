import { useEffect, useState } from 'react';
import {
    Leaf, Zap, TrendingDown,
    ChevronDown, BarChart3,
    Sun, Wind, Droplets, Flame, TreePine, Factory, Sparkles,
    Info, Activity
} from 'lucide-react';

// Types
interface Subsector {
    name: string;
    issued: number;
    retired: number | null;
}

interface Sector {
    name: string;
    subsectors: Subsector[];
}

interface Registry {
    id: string;
    name: string;
    symbol: string;
    issued: number;
    retired: number | null;
    unit: string;
    sectors: Sector[];
}

interface Summary {
    totalIssued: number;
    totalRetired: number;
    unit: string;
}

interface CategoryData {
    summary: Summary;
    registries: Registry[];
}

interface InsightsData {
    lastUpdated: string;
    description: string;
    carbonCredits: CategoryData;
    renewableEnergyCertificates: CategoryData;
    marketTrends: {
        topGrowingSectors: { name: string; growth: number; unit: string }[];
        regionBreakdown: { region: string; share: number; unit: string }[];
    };
}

// Aggregated sector data across all registries
interface AggregatedSector {
    name: string;
    icon: React.ReactNode;
    totalIssued: number;
    totalRetired: number;
    registryBreakdown: {
        registryName: string;
        registrySymbol: string;
        issued: number;
        retired: number | null;
    }[];
}

// Utility functions
const formatNumber = (num: number | null, decimals: number = 1): string => {
    if (num === null) return 'N/A';
    if (num >= 1e9) return (num / 1e9).toFixed(decimals) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(decimals) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(decimals) + 'K';
    return num.toFixed(decimals);
};

// Get icon for sector/subsector
const getSectorIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('solar')) return <Sun className="w-6 h-6" />;
    if (lowerName.includes('wind')) return <Wind className="w-6 h-6" />;
    if (lowerName.includes('hydro')) return <Droplets className="w-6 h-6" />;
    if (lowerName.includes('biomass') || lowerName.includes('biochar')) return <Flame className="w-6 h-6" />;
    if (lowerName.includes('forest') || lowerName.includes('redd') || lowerName.includes('tree') || lowerName.includes('afforestation')) return <TreePine className="w-6 h-6" />;
    if (lowerName.includes('industrial') || lowerName.includes('carbon capture') || lowerName.includes('ods')) return <Factory className="w-6 h-6" />;
    if (lowerName.includes('cookstove') || lowerName.includes('building')) return <Sparkles className="w-6 h-6" />;
    if (lowerName.includes('geothermal')) return <Activity className="w-6 h-6" />;
    return <Activity className="w-6 h-6" />;
};

// Sector Card Component - Now with controlled state
function SectorCard({
    sector,
    isCarbon,
    isExpanded,
    onToggle
}: {
    sector: AggregatedSector;
    isCarbon: boolean;
    isExpanded: boolean;
    onToggle: () => void;
}) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        onToggle();
    };

    return (
        <div className={`bg-slate-900/60 backdrop-blur-sm border ${isCarbon ? 'border-emerald-500/20 hover:border-emerald-500/40' : 'border-cyan-500/20 hover:border-cyan-500/40'} rounded-2xl overflow-hidden transition-all duration-300`}>
            {/* Card Header - Clickable */}
            <div
                className="p-5 cursor-pointer hover:bg-slate-800/30 transition-colors"
                onClick={handleClick}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${isCarbon ? 'from-emerald-400 to-emerald-600' : 'from-cyan-400 to-cyan-600'} flex items-center justify-center shadow-lg`}>
                            <span className="text-slate-950">{sector.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-slate-100">{sector.name}</h3>
                            <p className="text-xs text-slate-400">{sector.registryBreakdown.length} registr{sector.registryBreakdown.length !== 1 ? 'ies' : 'y'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs text-slate-400 uppercase tracking-wider">Total Issued</p>
                            <p className={`text-xl font-bold ${isCarbon ? 'text-emerald-400' : 'text-cyan-400'}`}>
                                {formatNumber(sector.totalIssued)}
                            </p>
                        </div>
                        <div className="text-right hidden sm:block">
                            <p className="text-xs text-slate-400 uppercase tracking-wider">Total Retired</p>
                            <p className="text-xl font-semibold text-slate-300">
                                {formatNumber(sector.totalRetired)}
                            </p>
                        </div>
                        <div className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown className={`w-5 h-5 ${isCarbon ? 'text-emerald-400' : 'text-cyan-400'}`} />
                        </div>
                    </div>
                </div>

                {/* Mobile stats */}
                <div className="flex gap-4 mt-4 sm:hidden">
                    <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
                        <p className="text-xs text-slate-400">Issued</p>
                        <p className={`text-lg font-bold ${isCarbon ? 'text-emerald-400' : 'text-cyan-400'}`}>
                            {formatNumber(sector.totalIssued)}
                        </p>
                    </div>
                    <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
                        <p className="text-xs text-slate-400">Retired</p>
                        <p className="text-lg font-semibold text-slate-300">
                            {formatNumber(sector.totalRetired)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Expanded Content - Registry Breakdown */}
            {isExpanded && (
                <div className="border-t border-slate-700/50 p-5 animate-fadeIn">
                    <h4 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Registry Breakdown</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sector.registryBreakdown.map((reg, idx) => (
                            <div
                                key={`${sector.name}-${reg.registrySymbol}-${idx}`}
                                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-200 group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-lg ${isCarbon ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cyan-500/20 text-cyan-400'} flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform`}>
                                        {reg.registrySymbol}
                                    </div>
                                    <span className="text-sm font-medium text-slate-200">
                                        {reg.registryName}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-400">Issued</span>
                                        <span className={`text-sm font-semibold ${isCarbon ? 'text-emerald-300' : 'text-cyan-300'}`}>
                                            {formatNumber(reg.issued)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-400">Retired</span>
                                        <span className="text-sm font-semibold text-slate-300">
                                            {formatNumber(reg.retired)}
                                        </span>
                                    </div>
                                    {reg.retired !== null && reg.issued > 0 && (
                                        <div className="pt-2 border-t border-slate-700/50">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs text-slate-500">Retirement Rate</span>
                                                <span className="text-xs font-medium text-amber-400">
                                                    {((reg.retired / reg.issued) * 100).toFixed(1)}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${isCarbon ? 'bg-emerald-500' : 'bg-cyan-500'}`}
                                                    style={{ width: `${Math.min((reg.retired / reg.issued) * 100, 100)}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// Summary Stats Component
function SummaryStats({ carbonData, recData }: { carbonData: CategoryData; recData: CategoryData }) {
    const stats = [
        {
            label: 'Carbon Credits Issued',
            value: carbonData.summary.totalIssued,
            unit: carbonData.summary.unit,
            icon: <Leaf className="w-5 h-5" />,
            isCarbon: true
        },
        {
            label: 'Carbon Credits Retired',
            value: carbonData.summary.totalRetired,
            unit: carbonData.summary.unit,
            icon: <TrendingDown className="w-5 h-5" />,
            isCarbon: true
        },
        {
            label: 'RECs Issued',
            value: recData.summary.totalIssued,
            unit: recData.summary.unit,
            icon: <Zap className="w-5 h-5" />,
            isCarbon: false
        },
        {
            label: 'RECs Retired',
            value: recData.summary.totalRetired,
            unit: recData.summary.unit,
            icon: <TrendingDown className="w-5 h-5" />,
            isCarbon: false
        }
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className={`relative overflow-hidden bg-slate-900/60 backdrop-blur-sm border ${stat.isCarbon ? 'border-emerald-500/20 hover:border-emerald-500/40' : 'border-cyan-500/20 hover:border-cyan-500/40'} rounded-2xl p-5 transition-all duration-300 group`}
                >
                    <div className={`absolute top-0 right-0 w-24 h-24 ${stat.isCarbon ? 'bg-emerald-500/5 group-hover:bg-emerald-500/10' : 'bg-cyan-500/5 group-hover:bg-cyan-500/10'} rounded-full blur-2xl transition-all`} />

                    <div className={`inline-flex p-2 rounded-xl ${stat.isCarbon ? 'bg-emerald-500/10 text-emerald-400' : 'bg-cyan-500/10 text-cyan-400'} mb-3`}>
                        {stat.icon}
                    </div>

                    <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                    <p className={`text-2xl md:text-3xl font-bold ${stat.isCarbon ? 'text-emerald-400' : 'text-cyan-400'}`}>
                        {formatNumber(stat.value)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{stat.unit}</p>
                </div>
            ))}
        </div>
    );
}

// Tab Component
function TabButton({
    active,
    onClick,
    icon,
    label,
    isCarbon
}: {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
    isCarbon: boolean;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${active
                ? isCarbon
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800 hover:text-slate-300'
                }`}
        >
            {icon}
            <span className="hidden sm:inline">{label}</span>
        </button>
    );
}

// Helper function to aggregate sectors from all registries
function aggregateSectors(registries: Registry[]): AggregatedSector[] {
    const sectorMap: Map<string, AggregatedSector> = new Map();

    registries.forEach(registry => {
        registry.sectors.forEach(sector => {
            sector.subsectors.forEach(subsector => {
                const existing = sectorMap.get(subsector.name);
                if (existing) {
                    existing.totalIssued += subsector.issued;
                    existing.totalRetired += subsector.retired || 0;
                    existing.registryBreakdown.push({
                        registryName: registry.name,
                        registrySymbol: registry.symbol,
                        issued: subsector.issued,
                        retired: subsector.retired
                    });
                } else {
                    sectorMap.set(subsector.name, {
                        name: subsector.name,
                        icon: getSectorIcon(subsector.name),
                        totalIssued: subsector.issued,
                        totalRetired: subsector.retired || 0,
                        registryBreakdown: [{
                            registryName: registry.name,
                            registrySymbol: registry.symbol,
                            issued: subsector.issued,
                            retired: subsector.retired
                        }]
                    });
                }
            });
        });
    });

    // Sort by total issued (descending)
    return Array.from(sectorMap.values()).sort((a, b) => b.totalIssued - a.totalIssued);
}

// Main Component
export default function Insights() {
    const [data, setData] = useState<InsightsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'carbon' | 'rec'>('carbon');
    const [error, setError] = useState<string | null>(null);
    const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

    useEffect(() => {
        fetch('/Data/insightsData.json')
            .then(res => {
                if (!res.ok) throw new Error('Failed to load data');
                return res.json();
            })
            .then((insightsData: InsightsData) => {
                setData(insightsData);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load insights data:', err);
                setError('Failed to load insights data');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                    <p className="text-slate-400">Loading insights data...</p>
                </div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-400 mb-2">Error loading data</p>
                    <p className="text-slate-500 text-sm">{error}</p>
                </div>
            </div>
        );
    }

    const carbonSectors = aggregateSectors(data.carbonCredits.registries).slice(0, 8);
    const recSectors = aggregateSectors(data.renewableEnergyCertificates.registries).slice(0, 8);
    const activeSectors = activeTab === 'carbon' ? carbonSectors : recSectors;

    // Toggle a specific card's expansion
    const toggleCard = (cardKey: string) => {
        setExpandedCards(prev => {
            const next = new Set(prev);
            if (next.has(cardKey)) {
                next.delete(cardKey);
            } else {
                next.add(cardKey);
            }
            return next;
        });
    };

    // Clear expanded cards when tab changes
    const handleTabChange = (tab: 'carbon' | 'rec') => {
        setExpandedCards(new Set());
        setActiveTab(tab);
    };

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 mb-6">
                            <BarChart3 className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                                Market Insights
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 mb-4 pb-2">
                            Registry Insights
                        </h1>

                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Deep-dive analytics into carbon credits and renewable energy certificates
                            across major global registries.
                        </p>

                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                            <Activity className="w-3.5 h-3.5" />
                            <span>Data from last 12 months</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative pb-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
                    {/* Summary Stats */}
                    <SummaryStats
                        carbonData={data.carbonCredits}
                        recData={data.renewableEnergyCertificates}
                    />

                    {/* Sector Tabs */}
                    <div className="flex items-center gap-3">
                        <TabButton
                            active={activeTab === 'carbon'}
                            onClick={() => setActiveTab('carbon')}
                            icon={<Leaf className="w-4 h-4" />}
                            label="Carbon Credits"
                            isCarbon={true}
                        />
                        <TabButton
                            active={activeTab === 'rec'}
                            onClick={() => setActiveTab('rec')}
                            icon={<Zap className="w-4 h-4" />}
                            label="RECs"
                            isCarbon={false}
                        />
                    </div>

                    {/* Sector Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeSectors.map((sector) => (
                            <SectorCard
                                key={`${activeTab}-${sector.name}`}
                                sector={sector}
                                isCarbon={activeTab === 'carbon'}
                            />
                        ))}
                    </div>

                    {/* Data Notice */}
                    <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl p-4 flex items-start gap-3">
                        <Info className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-slate-400">
                            <p className="font-medium text-slate-300 mb-1">About this data</p>
                            <p>
                                Data is aggregated from official registry sources and updated periodically.
                                Sector breakdowns represent estimated distributions based on available project data.
                                For the most current figures, please refer to individual registry portals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom styles for animations */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}
