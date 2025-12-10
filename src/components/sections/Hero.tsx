import { Leaf, Shield, BarChart3 } from "lucide-react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="overview"
      className="
        relative overflow-hidden
        bg-[linear-gradient(35deg,#022c22_0%,#059669_40%,#6ee7b7_100%)]
        pt-20 pb-32 md:pt-28 md:pb-40
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 md:flex-row md:items-center md:gap-16">
        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-700/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-50 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Unified carbon credit infrastructure
          </div>

          <TextGenerateEffect words={"CredoCarbon: One Stack for Developers, VVBs & Buyers"} />

          <p className="max-w-xl text-sm md:text-base lg:text-lg leading-relaxed text-emerald-50/90 mb-6 mt-4">
            A dedicated layer to digitise project MRV, registry workflows and OTC trading — so every actor in the
            carbon stack works off the same transparent system of record.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button className="bg-slate-800/95 text-[12px] md:text-[13px] font-extrabold px-5 py-2.5 text-emerald-200 hover:bg-emerald-200/50">
              Talk to us
            </Button>

            <Button
              variant="outline"
              className="
                bg-white/10 text-[12px] md:text-[13px] font-extrabold px-5 py-2.5
                text-emerald-50 hover:bg-slate-800 border-emerald-200/50
              "
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              View end-to-end lifecycle
            </Button>
          </div>

          <p className="mt-4 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-emerald-100/80">
            Developers · VVBs · Buyers · Registries
          </p>
        </div>

        <div className="flex-1">
          <div className="mx-auto flex h-[360px] md:h-[420px] max-w-md items-center justify-center rounded-3xl border border-emerald-100/30 bg-white/10 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.55)] backdrop-blur">
            <div className="w-full rounded-2xl border border-emerald-100/40 bg-slate-950/70 p-6 shadow-inner">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700">
                    <Leaf className="h-5 w-5 text-slate-950" />
                    <Shield className="absolute -right-1 -top-1 h-5 w-5 text-emerald-100 drop-shadow" />
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="font-semibold text-emerald-100">
                      Multi-registry portfolio · 300+ MW
                    </span>
                    <span className="text-[11px] text-emerald-200/80">
                      Developer · VVB · Buyer connected
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-semibold text-emerald-100">
                  Pilot ready
                </span>
              </div>

              <div className="space-y-3 text-xs text-emerald-50/90">
                <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                  <span>Verified credits (annualised)</span>
                  <span className="font-semibold text-emerald-300">250,000 tCO₂e</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                  <span>Issuance cycle time</span>
                  <span className="font-semibold text-emerald-300">↓ 60% vs legacy</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                  <span>End-to-end traceability</span>
                  <span className="font-semibold text-emerald-300">Developer → Registry → Buyer</span>
                </div>
              </div>

              <p className="mt-4 text-[10px] md:text-[11px] text-emerald-100/70">
                Visual is illustrative. CredoCarbon adapts to your methodology, registry and project mix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}