// src/components/sections/WorkflowEngine.tsx

const blocks = [
  {
    title: "State-driven workflow engine",
    desc: "Every project, document, dataset and submission moves through clear, enforceable states with rules and transitions defined by methodology and registry requirements.",
    items: [
      "Global workflow states: Draft, Under Review, Clarifications, Ready for Submission, Submitted, Verified, Issued.",
      "State diagrams aligned to registry processes for monitoring and verification.",
      "Automatic locking of documents and datasets when a state freeze is active.",
      "Rules prevent invalid transitions and ensure procedural compliance.",
      "Administrators can define custom states for enterprise workflows.",
    ],
  },
  {
    title: "Task assignment & ownership",
    desc: "Tasks are routed to the right stakeholders — developers, data engineers, VVB reviewers or registry reviewers — ensuring clean accountability.",
    items: [
      "Assign tasks with due dates, dependencies and responsible owners.",
      "Reviewer queues grouped by severity, submission type or project phase.",
      "Task bundles for complex submissions with multi-step dependencies.",
      "Inline task updates reflect directly in project state flow.",
      "Reassign or escalate tasks based on delays or workload.",
    ],
  },
  {
    title: "SLA tracking & automated alerts",
    desc: "Every action has a timer that maintains pace, transparency and fairness across verification cycles.",
    items: [
      "Visual countdown timers for VVB response deadlines and developer clarifications.",
      "Notifications when SLA thresholds approach (80%, 95%, breach).",
      "Automatic reminders delivered to email, dashboard and audit feed.",
      "Escalation pathways to supervisors or registry liaisons.",
      "SLA analytics for portfolio-level performance benchmarking.",
    ],
  },
  {
    title: "Clarification loops & resolution cycles",
    desc: "The platform manages structured back-and-forth cycles between developers and VVBs, ensuring smooth resolution of queries.",
    items: [
      "Raise clarifications on documents, data points, annex sections or parameters.",
      "Developers respond with versioned updates or explanatory notes.",
      "Status auto-updates: Pending → Responded → Under Review → Resolved.",
      "Freeze clarifications at submission snapshot for audit integrity.",
      "Track unresolved queries across project lifecycle.",
    ],
  },
  {
    title: "Process automation & consistency checks",
    desc: "Built-in automation removes repetitive tasks and ensures workflow consistency, reducing errors and cycle times.",
    items: [
      "Auto-run completeness checks before allowing submission state.",
      "Detect conflicting parameters or mismatched monitoring periods.",
      "Validate evidence categories, naming conventions and annex structures.",
      "Auto-generate registry-ready bundles when state reaches ‘Ready for Submission’.",
      "Highlight workflow bottlenecks with system-level warnings.",
    ],
  },
  {
    title: "Activity logs & audit trails",
    desc: "Every workflow action generates a structured audit record — critical for VVBs, registries and corporate traceability.",
    items: [
      "User, timestamp, action type and previous state recorded automatically.",
      "Trace changes across datasets, documentation and submission packets.",
      "Exportable logs for internal QA, accreditation or compliance teams.",
      "Tamper-proof logs anchored with cryptographic identifiers.",
      "Filters to inspect actions by entity, individual or workflow phase.",
    ],
  },
];

export default function WorkflowEngine() {
  return (
    <section
      id="workflow"
      className="bg-slate-950 py-20 md:py-24 border-t border-emerald-500/10"
    >
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Section Header */}
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400/80">
            Workflow & SLA engine
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-50">
            State-driven workflows, automation and SLA governance
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-3xl mx-auto">
            A robust workflow engine ensures discipline, compliance and auditability across 
            Developer → VVB → Registry cycles. Every action, state and deadline is structured 
            and documented.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-slate-900/80 p-6 shadow-lg shadow-emerald-500/10"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%)]" />

              {/* Content */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-emerald-100">
                  {block.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-300">
                  {block.desc}
                </p>

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
