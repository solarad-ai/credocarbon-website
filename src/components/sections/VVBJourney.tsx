// src/components/sections/VVBJourney.tsx
import { Search, MessageSquare, Shield, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

// Custom SVG Illustration: Intake - Document organizer
const IntakeIllustration = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    {/* Folder/Dossier */}
    <rect x="15" y="15" width="50" height="36" rx="3" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M15 25 L65 25" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />

    {/* Tab */}
    <path d="M25 15 L25 10 L40 10 L42 15" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />

    {/* Document pages inside */}
    <rect x="22" y="30" width="20" height="15" rx="1" fill="#0f172a" stroke="#22d3ee" strokeWidth="0.8" />
    <line x1="25" y1="34" x2="36" y2="34" stroke="#22d3ee" strokeWidth="0.5" />
    <line x1="25" y1="37" x2="38" y2="37" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
    <line x1="25" y1="40" x2="34" y2="40" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />

    {/* Checkmark badge */}
    <circle cx="55" cy="36" r="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
    <path d="M51 36l3 3 5-5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Speed lines */}
    <line x1="5" y1="12" x2="10" y2="12" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <line x1="7" y1="18" x2="12" y2="18" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
  </svg>
);

// Custom SVG Illustration: Review - Comment threads
const ReviewIllustration = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    {/* Main document */}
    <rect x="12" y="10" width="35" height="42" rx="2" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
    <line x1="17" y1="18" x2="40" y2="18" stroke="#475569" strokeWidth="1.5" />
    <line x1="17" y1="24" x2="38" y2="24" stroke="#475569" strokeWidth="1" />
    <line x1="17" y1="29" x2="42" y2="29" stroke="#475569" strokeWidth="1" />
    <line x1="17" y1="34" x2="36" y2="34" stroke="#475569" strokeWidth="1" />

    {/* Comment bubbles */}
    <g transform="translate(42, 15)">
      <rect x="0" y="0" width="30" height="16" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2" fill="#10b981" opacity="0.5" />
      <line x1="13" y1="6" x2="24" y2="6" stroke="#10b981" strokeWidth="0.8" />
      <line x1="13" y1="10" x2="22" y2="10" stroke="#10b981" strokeWidth="0.8" opacity="0.5" />
      {/* Pointer */}
      <path d="M0 8 L-4 6 L-4 10 Z" fill="#10b981" opacity="0.8" />
    </g>

    <g transform="translate(42, 35)">
      <rect x="0" y="0" width="28" height="14" rx="7" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.5" />
      <circle cx="7" cy="7" r="2" fill="#22d3ee" opacity="0.5" />
      <line x1="11" y1="5" x2="22" y2="5" stroke="#22d3ee" strokeWidth="0.8" />
      <line x1="11" y1="9" x2="20" y2="9" stroke="#22d3ee" strokeWidth="0.8" opacity="0.5" />
      <path d="M0 7 L-4 5 L-4 9 Z" fill="#22d3ee" opacity="0.8" />
    </g>
  </svg>
);

// Custom SVG Illustration: Validate - Data validation
const ValidateIllustration = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    {/* Shield */}
    <path d="M40 8 L58 14 L58 30 C58 40 48 48 40 52 C32 48 22 40 22 30 L22 14 L40 8Z"
      fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />

    {/* Checkmark grid */}
    <g stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 26 L35 29 L42 22" />
      <circle cx="37.5" cy="25.5" r="7" fill="none" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
    </g>

    {/* Data bars */}
    <g transform="translate(28, 36)">
      <rect x="0" y="6" width="4" height="8" rx="1" fill="#06b6d4" opacity="0.4" />
      <rect x="6" y="3" width="4" height="11" rx="1" fill="#06b6d4" opacity="0.6" />
      <rect x="12" y="0" width="4" height="14" rx="1" fill="#10b981" opacity="0.8" />
      <rect x="18" y="4" width="4" height="10" rx="1" fill="#06b6d4" opacity="0.5" />
    </g>

    {/* Scan lines */}
    <line x1="22" y1="20" x2="58" y2="20" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
    <line x1="22" y1="32" x2="58" y2="32" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
  </svg>
);

