import { useState, useEffect } from 'react';
import {
    Sun, Wind, Droplet, Flame, TreePine, Factory as FactoryIcon,
    Edit2, Save, X, RefreshCw, ChevronDown, ChevronUp, Plus, Trash2,
    BarChart3
} from 'lucide-react';
import { BACKEND_API_URL } from '../../config/dataUrls';

// API Base URL - uses deployed backend in production
const API_BASE = BACKEND_API_URL;

interface Subsector {
    name: string;
    issued: number;
    retired: number | null;
}

interface Sector {
    name: string;
    subsectors: Subsector[];
}

interface InsightsRegistry {
    id: string;
    name: string;
    symbol: string;
    issued: number;
    retired: number | null;
    unit: string;
    sectors: Sector[];
}

interface InsightsData {
    lastUpdated: string;
    carbonCredits: {
        summary: { totalIssued: number; totalRetired: number; unit: string };
        registries: InsightsRegistry[];
    };
    renewableEnergyCertificates: {
        summary: { totalIssued: number; totalRetired: number; unit: string };
        registries: InsightsRegistry[];
    };
}

// Icon mapping for subsectors
const getSubsectorIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('solar')) return Sun;
    if (lower.includes('wind')) return Wind;
    if (lower.includes('hydro')) return Droplet;
    if (lower.includes('biomass') || lower.includes('biochar')) return Flame;
    if (lower.includes('forest') || lower.includes('redd') || lower.includes('tree')) return TreePine;
    return FactoryIcon;
};

// Format number
const formatNum = (n: number | null): string => {
    if (n === null) return '0';
    if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
    return n.toLocaleString();
};

