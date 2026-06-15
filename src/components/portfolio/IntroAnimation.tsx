import { useEffect, useState } from "react";

export function IntroAnimation() {
    const [stage, setStage] = useState<"show" | "fade" | "done">("show");

    useEffect(() => {
        const t1 = setTimeout(() => setStage("fade"), 3800);
        const t2 = setTimeout(() => {
            setStage("done");
        }, 4600);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    if (stage === "done") return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden transition-opacity duration-700 ${stage === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            style={{
                background:
                    "radial-gradient(ellipse at center, oklch(0.22 0.04 270) 0%, oklch(0.16 0.02 270) 60%, oklch(0.10 0.02 270) 100%)",
            }}
            aria-hidden="true"
        >
            {/* Glow orbs */}
            <div className="intro-orb intro-orb-1" />
            <div className="intro-orb intro-orb-2" />

            {/* Center content */}
            <div className="relative flex flex-col items-center gap-6 px-6">
                {/* Animated ring */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <div className="absolute inset-0 rounded-full intro-ring" />
                    <div className="absolute inset-2 rounded-full intro-ring-2" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="intro-mono text-4xl sm:text-5xl font-display font-bold bg-gradient-to-br from-[oklch(0.85_0.18_265)] to-[oklch(0.75_0.22_305)] bg-clip-text text-transparent">
                            SS
                        </span>
                    </div>
                </div>

                {/* Name reveal */}
                <div className="overflow-hidden">
                    <h1 className="intro-name font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground text-center">
                        Swadha Shubhangi
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <p className="intro-tagline text-sm sm:text-base text-muted-foreground tracking-[0.3em] uppercase">
                        Portfolio
                    </p>
                </div>

                {/* Loader bar */}
                <div className="mt-4 w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div className="intro-bar h-full bg-gradient-to-r from-[oklch(0.70_0.18_265)] to-[oklch(0.65_0.22_305)]" />
                </div>
            </div>

            <style>{`
        @keyframes intro-ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes intro-ring-spin-rev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes intro-rise {
          0% { transform: translateY(110%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes intro-bar-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes intro-mono-pop {
          0% { transform: scale(0.5); opacity: 0; filter: blur(8px); }
          60% { transform: scale(1.1); opacity: 1; filter: blur(0); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes intro-orb-float {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px,-30px) scale(1.15); }
        }
        .intro-ring {
          border: 2px solid transparent;
          border-top-color: oklch(0.70 0.18 265);
          border-right-color: oklch(0.65 0.22 305);
          animation: intro-ring-spin 2s linear infinite;
          box-shadow: 0 0 40px oklch(0.70 0.18 265 / 0.4);
        }
        .intro-ring-2 {
          border: 1px solid transparent;
          border-bottom-color: oklch(0.65 0.22 305 / 0.6);
          border-left-color: oklch(0.70 0.18 265 / 0.6);
          animation: intro-ring-spin-rev 3s linear infinite;
        }
        .intro-mono {
          display: inline-block;
          animation: intro-mono-pop 1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .intro-name {
          animation: intro-rise 0.9s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .intro-tagline {
          animation: intro-rise 0.9s 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .intro-bar {
          animation: intro-bar-fill 3.2s 0.4s cubic-bezier(0.65, 0, 0.35, 1) both;
        }
        .intro-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.5;
          pointer-events: none;
        }
        .intro-orb-1 {
          width: 380px; height: 380px;
          background: oklch(0.70 0.20 265 / 0.6);
          top: 10%; left: 10%;
          animation: intro-orb-float 5s ease-in-out infinite;
        }
        .intro-orb-2 {
          width: 320px; height: 320px;
          background: oklch(0.65 0.22 305 / 0.5);
          bottom: 10%; right: 10%;
          animation: intro-orb-float 6s ease-in-out infinite reverse;
        }
      `}</style>
        </div>
    );
}