// Custom SVG Illustration: Certify - Digital certificate
const CertifyIllustration = () => (
  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
    {/* Certificate document */}
    <rect x="18" y="10" width="44" height="42" rx="2" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />

    {/* Decorative border */}
    <rect x="22" y="14" width="36" height="34" rx="1" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="2 1" opacity="0.5" />

    {/* Certificate seal */}
    <circle cx="40" cy="28" r="10" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
    <circle cx="40" cy="28" r="6" fill="none" stroke="#10b981" strokeWidth="0.8" opacity="0.5" />
    <path d="M36 28 L39 31 L44 26" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Ribbon trails */}
    <path d="M34 38 L32 48 L36 44 L40 48 L44 44 L48 48 L46 38" fill="#10b981" opacity="0.3" stroke="#10b981" strokeWidth="0.8" />

    {/* Digital signature line */}
    <line x1="22" y1="42" x2="44" y2="42" stroke="#22d3ee" strokeWidth="1" />

    {/* Lock icon */}
    <g transform="translate(65, 15)">
      <rect x="-3" y="0" width="6" height="5" rx="1" fill="#1e293b" stroke="#fbbf24" strokeWidth="1" />
      <path d="M-2 0 L-2 -2 C-2 -3.5 -0.5 -4 0 -4 C0.5 -4 2 -3.5 2 -2 L2 0" fill="none" stroke="#fbbf24" strokeWidth="1" />
    </g>
  </svg>
);

export default function VVBJourney() {
  const { t } = useTranslation('vvb');

  const verificationSteps = [
    {
      phase: t('vvbJourney.steps.intake.phase'),
      title: t('vvbJourney.steps.intake.title'),
      desc: t('vvbJourney.steps.intake.desc'),
      icon: Search,
      metrics: t('vvbJourney.steps.intake.metrics'),
      Illustration: IntakeIllustration,
    },
    {
      phase: t('vvbJourney.steps.review.phase'),
      title: t('vvbJourney.steps.review.title'),
      desc: t('vvbJourney.steps.review.desc'),
      icon: MessageSquare,
      metrics: t('vvbJourney.steps.review.metrics'),
      Illustration: ReviewIllustration,
    },
    {
      phase: t('vvbJourney.steps.validate.phase'),
      title: t('vvbJourney.steps.validate.title'),
      desc: t('vvbJourney.steps.validate.desc'),
      icon: Shield,
      metrics: t('vvbJourney.steps.validate.metrics'),
      Illustration: ValidateIllustration,
    },
    {
      phase: t('vvbJourney.steps.certify.phase'),
      title: t('vvbJourney.steps.certify.title'),
      desc: t('vvbJourney.steps.certify.desc'),
      icon: TrendingUp,
      metrics: t('vvbJourney.steps.certify.metrics'),
      Illustration: CertifyIllustration,
    }
  ];
  return (
    <section
      id="vvb"
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-16 pb-20 md:py-24 border-t border-cyan-500/10 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
              {t('vvbJourney.badge')}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            {t('vvbJourney.title1')}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> {t('vvbJourney.title2')}</span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t('vvbJourney.description')}
          </p>
        </div>

        {/* Workflow Steps - Vertical Timeline Layout */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gradient-to-b from-cyan-400/50 via-emerald-400/50 to-cyan-400/50 hidden md:block" />

          <div className="space-y-12">
            {verificationSteps.map((step, index) => {
              const { Illustration } = step;
              return (
                <div
                  key={step.title}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full border-4 border-slate-950 z-10 hidden md:block shadow-lg shadow-cyan-400/50" />

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]">
                      {/* Illustration area */}
                      <div className="h-32 bg-gradient-to-b from-slate-800/50 to-transparent flex items-center justify-center p-6">
                        <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out">
                          <Illustration />
                        </div>
                      </div>

                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 pointer-events-none" />

                      <div className="relative p-6 pt-3">
                        {/* Phase badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 px-3 py-1.5 mb-4">
                          <step.icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-medium text-cyan-300">{step.phase}</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-50 transition-colors">
                          {step.title}
                        </h3>

                        <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {step.desc}
                        </p>

                        {/* Metrics badge */}
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                          <span className="text-sm font-medium text-emerald-300">
                            {step.metrics}
                          </span>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-700" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* VVB Partners Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-3">
              {t('vvbJourney.partners.title')}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {t('vvbJourney.partners.highlight')}
              </span>
            </h3>
            <p className="text-slate-400">
              {t('vvbJourney.partners.subtitle')}
            </p>
          </div>

          {/* VVB Partners Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">

            {/* TÜV SÜD */}
            <div className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/TUV_sud.png"
                alt="TÜV SÜD"
                className="relative h-24 w-auto filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>

            {/* DNV */}
            <div className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/Dnv.png"
                alt="DNV"
                className="relative h-24 w-auto filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>

            {/* Ecolance */}
            <div className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/Ecolance.png"
                alt="Ecolance"
                className="relative h-14 w-auto filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>

            {/* Earthood */}
            <div className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/Earthood.png"
                alt="Earthood"
                className="relative h-14 w-auto filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>

          </div>




        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <span className="text-sm text-slate-500">{t('vvbJourney.tagline')}</span>
        </div>
      </div>
    </section>
  );
}
