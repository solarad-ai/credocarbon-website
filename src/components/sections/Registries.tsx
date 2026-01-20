// src/components/sections/Registries.tsx
import { Globe, Database, Zap, Shield, CheckCircle, MapPin, Building2, Leaf, Sun, Factory } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Registry type definition
interface Registry {
  name: string;
  country: string;
  logo?: string;
  hasLogo?: boolean;
  abbr?: string;
}

// Voluntary Carbon Registries
const voluntaryCarbon: Registry[] = [
  { name: "Verra – VCS", country: "USA", logo: "/images/verra.webp", hasLogo: true },
  { name: "Gold Standard", country: "Switzerland", logo: "/images/gold_standards.png", hasLogo: true },
  { name: "ACR", country: "USA", logo: "/images/ACR_logo.png", hasLogo: true },
  { name: "Climate Action Reserve", country: "USA", abbr: "CAR" },
  { name: "Puro.Earth", country: "Finland", logo: "/images/PURO_logo.png", hasLogo: true },
  { name: "Plan Vivo", country: "UK", logo: "/images/Plan_vivo.png", hasLogo: true },
  { name: "ART-TREES", country: "USA", abbr: "ART" },
  { name: "Global Carbon Council", country: "Qatar", logo: "/images/Gcc.png", hasLogo: true },
  { name: "UK Woodland Carbon Code", country: "UK", logo: "/images/Woodland_logo.png", hasLogo: true },
  { name: "UK Peatland Code", country: "UK", abbr: "UPC" },
  { name: "CERC India Carbon Registry", country: "India", abbr: "CERC" },
  { name: "China CCER", country: "China", abbr: "CCER" },
  { name: "Korean Carbon Standard", country: "South Korea", abbr: "KCS" },
  { name: "Australian ACCU", country: "Australia", abbr: "ACCU" },
  { name: "South Africa COAS", country: "South Africa", abbr: "COAS" },
  { name: "Colombia RENARE", country: "Colombia", abbr: "REN" },
  { name: "Japan J-Credit", country: "Japan", abbr: "J-CR" },
  { name: "Thailand T-VER", country: "Thailand", abbr: "T-VER" },
  { name: "Indonesia SPEI", country: "Indonesia", abbr: "SPEI" },
  { name: "Singapore Carbon Services", country: "Singapore", abbr: "SCS" },
  { name: "CORSIA (ICAO)", country: "Global", abbr: "COR" },
];

// REC Registries
const recRegistries: Registry[] = [
  { name: "I-REC Standard", country: "Global", abbr: "I-REC" },
  { name: "GCC I-REC", country: "MENA", abbr: "GCC" },
  { name: "TIGR Registry", country: "USA", abbr: "TIGR" },
  { name: "EU EACs / GO", country: "EU", abbr: "EAC" },
  { name: "Green-e®", country: "USA", abbr: "GRN" },
  { name: "REC India CERC", country: "India", abbr: "REC" },
  { name: "China GEC", country: "China", abbr: "GEC" },
  { name: "Malaysia T-REC", country: "Malaysia", abbr: "T-REC" },
  { name: "Japan J-Credit RE", country: "Japan", abbr: "J-RE" },
  { name: "Australia LGC/SREC", country: "Australia", abbr: "LGC" },
  { name: "UK REGOs", country: "UK", abbr: "REGO" },
  { name: "Turkey YEK-G", country: "Turkey", abbr: "YEK" },
  { name: "Colombia CER", country: "Colombia", abbr: "CER" },
];

