// src/components/sections/AnalyticsReporting.tsx

const blocks = [
  {
    title: "Monitoring & operational analytics",
    desc: "Live dashboards for developers, asset owners and MRV teams to interpret monitoring data, anomalies and performance metrics across assets and periods.",
    items: [
      "Interactive charts for generation, anomalies, outages and curtailment.",
      "Detect equipment underperformance, drift, or unexpected efficiency losses.",
      "Compare forecast vs actual generation with methodology-specific logic.",
      "Insights into missing hours, invalid data, SCADA gaps and sensor issues.",
      "Monitoring period roll-ups with methodology-compliant summaries.",
    ],
  },
  {
    title: "Verification cycle insights",
    desc: "Analytics that help VVBs and developers understand workload, bottlenecks and recurring issues across verification cycles.",
    items: [
      "Breakdown of comment types: Critical, Required, Advisory, Informational.",
      "Turnaround times for clarifications and reviewer workloads.",
      "Historical cycle comparison for previous submission rounds.",
      "Identify bottlenecks in baseline, monitoring or evidence completeness.",
      "Reviewer productivity metrics for accreditation and QA teams.",
    ],
  },
  {
    title: "Issuance forecasting & trajectory",
    desc: "Predictive models estimate issuance timelines and potential quantities based on monitoring performance and project history.",
    items: [
      "Vintage-by-vintage projections with conservative and optimistic scenarios.",
      "Impact analysis of missing data or unresolved queries on issuance speed.",
      "Forecast issuance ranges based on methodology factors and past cycles.",
      "Visual trajectory of expected vs historical issuance performance.",
      "Alerts when monitoring or verification delays may affect issuance windows.",
    ],
  },
  {
    title: "Portfolio & risk intelligence",
    desc: "Buyers and funds gain portfolio-level insights to assess risk, diversification and long-term procurement strategies.",
    items: [
      "Quality scoring for each credit batch based on transparent risk parameters.",
      "Geographic, technological and methodological diversification analytics.",
      "Vintage distribution, issuance timelines and liquidity indicators.",
      "SDG alignment, safeguards score and co-benefit exposure.",
      "Market signals for pricing, demand clusters and risk profiles.",
    ],
  },
  {
    title: "Registry-grade reporting",
    desc: "Automatically prepared reports for registries, auditors and sustainability teams — fully aligned to required templates.",
    items: [
      "Monitoring reports with methodology-mapped sections and annex references.",
      "Verification summaries, comment logs and evidence completeness reports.",
      "Issuance request packets prepared with serials, vintages and metadata.",
      "Portfolio sustainability statements for corporate reporting cycles.",
      "Export formats: PDF, XLSX, registry XML and machine-readable JSON.",
    ],
  },
  {
    title: "Enterprise insights for decision-makers",
    desc: "Executives and sustainability leads get actionable intelligence for planning, procurement and compliance.",
    items: [
      "High-level dashboards for credit pipeline, upcoming monitoring periods and predicted issuance.",
      "Compliance dashboards for corporate ESG and net-zero progress.",
      "Cross-project benchmarking for efficiency, risk and verification quality.",
      "Early-warning indicators for project underperformance or data issues.",
      "Automated summaries for board presentations and sustainability disclosures.",
    ],
  },
];

export default function AnalyticsReporting() {
  return (
    <section
      id="analytics"
      className="bg-slate-950 py-20 md:py-24 border-t border-emerald-500/10"
    >
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400/80">
            Analytics & reporting
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-50">
            Intelligence for monitoring, verification and procurement
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-3xl mx-auto">
            CredoCarbon provides analytics across monitoring performance, verification cycles, 
            issuance forecasting and portfolio risk — empowering developers, VVBs, buyers and 
            sustainability teams with actionable insights.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-900/80 p-6 shadow-lg shadow-emerald-500/10"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%)]" />

              <div className="relative">
                <h3 className="text-sm font-semibold text-emerald-100">{block.title}</h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">{block.desc}</p>

                <ul className="mt-3 space-y-1.5 text-xs md:text-[13px] text-slate-300">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
