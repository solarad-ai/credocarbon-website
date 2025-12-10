// src/components/sections/SecurityAudit.tsx

import {
  ShieldCheck,
  Lock,
  Fingerprint,
  KeyRound,
  FileCheck2,
  ServerCog,
} from "lucide-react";

const blocks = [
  {
    title: "Immutable evidence integrity",
    desc: "All documents, datasets and annexes in CredoCarbon are cryptographically anchored to ensure tamper-proof evidence management.",
    items: [
      "SHA-256 hashing for every uploaded file, dataset and annex.",
      "Immutable evidence ledger mapping each file to its version chain.",
      "Hash mismatches flagged instantly for integrity violations.",
      "Submission snapshots include hash manifests for registry audits.",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Secure roles & permission layers",
    desc: "Access to projects, data and evidence is controlled with fine-grained role-based permissions designed for Developer, VVB and Registry workflows.",
    items: [
      "Granular permissions for view, comment, upload, freeze, approve.",
      "Isolated review environments for VVBs with read-only evidence states.",
      "Registry reviewers get structured submissions, not full project access.",
    ],
    icon: Lock,
  },
  {
    title: "Chain-of-custody & provenance trails",
    desc: "Every action — from upload to verification to retirement — is captured in an unbroken provenance graph.",
    items: [
      "Track who uploaded, modified or approved each file.",
      "Trace dataset origins from raw → validated → processed → reported.",
      "Structured linkage of evidence, calculations and submissions.",
    ],
    icon: Fingerprint,
  },
  {
    title: "Cryptographic signatures & state freezing",
    desc: "Verification opinions and submissions are frozen with digital signatures to guarantee downstream trust.",
    items: [
      "VVB sign-off anchored with cryptographic identifiers.",
      "State freeze locks all associated evidence and datasets.",
      "Frozen states cannot be altered without creating a new verified version.",
    ],
    icon: KeyRound,
  },
  {
    title: "Compliance-grade audit logs",
    desc: "Designed to meet audit expectations from registries, accreditation bodies and corporate sustainability teams.",
    items: [
      "Complete log of actions with timestamps, users and impact scope.",
      "Filters to view activities by entity, project or workflow phase.",
      "Export logs in audit-compliant formats (JSON, CSV, registry XML).",
    ],
    icon: FileCheck2,
  },
  {
    title: "Data isolation & security fundamentals",
    desc: "Underlying infrastructure follows enterprise security architecture for real-world carbon projects and multi-stakeholder usage.",
    items: [
      "Encrypted storage at rest and in transit across all modules.",
      "Isolated environments for developer, VVB and registry interactions.",
      "Secure object-store for large annexes and asset-heavy projects.",
    ],
    icon: ServerCog,
  },
] as const;

export default function SecurityAudit() {
  const [primary, second, third, ...rest] = blocks;

  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[#020617] py-24 md:py-28 border-t border-indigo-500/10"
    >
      {/* ✅ Purple–Indigo Cryptographic Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.9),transparent_65%)]" />
        <div className="absolute left-0 top-24 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-16 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2 mb-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-indigo-300">
              Security & Trust Fabric
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 leading-tight">
            Cryptographic integrity for
            <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              every dataset, annex and signature
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-300/90 leading-relaxed">
            A security layer that tracks how evidence moves, who touches it, and how
            it is frozen for registries and buyers — with full cryptographic trust.
          </p>
        </div>

        {/* ✅ REBALANCED MIXED LAYOUT */}
        <div className="space-y-16">
          {/* Top Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            <HeroCard block={primary} />
            <div className="grid gap-8">
              <StandardCard block={second} />
              <StandardCard block={third} />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {rest.map((block) => (
              <StandardCard key={block.title} block={block} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Block = (typeof blocks)[number];

function HeroCard({ block }: { block: Block }) {
  const Icon = block.icon;

  return (
    <div className="group relative rounded-[2.5rem] border border-indigo-500/30 bg-slate-900/70 backdrop-blur-xl p-8 min-h-[300px] transition-all hover:border-indigo-400/70 hover:shadow-[0_0_70px_rgba(99,102,241,0.45)]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 transition" />

      <div className="relative flex flex-col gap-5">
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500/40 to-purple-500/40 flex items-center justify-center border border-indigo-400/40">
          <Icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-white">{block.title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed">{block.desc}</p>

        <ul className="space-y-2 mt-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-2 text-xs text-slate-300">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StandardCard({ block }: { block: Block }) {
  const Icon = block.icon;

  return (
    <div className="group relative rounded-[2.2rem] border border-slate-800 bg-slate-900/60 backdrop-blur-lg p-6 min-h-[240px] hover:border-indigo-400/50 hover:shadow-[0_0_50px_rgba(99,102,241,0.35)] transition-all">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/15 via-purple-500/15 to-cyan-500/15 transition" />

      <div className="relative flex flex-col gap-4">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500/40 to-purple-500/40 flex items-center justify-center border border-indigo-400/30">
          <Icon className="h-5 w-5 text-white" />
        </div>

        <h3 className="text-sm font-semibold text-white">{block.title}</h3>
        <p className="text-xs text-slate-300 leading-relaxed">{block.desc}</p>

        <ul className="space-y-1.5 mt-1">
          {block.items.map((item) => (
            <li key={item} className="flex gap-2 text-[11px] text-slate-300">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