// ETS/Compliance Registries
const etsRegistries: Registry[] = [
  { name: "EU ETS Registry", country: "EU", abbr: "EU" },
  { name: "California CARB", country: "USA", abbr: "CARB" },
  { name: "RGGI", country: "USA", abbr: "RGGI" },
  { name: "UK ETS", country: "UK", abbr: "UK" },
  { name: "China National ETS", country: "China", abbr: "CN" },
  { name: "Korea K-ETS", country: "South Korea", abbr: "K-ETS" },
  { name: "New Zealand ETS", country: "New Zealand", abbr: "NZ" },
  { name: "Switzerland ETS", country: "Switzerland", abbr: "CH" },
  { name: "Japan GX League", country: "Japan", abbr: "GX" },
  { name: "Quebec ETS", country: "Canada", abbr: "QC" },
  { name: "Mexico ETS", country: "Mexico", abbr: "MX" },
  { name: "Kazakhstan ETS", country: "Kazakhstan", abbr: "KZ" },
  { name: "Colombia ETS", country: "Colombia", abbr: "CO" },
  { name: "Indonesia ETS", country: "Indonesia", abbr: "ID" },
];

// Featured registries with logos
const featuredLogos = [
  { src: "/images/verra.webp", alt: "Verra VCS" },
  { src: "/images/gold_standards.png", alt: "Gold Standard" },
  { src: "/images/ACR_logo.png", alt: "American Carbon Registry" },
  { src: "/images/Gcc.png", alt: "Global Carbon Council" },
  { src: "/images/Plan_vivo.png", alt: "Plan Vivo" },
  { src: "/images/PURO_logo.png", alt: "Puro Earth" },
  { src: "/images/Woodland_logo.png", alt: "Woodland Carbon Code" },
];

