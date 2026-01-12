import { Leaf, Shield, BarChart3 } from "lucide-react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { Button } from "../ui/Button";
import CarbonTradingBanner from "../ui/CarbonTradingBanner";
import { useEffect, useRef, useState } from "react";

interface RegistryTotals {
  carbon: { issued: number; retired: number };
  rec: { issued: number; retired: number };
  totalRegistries: number;
  totalCountries: number;
}

interface RegistryData {
  totals: RegistryTotals;
}

// Format large numbers with K, M, B suffixes
const formatNumber = (num: number, decimals: number = 1): string => {
  if (num >= 1e9) return (num / 1e9).toFixed(decimals) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(decimals) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(decimals) + 'K';
  return num.toFixed(decimals);
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [totals, setTotals] = useState<RegistryTotals | null>(null);

  // Fetch registry data for totals
  useEffect(() => {
    fetch('/Data/registryData.json')
      .then(res => res.json())
      .then((data: RegistryData) => {
        setTotals(data.totals);
      })
      .catch(err => {
        console.error('Failed to load registry data:', err);
      });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set slow, cinematic playback rate
    video.playbackRate = 0.6;

    // Seamless loop: reset video just before it ends to avoid the gap
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime > video.duration - 0.3) {
        video.currentTime = 0;
        video.play().catch(() => { }); // Ignore autoplay errors
      }
    };

    // Fallback: if video does end (edge case), restart immediately
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => { });
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);


  return (
    <section
      id="overview"
      className="
        relative overflow-hidden
        bg-slate-950 
        min-h-[90vh]
        pt-20 pb-36 md:pt-32 md:pb-44
      "
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videoes/Hero.webm" type="video/webm" />
      </video>

      {/* Dark overlay (reduced opacity) */}
      <div className="absolute inset-0 bg-slate-950/35" />

      {/* Gradient overlay (softened) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(35deg,rgba(2,44,34,0.55)_0%,rgba(5,150,105,0.28)_40%,rgba(110,231,183,0.12)_100%)]" />

      {/* Carbon Trading Banner */}
      <div className="absolute top-4 md:top-6 left-0 right-0 z-10">
        <CarbonTradingBanner />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 md:gap-14 px-4 md:px-6 md:flex-row md:items-center md:gap-16 md:translate-y-8">
        <div className="flex-1">
          <div className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-700/20 px-2.5 md:px-3 py-1 md:py-1.5 text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.12em] md:tracking-[0.18em] text-emerald-50 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Carbon Infrastructure Platform
          </div>

          <TextGenerateEffect words={"CredoCarbon: One Stack for Developers, VVBs & Buyers"} />

          <p className="max-w-xl text-xs md:text-sm lg:text-lg leading-relaxed text-emerald-50/90 mb-4 md:mb-6 mt-3 md:mt-4">
            A dedicated platform that digitizes project MRV, registry workflows, and OTC trading —
            connecting developers, VVBs, and buyers.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Button
              onClick={() => window.open('https://calendly.com/credocarbon-info/credocarbon-connect?month=2026-01', '_blank')}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-[11px] md:text-[13px] font-extrabold px-4 md:px-6 py-2.5 md:py-3 text-white hover:from-emerald-400 hover:to-emerald-500 shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 transition-all duration-300"
            >
              Talk to us
            </Button>
          </div>

          <p className="mt-3 md:mt-4 text-[9px] md:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.22em] text-emerald-100/80">
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
                      {totals ? `${totals.totalRegistries} Registries · ${totals.totalCountries} Countries` : 'Multi-registry portfolio · 300+ MW'}
                    </span>
                    <span className="text-[11px] text-emerald-200/80">
                      Developer · VVB · Buyer connected
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-semibold text-emerald-100">
                  Live data
                </span>
              </div>

              <div className="space-y-3 text-xs text-emerald-50/90">
                <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                  <span>Verified credits (annual)</span>
                  <span className="font-semibold text-emerald-300">
                    {totals ? `${formatNumber(totals.carbon.issued)} tCO₂e` : 'Loading...'}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                  <span>Carbon credits retired</span>
                  <span className="font-semibold text-emerald-300">
                    {totals ? `${formatNumber(totals.carbon.retired)} tCO₂e` : 'Loading...'}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
                  <span>RECs issued (annual)</span>
                  <span className="font-semibold text-emerald-300">
                    {totals ? `${formatNumber(totals.rec.issued)} MWh` : 'Loading...'}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-[10px] md:text-[11px] text-emerald-100/70">
                Live data from integrated registries. Last 12 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}