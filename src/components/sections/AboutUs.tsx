import {
  Sparkles,
  Globe2,
  ShieldCheck,
  Orbit,
  Users,
  Mail,
  Linkedin,
} from "lucide-react";

export default function AboutUs() {
  const visionPoints = [
    {
      icon: Orbit,
      title: "Designed for a low-carbon world",
      text: "CredoCarbon is built for a future where climate transparency is as critical as financial transparency.",
    },
    {
      icon: ShieldCheck,
      title: "Trust by architecture",
      text: "Every action, every dataset, every verification is structurally traceable and auditable by design.",
    },
    {
      icon: Globe2,
      title: "Global from day one",
      text: "Built for cross-border compliance, multi-registry participation and international climate markets.",
    },
  ];

  const founder = {
    name: "Dr. Haider Abbas",
    picture: "/images/haider.jpeg",
    desg: "Founder & CEO, CredoCarbon",
    linkedIn: "https://www.linkedin.com/in/-haiderabbas/",
    mail: "mailto:haider@solarad.ai",
    credential: "PhD, IIT Delhi | Climate & AI Systems Architect",
    bio: "Haider builds next-generation forecasting and weather-intelligence systems that make solar power more predictable, bankable, and resilient. At Solarad AI, he leads the design of AI-driven irradiance forecasts and data platforms that power decision-making across utilities, traders, and clean-energy operators.",
    vision:
      "His long-term vision is to make climate data as trusted, auditable, and foundational to global markets as financial data is today.",
  };

  const advisors = [
    {
      name: "Dr. Vikram Singh",
      picture: "images/vikram.jpeg",
      desg: "Prof IIT Delhi || Cornell",
      linkedIn:
        "https://www.linkedin.com/in/vikram-singh-53548521/?originalSubdomain=in",
    },
  ];

  return (
    <section className="relative bg-[#05080f] py-28 overflow-hidden">
      {/* MULTI-LAYER FUTURISTIC GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[10%] w-[34rem] h-[34rem] bg-emerald-500/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[32rem] h-[32rem] bg-cyan-400/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.06),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* HERO */}
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-xs tracking-[0.3em] uppercase text-cyan-200">
              About CredoCarbon
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-50 leading-tight mb-7">
            Climate infrastructure,
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              engineered for trust
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
            CredoCarbon is a digital backbone for the next era of carbon markets — where
            transparency, verification integrity and market confidence operate on a
            single shared system of record.
          </p>
        </div>

        {/* MISSION */}
        <div className="mb-28 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80 mb-3">
            Our Mission
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-4">
            To build the world&apos;s most trusted digital infrastructure for carbon markets
          </h3>

          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            Where every credit, every dataset and every verification can be independently
            trusted without blind reliance — forming the backbone for scalable, credible
            global climate action.
          </p>
        </div>

        {/* VISION — FLOATING NODES */}
        <div className="grid gap-12 md:grid-cols-3 mb-36">
          {visionPoints.map((item) => (
            <div
              key={item.title}
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
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOUNDER — CINEMATIC BLOCK */}
        <div className="mb-40">
          <h3 className="text-3xl font-bold text-slate-50 mb-12 text-center">
            Founder & CEO
          </h3>

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
                <a href={founder.linkedIn}>
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition" />
                </a>
              </div>
            </div>

            {/* Founder Content */}
            <div className="relative">
              <p className="text-xs text-slate-400 mb-4">
                {founder.credential}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {founder.bio}
              </p>

              <p className="mt-6 text-sm italic text-violet-300 leading-relaxed">
                “{founder.vision}”
              </p>
            </div>
          </div>
        </div>

        {/* ADVISORS */}
        <div>
          <h3 className="text-3xl font-bold text-slate-50 mb-12 text-center">
            Advisors
          </h3>

          <div className="grid md:grid-cols-1 gap-10 max-w-xl mx-auto">
            {advisors.map((member) => (
              <div
                key={member.name}
                className="relative rounded-[2.5rem] border border-slate-800 bg-[#0b1220]/70 p-8 
                           hover:-translate-y-2 hover:border-cyan-400/40 transition duration-500 text-center"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-br 
                                from-cyan-400/10 via-transparent to-violet-400/10 transition" />

                <div className="relative">
                  <div className="relative inline-block mb-5">
                    <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-cyan-400/30 to-violet-400/30" />
                    <img
                      src={member.picture}
                      alt={member.name}
                      className="relative w-36 h-36 mx-auto rounded-full object-cover border border-cyan-300/40"
                    />
                  </div>

                  <h4 className="text-lg font-semibold text-slate-50">
                    {member.name}
                  </h4>
                  <p className="text-xs text-cyan-300 mt-1">
                    {member.desg}
                  </p>

                  <div className="mt-5 flex justify-center">
                    <a href={member.linkedIn}>
                      <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POSITIONING TAG */}
        <div className="mt-28 text-center">
          <div className="inline-flex items-center gap-3 rounded-full 
                          border border-slate-700 bg-[#070b14]/70 px-7 py-2.5 
                          text-xs tracking-wide text-slate-300">
            <Users className="w-4 h-4 text-cyan-400" />
            Independent climate infrastructure venture
          </div>
        </div>
      </div>
    </section>
  );
}
