"use client";

import { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
};

export default function MonitorAnalyze({ isOpen, onOpen }: Props) {
  const description =
    "Here, AI continuously tracks performance, analyzes engagement quality, and surfaces high-intent opportunities in real time.";

  const [typedText, setTypedText] = useState("");
  const [animate, setAnimate] = useState(false);

  /* ---------------- Typing + animation lifecycle ---------------- */
  useEffect(() => {
    if (!isOpen) return;

    let typingInterval: NodeJS.Timeout;
    let loopInterval: NodeJS.Timeout;

    const startSequence = () => {
      setTypedText("");
      setAnimate(false);

      let index = 0;

      typingInterval = setInterval(() => {
        setTypedText(description.slice(0, index));
        index++;
        if (index > description.length) clearInterval(typingInterval);
      }, 24);

      setTimeout(() => setAnimate(true), 600);
    };

    startSequence();
    loopInterval = setInterval(startSequence, 5000);

    return () => {
      clearInterval(loopInterval);
      clearInterval(typingInterval);
    };
  }, [isOpen, description]);

  return (
    <section
      className={`w-full  flex flex-col items-center gap-6 px-4 ${
        isOpen ? " pb-8" : ""
      }`}
    >
      {/* COLLAPSED PILL */}
      <div
        onClick={onOpen}
        className={`
          w-full max-w-3xl
          bg-white rounded-[28px]
          px-5 py-3
          flex items-center justify-between
          shadow-[0_6px_20px_rgba(0,0,0,0.08)]
          cursor-pointer
          transition-all duration-300
          ${
            isOpen
              ? "opacity-0 h-0 overflow-hidden pointer-events-none"
              : "opacity-100 "
          }
        `}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#EFE8E1] rounded-full flex items-center justify-center">
            <BarChart3 size={16} />
          </div>
          <div className="bg-[#EFE8E1] px-4 py-2 rounded-2xl shadow-sm">
            <span className="text-sm font-medium">Monitor & Analyze</span>
          </div>
        </div>

        <span className="bg-[#5F8F7A] text-white px-4 py-1.5 rounded-full text-xs font-medium">
          Live
        </span>
      </div>

      {/* MAIN CARD */}
      <div
        className={`
          w-full max-w-4xl rounded-[28px]  bg-[#FAF8F5]
          transition-all duration-500 ease-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none h-0 overflow-hidden"
          }
        `}
      >
        <div className="p-6 md:p-8 shadow-md rounded-[28px]">
          {/* Header */}
          <div
            className="flex items-center gap-3 mb-6 cursor-pointer"
            onClick={onOpen}
          >
            <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
              <BarChart3 size={14} className="text-white" />
            </div>
            <div className="bg-black text-white px-5 py-2 rounded-full">
              <span className="text-sm font-medium">Monitor & Analyze</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <MetricCard
              title="Total Calls"
              value={2940}
              description="Establishing baseline performance"
              bg="#B8CBC2"
              animate={animate}
            />
            <MetricCard
              title="Connection Rate"
              value={68}
              suffix="%"
              description="Stable performance"
              bg="#F4D9A8"
              animate={animate}
            />
            <MetricCard
              title="Avg Call Duration"
              value={272}
              format={(v) => `4m ${v}s`}
              description="Optimal engagement window"
              bg="#B9D9EA"
              animate={animate}
            />
            <MetricCard
              title="Conversion Rate"
              value={12.5}
              suffix="%"
              description="High-intent responses detected"
              bg="#E2D9F3"
              animate={animate}
            />
          </div>
        </div>
      </div>

      {/* Typed explanation */}
      <div
        className={`
          w-full max-w-3xl text-center
          transition-all  duration-500
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 h-0 overflow-hidden"
          }
        `}
      >
        <p className="text-sm text-[#3A4F58] min-h-[48px]">
          {typedText}
          <span className="animate-pulse">▍</span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- Metric Card ---------------- */

function MetricCard({
  title,
  value,
  description,
  bg,
  animate,
  suffix = "",
  format,
}: {
  title: string;
  value: number;
  description: string;
  bg: string;
  animate: boolean;
  suffix?: string;
  format?: (v: number) => string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 2000;
    const fps = 30;
    const interval = 1000 / fps;
    const step = value / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, interval);

    return () => clearInterval(timer);
  }, [animate, value]);

  return (
    <div
      className="rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4"
      style={{ backgroundColor: bg }}
    >
      <div>
        <p className="text-sm font-medium mb-1">{title}</p>
        <p className="text-xs text-black/60">{description}</p>
      </div>
      <span className="text-xl sm:text-2xl font-semibold">
        {format ? format(Math.round(count)) : `${Math.round(count)}${suffix}`}
      </span>
    </div>
  );
}
