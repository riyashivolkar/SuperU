"use client";

import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
type Props = {
  isOpen: boolean;
  onOpen: () => void;
};
export default function ConfigureCampaign({ isOpen, onOpen }: Props) {
  const description =
    "Here, AI configures your campaign audience, optimizes your budget, and continuously improves response rates in real time.";

  const [typedText, setTypedText] = useState("");
  const [animateStats, setAnimateStats] = useState(false);
  //const [isOpen, setIsOpen] = useState(true); // 👈 main card open by default

  useEffect(() => {
    if (!isOpen) return;

    let typingInterval: NodeJS.Timeout;
    let loopInterval: NodeJS.Timeout;

    const startSequence = () => {
      setTypedText("");
      setAnimateStats(false);

      let index = 0;

      typingInterval = setInterval(() => {
        setTypedText(description.slice(0, index));
        index++;
        if (index > description.length) clearInterval(typingInterval);
      }, 25);

      setTimeout(() => setAnimateStats(true), 800);
    };

    startSequence();
    loopInterval = setInterval(startSequence, 5000);

    return () => {
      clearInterval(loopInterval);
      clearInterval(typingInterval);
    };
  }, [isOpen]);

  return (
    <section className="w-full flex flex-col pt-2   items-center gap-6 px-4">
      {/* TOP PILL — only when CLOSED */}
      <div
        className={`w-full max-w-3xl   overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? "max-h-0 opacity-0 pointer-events-none" : "max-h-[120px] opacity-100"}
        `}
      >
        <button
          onClick={onOpen}
          className="w-full rounded-[28px] px-4 py-3 shadow-md
          bg-gradient-to-r from-[#BEE3F2] via-[#9ED4EA] to-[#8EC5DC]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Rocket size={16} />
              </div>
              <div className="bg-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl shadow-sm">
                <span className="text-xs sm:text-sm font-medium">
                  Configure Campaign
                </span>
              </div>
            </div>

            <div className="hidden sm:block px-6 py-2 rounded-full bg-white/40 backdrop-blur border border-white text-sm font-medium shadow-sm">
              Fintech Outreach Campaign
            </div>
          </div>
        </button>
      </div>

      {/* MAIN CARD — only when OPEN */}
      <div
        className={`
    w-[85%] max-w-4xl transition-all duration-300 ease-out 
    ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
  `}
      >
        <div className="rounded-[22px] p-8 bg-gradient-to-br from-[#CFE8F0] to-[#6cb0c8] shadow-md relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1 rounded-full">
              <Rocket size={12} />
              <span className="text-xs font-medium">Configure Campaign</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Audience */}
            <div className="bg-white/40 backdrop-blur-md rounded-xl p-4 border border-white/40">
              <p className="text-[11px] text-black/60 mb-1">Audience</p>
              <h3
                className={`text-sm font-medium transition-all duration-700 ${
                  animateStats
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                Fintech Decision Makers (5,000 leads)
              </h3>
            </div>

            {/* Budget */}
            <div className="bg-white/40 backdrop-blur-md rounded-xl p-4 border border-white/40">
              <p className="text-[11px] text-black/60 mb-1">Budget</p>

              <h3
                className={`text-sm font-medium mb-2 transition-all duration-700 delay-150 ${
                  animateStats
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                $15,000 allocated
              </h3>

              <div className="h-1 bg-white/70 rounded-full mb-3 overflow-hidden">
                <div
                  className={`h-full bg-black rounded-full transition-all duration-1000 ${
                    animateStats ? "w-[70%]" : "w-0"
                  }`}
                />
              </div>

              <p className="text-[11px] text-black/60 mb-1">
                Target Response Rate
              </p>

              <h4
                className={`text-xs font-medium mb-1 transition-all duration-700 delay-300 ${
                  animateStats
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                15–20%
              </h4>

              <div className="h-1 bg-white/70 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-black rounded-full transition-all duration-1000 delay-200 ${
                    animateStats ? "w-[45%]" : "w-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Bottom controls */}
          <div className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-0 mt-4">
            <div className="flex gap-2 items-center">
              <span className="text-[11px] text-black/60">Audience</span>
              {["Phone", "SMS", "Email"].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-0.5 bg-black text-white rounded-full text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-[11px] text-black/60">Duration</span>
              <span className="px-2.5 py-0.5 bg-white rounded-full text-[11px]">
                30 Days
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Typed explanation */}
      {isOpen && (
        <div className="w-[85%] max-w-3xl text-center transition-opacity duration-300">
          <p className="text-sm text-[#3A4F58] min-h-[48px]">
            {typedText}
            <span className="animate-pulse">▍</span>
          </p>
        </div>
      )}
    </section>
  );
}