export default function Registries() {
  const [activeCategory, setActiveCategory] = useState("carbon");
  const { t } = useTranslation('platform');

  // Category tabs
  const categories = [
    {
      id: "carbon",
      label: t('registries.categories.carbon', 'Carbon Credit Registries'),
      icon: Leaf,
      data: voluntaryCarbon,
      color: "emerald",
      gradient: "from-emerald-400 to-teal-400",
      borderColor: "border-emerald-400/30",
      bgColor: "bg-emerald-500/10",
      count: voluntaryCarbon.length
    },
    {
      id: "rec",
      label: t('registries.categories.rec', 'REC Registries'),
      icon: Sun,
      data: recRegistries,
      color: "amber",
      gradient: "from-amber-400 to-orange-400",
      borderColor: "border-amber-400/30",
      bgColor: "bg-amber-500/10",
      count: recRegistries.length
    },
    {
      id: "ets",
      label: t('registries.categories.ets', 'Compliance / ETS'),
      icon: Factory,
      data: etsRegistries,
      color: "sky",
      gradient: "from-sky-400 to-blue-400",
      borderColor: "border-sky-400/30",
      bgColor: "bg-sky-500/10",
      count: etsRegistries.length
    },
  ];

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];
  const totalRegistries = voluntaryCarbon.length + recRegistries.length + etsRegistries.length;
  const totalCountries = new Set([
    ...voluntaryCarbon.map(r => r.country),
    ...recRegistries.map(r => r.country),
    ...etsRegistries.map(r => r.country)
  ]).size;

  return (
    <section
      id="registries"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* HERO HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 mb-6">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              {t('registries.badge', 'Global Registry Integration')}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight">
            {t('registries.title1', 'Integrated with')}
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 bg-clip-text text-transparent mt-2">
              {totalRegistries}+ {t('registries.title2', 'Global Registries')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
            {t('registries.description', 'CredoCarbon connects seamlessly with major carbon credit registries, renewable energy certificate systems, and compliance emission trading platforms worldwide — ensuring one unified interface for all your environmental assets.')}
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { value: `${voluntaryCarbon.length}+`, label: t('registries.stats.carbon', 'Carbon Registries'), icon: Leaf, color: "emerald" },
              { value: `${recRegistries.length}+`, label: t('registries.stats.rec', 'REC Systems'), icon: Sun, color: "amber" },
              { value: `${etsRegistries.length}+`, label: t('registries.stats.ets', 'ETS Platforms'), icon: Factory, color: "sky" },
              { value: `${totalCountries}+`, label: t('registries.stats.countries', 'Countries'), icon: MapPin, color: "purple" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 group">
                <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                </div>
                <div className="text-left">
                  <div className={`text-2xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-300 bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED LOGOS BANNER */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              {t('registries.featuredLabel', 'Featured Integrations')}
            </span>
          </div>
          <div dir="ltr" className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-r from-white/[0.03] via-white/[0.07] to-white/[0.03] backdrop-blur-sm px-8 py-10">
            {/* Animated scrolling logo strip */}
            <div className="flex animate-scroll-slow">
              <div className="flex items-center gap-16 px-8">
                {[...featuredLogos, ...featuredLogos].map((logo, i) => (
                  <div key={i} className="flex-shrink-0 group cursor-pointer">
                    <div className="relative bg-white/90 rounded-2xl px-6 py-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-emerald-500/20 group-hover:scale-110">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-12 md:h-14 w-auto object-contain filter grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  group flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300
                  ${activeCategory === category.id
                    ? `${category.borderColor} ${category.bgColor} shadow-lg`
                    : 'border-slate-700/50 bg-slate-900/50 hover:border-slate-600'
                  }
                `}
              >
                <category.icon className={`w-5 h-5 ${activeCategory === category.id ? `text-${category.color}-400` : 'text-slate-400 group-hover:text-slate-300'}`} />
                <span className={`font-semibold ${activeCategory === category.id ? 'text-slate-50' : 'text-slate-300 group-hover:text-slate-100'}`}>
                  {category.label}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-slate-900`
                  : 'bg-slate-800 text-slate-400'
                  }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>



        {/* PLATFORM FEATURES GRID */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              {t('registries.whyMatters.title1', 'Why Our Registry Integration')}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> {t('registries.whyMatters.title2', 'Matters')}</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t('registries.whyMatters.description', 'A unified platform for managing environmental assets across multiple registries with consistent data structures')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: t('registries.features.multiRegistry.title', 'Multi-Registry Compatibility'),
                desc: t('registries.features.multiRegistry.desc', 'Unified data structure supporting all major registries with cross-registry consistency and seamless portfolio management.'),
                gradient: "from-emerald-500/20 to-teal-600/20",
                borderColor: "border-emerald-400/30",
                iconColor: "text-emerald-400"
              },
              {
                icon: Database,
                title: t('registries.features.unifiedData.title', 'Unified Data Model'),
                desc: t('registries.features.unifiedData.desc', 'Standardized schemas across registries enabling consistent reporting, analytics, and compliance tracking.'),
                gradient: "from-sky-500/20 to-blue-600/20",
                borderColor: "border-sky-400/30",
                iconColor: "text-sky-400"
              },
              {
                icon: Shield,
                title: t('registries.features.compliance.title', 'Compliance Assurance'),
                desc: t('registries.features.compliance.desc', 'Registry-specific validation rules and automated compliance checks ensure every submission meets requirements.'),
                gradient: "from-amber-500/20 to-orange-600/20",
                borderColor: "border-amber-400/30",
                iconColor: "text-amber-400"
              },
              {
                icon: Zap,
                title: t('registries.features.realtime.title', 'Real-time Sync'),
                desc: t('registries.features.realtime.desc', 'Automatic synchronization with registry updates, methodology changes, and regulatory requirements.'),
                gradient: "from-purple-500/20 to-pink-600/20",
                borderColor: "border-purple-400/30",
                iconColor: "text-purple-400"
              },
              {
                icon: Building2,
                title: t('registries.features.ets.title', 'ETS Integration'),
                desc: t('registries.features.ets.desc', 'Direct connection to compliance markets for seamless offset management and regulatory reporting.'),
                gradient: "from-cyan-500/20 to-sky-600/20",
                borderColor: "border-cyan-400/30",
                iconColor: "text-cyan-400"
              },
              {
                icon: CheckCircle,
                title: t('registries.features.firstPass.title', 'First-Pass Rate 99.5%'),
                desc: t('registries.features.firstPass.desc', 'Machine-checkable submissions with pre-validation ensure near-perfect first-time registry acceptance.'),
                gradient: "from-teal-500/20 to-emerald-600/20",
                borderColor: "border-teal-400/30",
                iconColor: "text-teal-400"
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl border ${feature.borderColor} bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-slate-800/80 hover:shadow-xl`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient}`} />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>

                  <h4 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Custom CSS for scrolling animation */}
      <style>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}