import { Button } from "../ui/Button";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.3),_transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
          Ready to pilot CredoCarbon with a live project?
        </h2>
        <p className="mt-4 text-sm md:text-base text-slate-400">
          Start with one asset or portfolio. We help you configure MRV, registry workflows and OTC rails
          end-to-end.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            className="bg-emerald-400 text-[13px] font-extrabold text-slate-950 hover:bg-emerald-300"
            onClick={() =>
              window.open(
                "https://calendly.com/haider-solarad/solarad-demo",
                "_blank"
              )
            }
          >
            Book a 30-min discovery call
          </Button>
          <Button variant="outline" className="text-[13px] font-semibold">
            Explore product walkthrough
          </Button>
        </div>
      </div>
    </section>
  );
}