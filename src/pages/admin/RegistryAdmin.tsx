import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    Leaf,
    Zap,
    AlertCircle,
    RefreshCw,
    TrendingUp,
    Calendar,
    Database
} from 'lucide-react';

interface Registry {
    id: string;
    name: string;
    symbol: string;
    issued: number;
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

// Format large numbers for display
const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
};

// Format with suffix
const formatShort = (num: number): string => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
};

export default function RegistryAdmin() {
    const [data, setData] = useState<RegistryData | null>(null);
    const [loading, setLoading] = useState(true);

    // Load data
    useEffect(() => {
        fetch('/Data/registryData.json')
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

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
                <div className="flex items-center gap-3 text-emerald-400">
                    <RefreshCw className="w-6 h-6 animate-spin" />
                    <span>Loading registry data...</span>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-white mb-2">Failed to load data</h2>
                    <p className="text-slate-400 mb-4">Unable to load registry data from server.</p>
                    <Link to="/" className="text-emerald-400 hover:underline">
                        Return to home
                    </Link>
                </div>
            </div>
        );
    }

    const RegistryCard = ({ registry, type }: { registry: Registry; type: 'carbon' | 'rec' }) => {
        const color = type === 'carbon' ? 'emerald' : 'cyan';
        const retiredLabel = type === 'carbon' ? 'Retired' : 'Redeemed';

        return (
            <div className={`relative bg-slate-800/40 border border-${color}-500/20 rounded-xl p-5 hover:border-${color}-500/40 transition-all duration-300`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-${color}-500/20 flex items-center justify-center`}>
                        <span className={`text-lg font-bold text-${color}-400`}>{registry.symbol.slice(0, 2)}</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-white">{registry.symbol}</h4>
                        <p className="text-xs text-slate-400">{registry.name}</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="flex items-center gap-1.5 mb-1">
                            <TrendingUp className={`w-3 h-3 text-${color}-400`} />
                            <span className="text-[10px] text-slate-500 uppercase tracking-wide">Issued</span>
                        </div>
                        <div className={`text-lg font-bold text-${color}-300`}>
                            {formatShort(registry.issued)}
                        </div>
                        <div className="text-[10px] text-slate-500">{formatNumber(registry.issued)} {registry.unit}</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="flex items-center gap-1.5 mb-1">
                            <Database className={`w-3 h-3 ${type === 'carbon' ? 'text-cyan-400' : 'text-amber-400'}`} />
                            <span className="text-[10px] text-slate-500 uppercase tracking-wide">{retiredLabel}</span>
                        </div>
                        <div className={`text-lg font-bold ${type === 'carbon' ? 'text-cyan-300' : 'text-amber-300'}`}>
                            {registry.retired ? formatShort(registry.retired) : 'N/A'}
                        </div>
                        <div className="text-[10px] text-slate-500">
                            {registry.retired ? `${formatNumber(registry.retired)} ${registry.unit}` : 'Data not available'}
                        </div>
                    </div>
                </div>

                {/* Records count if available */}
                {registry.records && (
                    <div className="mt-3 pt-3 border-t border-slate-700/50">
                        <span className="text-[10px] text-slate-500">
                            {formatNumber(registry.records)} issuance records
                        </span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="text-sm">Back to Home</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs">Last 12 months data</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Global Registry Data
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Comprehensive view of carbon credit and renewable energy certificate issuance
                        across major global registries for the last 12 months.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
                        <span>Data updated: {data.lastUpdated}</span>
                        <span>•</span>
                        <span>Source: Verified registry reports</span>
                    </div>
                </div>

                {/* Totals Summary */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Carbon Credits</h3>
                                <p className="text-xs text-slate-400">{data.carbonRegistries.length} registries tracked</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 rounded-xl p-4">
                                <div className="text-xs text-slate-400 mb-1">Total Issued</div>
                                <div className="text-2xl font-bold text-emerald-300">{formatShort(data.totals.carbon.issued)}</div>
                                <div className="text-[10px] text-slate-500 mt-1">{formatNumber(data.totals.carbon.issued)} tCO2e</div>
                            </div>
                            <div className="bg-slate-900/50 rounded-xl p-4">
                                <div className="text-xs text-slate-400 mb-1">Total Retired</div>
                                <div className="text-2xl font-bold text-cyan-300">{formatShort(data.totals.carbon.retired)}</div>
                                <div className="text-[10px] text-slate-500 mt-1">{formatNumber(data.totals.carbon.retired)} tCO2e</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Renewable Energy Certificates</h3>
                                <p className="text-xs text-slate-400">{data.recRegistries.length} registries tracked</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 rounded-xl p-4">
                                <div className="text-xs text-slate-400 mb-1">Total Issued</div>
                                <div className="text-2xl font-bold text-cyan-300">{formatShort(data.totals.rec.issued)}</div>
                                <div className="text-[10px] text-slate-500 mt-1">{formatNumber(data.totals.rec.issued)} MWh</div>
                            </div>
                            <div className="bg-slate-900/50 rounded-xl p-4">
                                <div className="text-xs text-slate-400 mb-1">Total Redeemed</div>
                                <div className="text-2xl font-bold text-amber-300">{formatShort(data.totals.rec.retired)}</div>
                                <div className="text-[10px] text-slate-500 mt-1">{formatNumber(data.totals.rec.retired)} MWh</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carbon Registries */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Leaf className="w-5 h-5 text-emerald-400" />
                        <h2 className="text-xl font-bold text-white">Carbon Credit Registries</h2>
                        <span className="text-sm text-slate-500">({data.carbonRegistries.length})</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.carbonRegistries.filter(r => r.active).map(registry => (
                            <RegistryCard key={registry.id} registry={registry} type="carbon" />
                        ))}
                    </div>
                </div>

                {/* REC Registries */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-cyan-400" />
                        <h2 className="text-xl font-bold text-white">REC Registries</h2>
                        <span className="text-sm text-slate-500">({data.recRegistries.length})</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.recRegistries.filter(r => r.active).map(registry => (
                            <RegistryCard key={registry.id} registry={registry} type="rec" />
                        ))}
                    </div>
                </div>

                {/* Data Sources Note */}
                <div className="mt-12 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
                    <h3 className="text-sm font-semibold text-slate-300 mb-3">Data Sources</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Data compiled from official registry reports and verified sources including:
                        Verra VCS Registry, Gold Standard Impact Registry, American Carbon Registry (ACR),
                        Climate Action Reserve (CAR), ART TREES, Australian Clean Energy Regulator,
                        Puro Earth Registry, I-REC Standard, and REC India (Grid-India).
                    </p>
                    <p className="text-xs text-slate-600 mt-3">
                        Last updated: {data.lastUpdated} • Data represents the last 12 months of activity
                    </p>
                </div>
            </div>
        </div>
    );
}
