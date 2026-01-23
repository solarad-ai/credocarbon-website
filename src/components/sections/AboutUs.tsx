import {
  Sparkles,
  Globe2,
  ShieldCheck,
  Orbit,
  Users,
  Mail,
  Linkedin,
  TrendingUp,
  Globe,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation('about');
  const visionPoints = [
    {
      icon: Orbit,
      titleKey: "vision.point1.title",
      textKey: "vision.point1.text",
    },
    {
      icon: ShieldCheck,
      titleKey: "vision.point2.title",
      textKey: "vision.point2.text",
    },
    {
      icon: Globe2,
      titleKey: "vision.point3.title",
      textKey: "vision.point3.text",
    },
  ];

  const founder = {
    name: "Dr. Haider Abbas",
    picture: "/images/haider.jpeg",
    desg: t('people.founder.desg'),
    linkedIn: "https://www.linkedin.com/in/-haiderabbas/",
    mail: "mailto:haider@solarad.ai",
    portfolio: "https://drhaiderabbas.com",
    credential: t('people.founder.credential'),
    bio: t('people.founder.bio'),
    vision: t('people.founder.vision'),
  };

  const strategyHeads = [
    {
      name: "Ali Abbas",
      picture: "/images/Ali.png",
      desg: t('people.strategyHeads.ali.desg'),
      linkedIn: "https://www.linkedin.com/in/s-ali-abbas-9a5579151/",
      imagePosition: "center 25%",
      quote: t('people.strategyHeads.ali.quote'),
      bio: t('people.strategyHeads.ali.bio'),
    },
    {
      name: "Waqar Naqvi",
      picture: "/images/Waqar.jpeg",
      desg: t('people.strategyHeads.waqar.desg'),
      linkedIn: "https://www.linkedin.com/in/waqar-naqvi-79084415/",
      imagePosition: "top",
      quote: t('people.strategyHeads.waqar.quote'),
      bio: t('people.strategyHeads.waqar.bio'),
    },
  ];

  const advisors = [
    {
      name: "Dr. Asad Abbas",
      picture: "/images/Asad.png",
      desg: t('people.advisors.asad.desg'),
      expertise: t('people.advisors.asad.expertise'),
      linkedIn: "https://www.linkedin.com/in/asad-petrochem/",
      imagePosition: undefined as string | undefined,
    },
    {
      name: "Prof. Vikram Singh",
      picture: "/images/vikram.jpeg",
      desg: t('people.advisors.vikram.desg'),
      expertise: t('people.advisors.vikram.expertise'),
      linkedIn:
        "https://www.linkedin.com/in/vikram-singh-53548521/?originalSubdomain=in",
      imagePosition: undefined as string | undefined,
    },
    {
      name: "Fahreen Zehra Zaidi",
      picture: "/images/fahreen.png",
      desg: t('people.advisors.fahreen.desg'),
      expertise: t('people.advisors.fahreen.expertise'),
      linkedIn: "https://www.linkedin.com/in/farheen-zehra-zaidi-3ba955ba/",
      imagePosition: "center 30%",
      hasWhiteBg: true,
    },
  ];

  const teamMembers = [
    {
      name: "Ritesh Kumar",
      picture: "/images/ritesh.jpeg",
      desg: t('people.teamMembers.ritesh.desg'),
      linkedIn: "https://www.linkedin.com/in/ritz-riteshkumar/",
    },
    {
      name: "Sidhant Rajpoot",
      picture: "/images/Sidhant.jpeg",
      desg: t('people.teamMembers.sidhant.desg'),
      linkedIn: "https://www.linkedin.com/in/sidhantraj007/",
    },
  ];

  return (
    <section className="relative bg-[#05080f] pt-16 pb-28 md:py-28 overflow-hidden">
      {/* MULTI-LAYER FUTURISTIC GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[10%] w-[34rem] h-[34rem] bg-emerald-500/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[32rem] h-[32rem] bg-cyan-400/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.06),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* HERO SECTION - REDESIGNED */}
        <div className="mb-32">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-xs tracking-[0.3em] uppercase text-cyan-200">
                {t('badge')}
              </span>
            </div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* LEFT: Hero Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="text-slate-50">{t('hero.title1')}</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                    {t('hero.title2')}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-6">
                  {t('hero.description')}
                </p>

                {/* Differentiator with visual emphasis */}
                <div className="relative pl-6 border-l-2 border-emerald-400/30 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r-2">
                  <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-transparent rtl:left-auto rtl:right-0" />
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                    {t('hero.differentiator')}{" "}
                    <span className="text-emerald-300 font-bold">{t('hero.differentiatorHighlight')}</span>
                    {" "}{t('hero.differentiatorEnd')}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Why Now + Mission Stack */}
            <div className="lg:col-span-2 space-y-8">

              {/* Why Now - Compact Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-slate-900/50 backdrop-blur-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-emerald-300 font-bold text-sm uppercase tracking-wider mb-2">
                        {t('whyNow.title')}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {t('whyNow.description')}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-transparent transition-all duration-700" />
                </div>
              </div>

              {/* Mission - Elegant Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-violet-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-slate-900/80 to-slate-900/60 backdrop-blur-xl p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      {t('mission.badge')}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3">
                    <span className="text-slate-50">{t('mission.title1')} </span>
                    <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                      {t('mission.title2')}
                    </span>
                    <span className="text-slate-50"> {t('mission.title3')}</span>
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t('mission.subtitle')}
                  </p>

                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-violet-400 to-transparent transition-all duration-700" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* VISION — FLOATING NODES */}
        <div className="grid gap-12 md:grid-cols-3 mb-24">
          {visionPoints.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[2rem] border border-cyan-500/20 bg-[#0b1220]/70 p-8 backdrop-blur-xl 
                         hover:-translate-y-2 hover:border-cyan-400/50 transition duration-500"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 rounded-[2rem] 
                              bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-400/20 blur-xl transition" />

              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 
                                flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {t(item.textKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* MEET THE TEAM SECTION */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div dir="ltr" className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-400/30 bg-violet-400/10 backdrop-blur-sm mb-6">
              <Users className="w-4 h-4 text-violet-300" />
              <span className="text-xs tracking-[0.3em] uppercase text-violet-200">
                {t('team.badge')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
              {t('team.title')} <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">{t('team.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>
        </div>

        {/* FOUNDER — CINEMATIC BLOCK */}
        <div dir="ltr" className="mb-28">
          {/* Decorative Title with Icon and Lines */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-400/50" />
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-violet-400" />
              <h3 className="text-3xl font-bold text-slate-50">
                {t('sections.founderCEO')}
              </h3>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-400/50" />
          </div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center 
                          border border-violet-500/25 bg-[#0b1220]/80 rounded-[3rem] p-14 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-violet-500/10" />

            {/* Founder Image */}
            <div className="relative text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-emerald-400/30 to-violet-400/30" />
                <img
                  src={founder.picture}
                  alt={founder.name}
                  className="relative w-56 h-56 mx-auto rounded-full object-cover border border-cyan-400/40"
                />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-slate-50">
                {founder.name}
              </h4>

              <p className="text-sm text-cyan-300 mt-1">
                {founder.desg}
              </p>

              <div className="mt-5 flex justify-center gap-5">
                <a href={founder.mail}>
                  <Mail className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition" />
                </a>
                <a href={founder.linkedIn} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition" />
                </a>
                <a href={founder.portfolio} target="_blank" rel="noopener noreferrer" title="Portfolio">
                  <Globe className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition" />
                </a>
              </div>
            </div>

            {/* Founder Content */}
            <div className="relative space-y-6">
              <p className="text-xs text-slate-400">
                {founder.credential}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {founder.bio}
              </p>

              {/* Enhanced Vision Quote */}
              <div className="relative mt-8">
                <div className="absolute -left-2 top-0 text-5xl text-violet-400/20 font-serif">"</div>
                <div className="pl-6 pr-4 py-4 border-l-2 border-violet-400/40">
                  <p className="text-base font-medium text-slate-200 leading-relaxed italic">
                    {founder.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEADERSHIP HEADS */}
        <div dir="ltr" className="mb-28">
          {/* Decorative Title with Icon and Lines */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400/50" />
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              <h3 className="text-3xl font-bold text-slate-50">
                {t('sections.leadership')}
              </h3>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400/50" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {strategyHeads.map((head) => (
              <div
                key={head.name}
                className="relative border border-emerald-500/25 bg-[#0b1220]/80 rounded-[2rem] p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />

                <div className="relative flex flex-col items-center text-center space-y-5">
                  {/* Image - White Background */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 rounded-full bg-white" />
                    <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20" />
                    <img
                      src={head.picture}
                      alt={head.name}
                      className="relative w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
                      style={{ objectPosition: head.imagePosition || 'center' }}
                    />
                  </div>

                  {/* Name and Title */}
                  <div>
                    <h4 className="text-xl font-semibold text-slate-50">
                      {head.name}
                    </h4>
                    <p className="text-sm text-emerald-300 mt-1">
                      {head.desg}
                    </p>
                  </div>

                  {/* Vision Quote */}
                  <div className="relative w-full">
                    <div className="absolute -left-2 top-0 text-3xl text-emerald-400/20 font-serif">"</div>
                    <div className="pl-5 pr-3 py-2 border-l-2 border-emerald-400/40">
                      <p className="text-sm font-medium text-slate-200 leading-relaxed italic text-left">
                        {head.quote}
                      </p>
                    </div>
                  </div>

                  {/* Bio Content */}
                  <div className="w-full text-left">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {head.bio}
                    </p>
                  </div>

                  {/* LinkedIn */}
                  <div className="mt-2 flex justify-center gap-5">
                    <a href={head.linkedIn} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 text-slate-400 hover:text-emerald-400 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div className="relative my-16 max-w-4xl mx-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 px-4 bg-[#05080f]">
            <div className="w-6 h-6 rounded-full border border-emerald-400/40 bg-emerald-400/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>

        {/* TEAM MEMBERS (No Title) */}
        <div dir="ltr" className="mb-28">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-[2rem] border border-slate-800 bg-[#0b1220]/70 p-7 
                           hover:-translate-y-2 hover:border-emerald-400/40 transition duration-500 text-center"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-[2rem] bg-gradient-to-br 
                                from-emerald-400/10 via-transparent to-teal-400/10 transition" />

                <div className="relative">
                  <div className="relative inline-block mb-5">
                    <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-emerald-400/30 to-teal-400/30" />
                    {member.picture ? (
                      <img
                        src={member.picture}
                        alt={member.name}
                        className="relative w-32 h-32 mx-auto rounded-full object-cover object-top border border-emerald-300/40"
                      />
                    ) : (
                      <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-emerald-300/40 flex items-center justify-center">
                        <span className="text-3xl font-bold text-emerald-300">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  <h4 className="text-lg font-semibold text-slate-50">
                    {member.name}
                  </h4>
                  <p className="text-xs text-emerald-300 mt-1">
                    {member.desg}
                  </p>

                  <div className="mt-5 flex justify-center">
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 text-slate-400 hover:text-emerald-400 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ADVISORY BOARD */}
        <div dir="ltr" className="mb-28">
          <h3 className="text-3xl font-bold text-slate-50 mb-12 text-center">
            {t('sections.advisoryBoard')}
          </h3>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advisors.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-[2rem] border border-slate-800 bg-[#0b1220]/70 p-7 
                           hover:-translate-y-2 hover:border-cyan-400/40 transition duration-500 text-center"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-[2rem] bg-gradient-to-br 
                                from-cyan-400/10 via-transparent to-violet-400/10 transition" />

                <div className="relative">
                  <div className="relative inline-block mb-5">
                    <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-cyan-400/30 to-violet-400/30" />
                    {member.hasWhiteBg && (
                      <div className="absolute inset-0 rounded-full bg-white" />
                    )}
                    {member.picture ? (
                      <img
                        src={member.picture}
                        alt={member.name}
                        className={`relative w-28 h-28 mx-auto rounded-full object-cover ${member.hasWhiteBg
                          ? 'border-4 border-white shadow-lg'
                          : 'border border-cyan-300/40'
                          }`}
                        style={{ objectPosition: member.imagePosition || 'top' }}
                      />
                    ) : (
                      <div className="relative w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-cyan-300/40 flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-300">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  <h4 className="text-base font-semibold text-slate-50">
                    {member.name}
                  </h4>
                  <p className="text-xs text-cyan-300 mt-1">
                    {member.desg}
                  </p>
                  {member.expertise && (
                    <p className="text-xs text-slate-400 mt-2 italic">
                      {member.expertise}
                    </p>
                  )}

                  <div className="mt-5 flex justify-center">
                    <a
                      href={member.linkedIn}
                      target={member.linkedIn !== '#' ? '_blank' : undefined}
                      rel={member.linkedIn !== '#' ? 'noopener noreferrer' : undefined}
                      className={member.linkedIn === '#' ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POSITIONING TAG */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full 
                          border border-slate-700 bg-[#070b14]/70 px-7 py-2.5 
                          text-xs tracking-wide text-slate-300">
            <Users className="w-4 h-4 text-cyan-400" />
            {t('footer.tagline')}
          </div>
        </div>
      </div>
    </section>
  );
}
