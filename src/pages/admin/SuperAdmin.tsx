import { useState, useEffect } from 'react';
import {
    Lock, User, LogOut, Leaf, Zap, Factory, Plus, Edit2, Trash2,
    Save, X, ChevronDown, ChevronUp, RefreshCw, Check, AlertCircle,
    Eye, EyeOff, Shield, BarChart3
} from 'lucide-react';
import InsightsManager from './InsightsManager';

// API Base URL - change in production
const API_BASE = 'http://localhost:8000';

// Types
interface CarbonRegistry {
    id: string;
    name: string;
    fullName?: string;
    symbol: string;
    country: string;
    type: string;
    issued: number | null;
    retired: number | null;
    unit: string;
    records: number | null;
    logo?: string;
    active: boolean;
}

interface RecRegistry {
    id: string;
    name: string;
    fullName?: string;
    symbol: string;
    country: string;
    type: string;
    issued: number | null;
    retired: number | null;
    unit: string;
    records: number | null;
    active: boolean;
}

interface EtsRegistry {
    id: string;
    name: string;
    fullName?: string;
    symbol: string;
    country: string;
    type: string;
    active: boolean;
}

interface RegistryData {
    lastUpdated: string;
    carbonRegistries: CarbonRegistry[];
    recRegistries: RecRegistry[];
    etsRegistries: EtsRegistry[];
    totals: any;
}

// Login Form Component
function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            const response = await fetch(`${API_BASE}/api/auth/login`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.detail || 'Invalid credentials');
            }

            const data = await response.json();
            sessionStorage.setItem('superadmin_token', data.access_token);
            onLogin(data.access_token);
        } catch (err: any) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-slate-950" />
                        </div>
                        <div className="text-left">
                            <h1 className="text-xl font-bold text-emerald-400 tracking-wide">CredoCarbon</h1>
                            <p className="text-xs text-slate-400">SuperAdmin Panel</p>
                        </div>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                            <Lock className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-slate-100">Admin Login</h2>
                            <p className="text-xs text-slate-400">Enter your credentials to continue</p>
                        </div>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition"
                                    placeholder="Enter username"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition"
                                    placeholder="Enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <RefreshCw className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <Lock className="w-5 h-5" />
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center text-xs text-slate-500 mt-6">
                    Protected area. Unauthorized access is prohibited.
                </p>
            </div>
        </div>
    );
}