// Subsector Edit Modal
function SubsectorEditModal({
    isOpen, onClose, onSave, subsector, registryName, sectorName
}: {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: Subsector) => void;
    subsector: Subsector | null;
    registryName: string;
    sectorName: string;
}) {
    const [formData, setFormData] = useState<Subsector>({ name: '', issued: 0, retired: null });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (subsector) setFormData(subsector);
    }, [subsector]);

    if (!isOpen || !subsector) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        await onSave(formData);
        setSaving(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl">
                <div className="flex items-center justify-between p-5 border-b border-slate-700">
                    <div>
                        <h3 className="text-lg font-bold text-slate-100">Edit Subsector</h3>
                        <p className="text-xs text-slate-400">{registryName} → {sectorName}</p>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-200 rounded-lg">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-5 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Subsector Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Issued</label>
                            <input
                                type="number"
                                value={formData.issued}
                                onChange={(e) => setFormData({ ...formData, issued: parseFloat(e.target.value) || 0 })}
                                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100"
                                step="any"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Retired</label>
                            <input
                                type="number"
                                value={formData.retired ?? ''}
                                onChange={(e) => setFormData({ ...formData, retired: e.target.value ? parseFloat(e.target.value) : null })}
                                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100"
                                step="any"
                                placeholder="null"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg flex items-center gap-2"
                        >
                            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Main Insights Manager Component
export default function InsightsManager({ token }: { token: string }) {
    const [data, setData] = useState<InsightsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'carbon' | 'rec'>('carbon');
    const [expandedRegistries, setExpandedRegistries] = useState<Set<string>>(new Set());
    const [editModal, setEditModal] = useState<{
        isOpen: boolean;
        subsector: Subsector | null;
        registryId: string;
        registryName: string;
        sectorName: string;
    }>({ isOpen: false, subsector: null, registryId: '', registryName: '', sectorName: '' });
    const [message, setMessage] = useState({ type: '', text: '' });

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE}/api/insights/all`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.ok) setData(await res.json());
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    useEffect(() => { fetchData(); }, [token]);

    const showMessage = (type: string, text: string) => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    };

    const toggleRegistry = (id: string) => {
        const next = new Set(expandedRegistries);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setExpandedRegistries(next);
    };

    const handleEditSubsector = (registry: InsightsRegistry, sectorName: string, subsector: Subsector) => {
        setEditModal({
            isOpen: true,
            subsector,
            registryId: registry.id,
            registryName: registry.name,
            sectorName
        });
    };

    const handleSaveSubsector = async (updatedSubsector: Subsector) => {
        const endpoint = activeTab === 'carbon' ? 'carbon' : 'rec';
        const url = `${API_BASE}/api/insights/${endpoint}/registry/${editModal.registryId}/sector/${encodeURIComponent(editModal.sectorName)}/subsector/${encodeURIComponent(editModal.subsector?.name || '')}`;

        try {
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedSubsector)
            });
            if (res.ok) {
                showMessage('success', 'Subsector updated successfully');
                fetchData();
            } else {
                const err = await res.json();
                showMessage('error', err.detail || 'Update failed');
            }
        } catch (err) {
            showMessage('error', 'Network error');
        }
    };

    const getRegistries = () => {
        if (!data) return [];
        return activeTab === 'carbon'
            ? data.carbonCredits.registries
            : data.renewableEnergyCertificates.registries;
    };

    const getSummary = () => {
        if (!data) return { totalIssued: 0, totalRetired: 0, unit: '' };
        return activeTab === 'carbon'
            ? data.carbonCredits.summary
            : data.renewableEnergyCertificates.summary;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <RefreshCw className="w-8 h-8 text-purple-400 animate-spin" />
            </div>
        );
    }

    const summary = getSummary();
    const registries = getRegistries();

    return (
        <div className="space-y-6">
            {/* Message */}
            {message.text && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' :
                    'bg-red-500/10 border border-red-500/30 text-red-400'
                    }`}>
                    {message.text}
                </div>
            )}

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/60 border border-purple-500/20 rounded-xl p-5">
                    <p className="text-sm text-slate-400 mb-1">Total Issued ({summary.unit})</p>
                    <p className="text-2xl font-bold text-purple-400">{formatNum(summary.totalIssued)}</p>
                </div>
                <div className="bg-slate-900/60 border border-pink-500/20 rounded-xl p-5">
                    <p className="text-sm text-slate-400 mb-1">Total Retired ({summary.unit})</p>
                    <p className="text-2xl font-bold text-pink-400">{formatNum(summary.totalRetired)}</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setActiveTab('carbon')}
                    className={`px-5 py-3 rounded-xl font-medium ${activeTab === 'carbon'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
                        }`}
                >
                    Carbon Credits ({data?.carbonCredits.registries.length || 0})
                </button>
                <button
                    onClick={() => setActiveTab('rec')}
                    className={`px-5 py-3 rounded-xl font-medium ${activeTab === 'rec'
                        ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                        : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
                        }`}
                >
                    RECs ({data?.renewableEnergyCertificates.registries.length || 0})
                </button>
                <button onClick={fetchData} className="ml-auto p-2 text-slate-400 hover:text-purple-400">
                    <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                </button>
            </div>

            {/* Registries */}
            <div className="space-y-4">
                {registries.map((registry) => (
                    <div key={registry.id} className="bg-slate-900/60 border border-slate-700/50 rounded-xl overflow-hidden">
                        {/* Registry Header */}
                        <button
                            onClick={() => toggleRegistry(registry.id)}
                            className="w-full flex items-center justify-between p-5 hover:bg-slate-800/30"
                        >
                            <div className="flex items-center gap-4">
                                <span className={`px-3 py-1 rounded-lg font-bold text-sm ${activeTab === 'carbon' ? 'bg-purple-500/20 text-purple-400' : 'bg-pink-500/20 text-pink-400'
                                    }`}>
                                    {registry.symbol}
                                </span>
                                <div className="text-left">
                                    <p className="font-medium text-slate-200">{registry.name}</p>
                                    <p className="text-xs text-slate-500">
                                        {registry.sectors.length} sectors · {registry.sectors.reduce((a, s) => a + s.subsectors.length, 0)} subsectors
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <p className="text-sm text-slate-400">Issued</p>
                                    <p className={`font-bold ${activeTab === 'carbon' ? 'text-purple-400' : 'text-pink-400'}`}>
                                        {formatNum(registry.issued)}
                                    </p>
                                </div>
                                {expandedRegistries.has(registry.id) ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                            </div>
                        </button>

                        {/* Expanded Content */}
                        {expandedRegistries.has(registry.id) && (
                            <div className="border-t border-slate-700/50 p-5 space-y-4">
                                {registry.sectors.map((sector, si) => (
                                    <div key={si} className="space-y-2">
                                        <h4 className="text-sm font-medium text-slate-300 mb-3">{sector.name}</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {sector.subsectors.map((sub, subi) => {
                                                const Icon = getSubsectorIcon(sub.name);
                                                return (
                                                    <div key={subi} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg group">
                                                        <div className="flex items-center gap-3">
                                                            <Icon className={`w-4 h-4 ${activeTab === 'carbon' ? 'text-purple-400' : 'text-pink-400'}`} />
                                                            <span className="text-sm text-slate-200">{sub.name}</span>
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <div className="text-right text-sm">
                                                                <span className={activeTab === 'carbon' ? 'text-purple-400' : 'text-pink-400'}>
                                                                    {formatNum(sub.issued)}
                                                                </span>
                                                                <span className="text-slate-500 mx-1">/</span>
                                                                <span className="text-slate-400">{formatNum(sub.retired)}</span>
                                                            </div>
                                                            <button
                                                                onClick={() => handleEditSubsector(registry, sector.name, sub)}
                                                                className="p-1.5 text-slate-500 hover:text-purple-400 opacity-0 group-hover:opacity-100 transition"
                                                            >
                                                                <Edit2 className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Edit Modal */}
            <SubsectorEditModal
                isOpen={editModal.isOpen}
                onClose={() => setEditModal({ ...editModal, isOpen: false })}
                onSave={handleSaveSubsector}
                subsector={editModal.subsector}
                registryName={editModal.registryName}
                sectorName={editModal.sectorName}
            />
        </div>
    );
}