// Registry Form Modal
function RegistryFormModal({
    isOpen,
    onClose,
    onSave,
    registry,
    type,
    mode
}: {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
    registry: any;
    type: 'carbon' | 'rec' | 'ets';
    mode: 'create' | 'edit';
}) {
    const [formData, setFormData] = useState<any>({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (registry) {
            setFormData(registry);
        } else {
            // Default values for new registry
            const defaults: any = {
                id: '',
                name: '',
                fullName: '',
                symbol: '',
                country: '',
                type: type === 'carbon' ? 'voluntary' : type,
                active: true,
            };
            if (type !== 'ets') {
                defaults.issued = null;
                defaults.retired = null;
                defaults.unit = type === 'carbon' ? 'tCO2e' : 'MWh';
                defaults.records = null;
            }
            if (type === 'carbon') {
                defaults.logo = '';
            }
            setFormData(defaults);
        }
    }, [registry, type]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            await onSave(formData);
            onClose();
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (field: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    const handleNumberChange = (field: string, value: string) => {
        const num = value === '' ? null : parseFloat(value);
        setFormData((prev: any) => ({ ...prev, [field]: num }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                        {type === 'carbon' && <Leaf className="w-6 h-6 text-emerald-400" />}
                        {type === 'rec' && <Zap className="w-6 h-6 text-cyan-400" />}
                        {type === 'ets' && <Factory className="w-6 h-6 text-amber-400" />}
                        <h2 className="text-xl font-bold text-slate-100">
                            {mode === 'create' ? 'Add New' : 'Edit'} {type.toUpperCase()} Registry
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* ID */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                ID <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.id || ''}
                                onChange={(e) => handleChange('id', e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                placeholder="e.g., verra-vcs"
                                required
                                disabled={mode === 'edit'}
                            />
                        </div>

                        {/* Symbol */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Symbol <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.symbol || ''}
                                onChange={(e) => handleChange('symbol', e.target.value.toUpperCase())}
                                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                placeholder="e.g., VCS"
                                required
                            />
                        </div>

                        {/* Name */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.name || ''}
                                onChange={(e) => handleChange('name', e.target.value)}
                                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                placeholder="e.g., Verra VCS"
                                required
                            />
                        </div>

                        {/* Full Name */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                            <input
                                type="text"
                                value={formData.fullName || ''}
                                onChange={(e) => handleChange('fullName', e.target.value)}
                                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                placeholder="e.g., Verra – Verified Carbon Standard"
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Country <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.country || ''}
                                onChange={(e) => handleChange('country', e.target.value)}
                                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                placeholder="e.g., USA"
                                required
                            />
                        </div>

                        {/* Active Toggle */}
                        <div className="flex items-center gap-3">
                            <label className="block text-sm font-medium text-slate-300">Active</label>
                            <button
                                type="button"
                                onClick={() => handleChange('active', !formData.active)}
                                className={`relative w-12 h-6 rounded-full transition-colors ${formData.active ? 'bg-emerald-500' : 'bg-slate-700'
                                    }`}
                            >
                                <div
                                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.active ? 'left-7' : 'left-1'
                                        }`}
                                />
                            </button>
                            <span className="text-sm text-slate-400">
                                {formData.active ? 'Visible in banner' : 'Hidden from banner'}
                            </span>
                        </div>

                        {/* Issued - Only for Carbon and REC */}
                        {type !== 'ets' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Issued ({formData.unit || (type === 'carbon' ? 'tCO2e' : 'MWh')})
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.issued ?? ''}
                                        onChange={(e) => handleNumberChange('issued', e.target.value)}
                                        className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                        placeholder="e.g., 64157842"
                                        step="any"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Retired ({formData.unit || (type === 'carbon' ? 'tCO2e' : 'MWh')})
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.retired ?? ''}
                                        onChange={(e) => handleNumberChange('retired', e.target.value)}
                                        className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                        placeholder="e.g., 19746982"
                                        step="any"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Records Count</label>
                                    <input
                                        type="number"
                                        value={formData.records ?? ''}
                                        onChange={(e) => handleNumberChange('records', e.target.value)}
                                        className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                        placeholder="e.g., 2755"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Unit</label>
                                    <select
                                        value={formData.unit || ''}
                                        onChange={(e) => handleChange('unit', e.target.value)}
                                        className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                    >
                                        <option value="tCO2e">tCO2e</option>
                                        <option value="MWh">MWh</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {/* Logo - Only for Carbon */}
                        {type === 'carbon' && (
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-300 mb-2">Logo Path</label>
                                <input
                                    type="text"
                                    value={formData.logo || ''}
                                    onChange={(e) => handleChange('logo', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-emerald-500/50 transition"
                                    placeholder="e.g., /images/verra.webp"
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-700">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2.5 text-slate-300 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-semibold rounded-lg transition-all shadow-lg shadow-emerald-500/30 disabled:opacity-50 flex items-center gap-2"
                        >
                            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            {mode === 'create' ? 'Create' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Admin Dashboard Component
function AdminDashboard({ token, onLogout }: { token: string; onLogout: () => void }) {
    const [data, setData] = useState<RegistryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState<'carbon' | 'rec' | 'ets'>('carbon');
    const [mainSection, setMainSection] = useState<'registries' | 'insights'>('registries');
    const [successMessage, setSuccessMessage] = useState('');

    // Modal state
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
    const [selectedRegistry, setSelectedRegistry] = useState<any>(null);

    // Fetch data
    const fetchData = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${API_BASE}/api/registries/all`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                if (response.status === 401) {
                    onLogout();
                    return;
                }
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [token]);

    // Show success message temporarily
    const showSuccess = (message: string) => {
        setSuccessMessage(message);
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    // Handle create
    const handleCreate = () => {
        setSelectedRegistry(null);
        setModalMode('create');
        setModalOpen(true);
    };

    // Handle edit
    const handleEdit = (registry: any) => {
        setSelectedRegistry(registry);
        setModalMode('edit');
        setModalOpen(true);
    };

    // Handle save (create or update)
    const handleSave = async (formData: any) => {
        const endpoint = modalMode === 'create'
            ? `${API_BASE}/api/registries/${activeTab}`
            : `${API_BASE}/api/registries/${activeTab}/${formData.id}`;

        const method = modalMode === 'create' ? 'POST' : 'PUT';

        try {
            const response = await fetch(endpoint, {
                method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || 'Operation failed');
            }

            const result = await response.json();
            showSuccess(result.message);
            fetchData();
        } catch (err: any) {
            setError(err.message);
        }
    };

    // Handle delete
    const handleDelete = async (registryId: string, registryName: string) => {
        if (!confirm(`Are you sure you want to delete "${registryName}"?`)) return;

        try {
            const response = await fetch(`${API_BASE}/api/registries/${activeTab}/${registryId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || 'Delete failed');
            }

            const result = await response.json();
            showSuccess(result.message);
            fetchData();
        } catch (err: any) {
            setError(err.message);
        }
    };

    // Format number for display
    const formatNumber = (num: number | null): string => {
        if (num === null) return 'N/A';
        if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
        return num.toLocaleString();
    };

    // Get current registries based on tab
    const getCurrentRegistries = (): any[] => {
        if (!data) return [];
        switch (activeTab) {
            case 'carbon': return data.carbonRegistries;
            case 'rec': return data.recRegistries;
            case 'ets': return data.etsRegistries;
            default: return [];
        }
    };

    if (loading && !data) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="w-10 h-10 text-emerald-400 animate-spin" />
                    <p className="text-slate-400">Loading registry data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-slate-950" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-emerald-400">CredoCarbon</h1>
                            <p className="text-xs text-slate-500">SuperAdmin Panel</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {data && (
                            <span className="text-xs text-slate-500">
                                Last updated: {data.lastUpdated}
                            </span>
                        )}
                        <button
                            onClick={fetchData}
                            className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition"
                            title="Refresh"
                        >
                            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                        </button>
                        <button
                            onClick={onLogout}
                            className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-red-400 hover:bg-slate-800 rounded-lg transition"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Success Message */}
                {successMessage && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 animate-fadeIn">
                        <Check className="w-5 h-5" />
                        {successMessage}
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400">
                        <AlertCircle className="w-5 h-5" />
                        {error}
                        <button onClick={() => setError('')} className="ml-auto hover:text-red-300">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Stats Summary */}
                {data && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-slate-900/60 border border-emerald-500/20 rounded-xl p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <Leaf className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm text-slate-400">Carbon Registries</span>
                            </div>
                            <p className="text-2xl font-bold text-emerald-400">{data.carbonRegistries.length}</p>
                        </div>
                        <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <Zap className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm text-slate-400">REC Registries</span>
                            </div>
                            <p className="text-2xl font-bold text-cyan-400">{data.recRegistries.length}</p>
                        </div>
                        <div className="bg-slate-900/60 border border-amber-500/20 rounded-xl p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <Factory className="w-5 h-5 text-amber-400" />
                                <span className="text-sm text-slate-400">ETS Registries</span>
                            </div>
                            <p className="text-2xl font-bold text-amber-400">{data.etsRegistries.length}</p>
                        </div>
                        <div className="bg-slate-900/60 border border-purple-500/20 rounded-xl p-5">
                            <div className="flex items-center gap-3 mb-2">
                                <Shield className="w-5 h-5 text-purple-400" />
                                <span className="text-sm text-slate-400">Total</span>
                            </div>
                            <p className="text-2xl font-bold text-purple-400">{data.totals.totalRegistries}</p>
                        </div>
                    </div>
                )}

                {/* Main Section Tabs */}
                <div className="flex items-center gap-4 mb-6 border-b border-slate-700/50 pb-4">
                    <button
                        onClick={() => setMainSection('registries')}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${mainSection === 'registries'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800'
                            }`}
                    >
                        <Shield className="w-4 h-4" />
                        Registry Data
                    </button>
                    <button
                        onClick={() => setMainSection('insights')}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${mainSection === 'insights'
                            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                            : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800'
                            }`}
                    >
                        <BarChart3 className="w-4 h-4" />
                        Insights Data
                    </button>
                </div>

                {/* Show Insights Manager or Registry Manager */}
                {mainSection === 'insights' ? (
                    <InsightsManager token={token} />
                ) : (
                    <>
                        {/* Tabs */}
                        <div className="flex items-center gap-2 mb-6">
                            {[
                                { id: 'carbon', label: 'Carbon Credits', icon: Leaf, color: 'emerald' },
                                { id: 'rec', label: 'RECs', icon: Zap, color: 'cyan' },
                                { id: 'ets', label: 'ETS', icon: Factory, color: 'amber' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${activeTab === tab.id
                                        ? `bg-${tab.color}-500/20 text-${tab.color}-400 border border-${tab.color}-500/30`
                                        : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}

                            <button
                                onClick={handleCreate}
                                className="ml-auto flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/30"
                            >
                                <Plus className="w-4 h-4" />
                                Add Registry
                            </button>
                        </div>

                        {/* Registry Table */}
                        <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-slate-800/50 border-b border-slate-700/50">
                                        <tr>
                                            <th className="text-left px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Symbol</th>
                                            <th className="text-left px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Name</th>
                                            <th className="text-left px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Country</th>
                                            {activeTab !== 'ets' && (
                                                <>
                                                    <th className="text-right px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Issued</th>
                                                    <th className="text-right px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Retired</th>
                                                </>
                                            )}
                                            <th className="text-center px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Active</th>
                                            <th className="text-right px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-700/50">
                                        {getCurrentRegistries().map((registry) => (
                                            <tr key={registry.id} className="hover:bg-slate-800/30 transition">
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center justify-center w-12 h-8 rounded-lg font-bold text-sm ${activeTab === 'carbon' ? 'bg-emerald-500/20 text-emerald-400' :
                                                        activeTab === 'rec' ? 'bg-cyan-500/20 text-cyan-400' :
                                                            'bg-amber-500/20 text-amber-400'
                                                        }`}>
                                                        {registry.symbol}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="text-sm font-medium text-slate-200">{registry.name}</p>
                                                    {registry.fullName && (
                                                        <p className="text-xs text-slate-500 truncate max-w-[200px]">{registry.fullName}</p>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-300">{registry.country}</td>
                                                {activeTab !== 'ets' && (
                                                    <>
                                                        <td className="px-6 py-4 text-right">
                                                            <span className={`text-sm font-medium ${activeTab === 'carbon' ? 'text-emerald-400' : 'text-cyan-400'
                                                                }`}>
                                                                {formatNumber(registry.issued)}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right text-sm text-slate-300">
                                                            {formatNumber(registry.retired)}
                                                        </td>
                                                    </>
                                                )}
                                                <td className="px-6 py-4 text-center">
                                                    <span className={`inline-flex w-3 h-3 rounded-full ${registry.active ? 'bg-emerald-400' : 'bg-slate-600'
                                                        }`} />
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => handleEdit(registry)}
                                                            className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition"
                                                            title="Edit"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(registry.id, registry.name)}
                                                            className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition"
                                                            title="Delete"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </main>

            {/* Modal */}
            <RegistryFormModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
                registry={selectedRegistry}
                type={activeTab}
                mode={modalMode}
            />

            {/* Custom CSS */}
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

// Main SuperAdmin Component
export default function SuperAdmin() {
    const [token, setToken] = useState<string | null>(null);
    const [checkingAuth, setCheckingAuth] = useState(true);

    // Check for existing token on mount
    useEffect(() => {
        const storedToken = sessionStorage.getItem('superadmin_token');
        if (storedToken) {
            // Verify token is still valid
            verifyToken(storedToken);
        } else {
            setCheckingAuth(false);
        }
    }, []);

    const verifyToken = async (storedToken: string) => {
        try {
            const response = await fetch(`${API_BASE}/api/auth/verify`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${storedToken}`,
                },
            });
            if (response.ok) {
                setToken(storedToken);
            } else {
                sessionStorage.removeItem('superadmin_token');
            }
        } catch (err) {
            sessionStorage.removeItem('superadmin_token');
        } finally {
            setCheckingAuth(false);
        }
    };

    const handleLogin = (newToken: string) => {
        setToken(newToken);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('superadmin_token');
        setToken(null);
    };

    if (checkingAuth) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin" />
            </div>
        );
    }

    if (!token) {
        return <LoginForm onLogin={handleLogin} />;
    }

    return <AdminDashboard token={token} onLogout={handleLogout} />;
}
