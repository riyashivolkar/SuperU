"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Sparkles, Bot } from "lucide-react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
};

export default function ChatAndCreate({ isOpen, onOpen }: Props) {
  const aiResponse =
    "Creating a multi-channel campaign targeting fintech decision makers. Configured with phone, SMS, and email outreach. Campaign ready to launch in 2 minutes.";

  const bottomDescription =
    "Here, AI translates your intent into a ready-to-launch outreach campaign across multiple channels.";

  const statusText = "AI is preparing your campaign";

  const [typedResponse, setTypedResponse] = useState("");
  const [typedBottom, setTypedBottom] = useState("");
  const [dots, setDots] = useState("");

  /* -------- AI typing -------- */
  useEffect(() => {
    if (!open) return;

    let typingInterval: NodeJS.Timeout;
    let index = 0;

    setTypedResponse("");

    typingInterval = setInterval(() => {
      setTypedResponse(aiResponse.slice(0, index));
      index++;
      if (index > aiResponse.length) clearInterval(typingInterval);
    }, 45);

    return () => clearInterval(typingInterval);
  }, [isOpen]);

  /* -------- Bottom description typing -------- */
  useEffect(() => {
    if (!isOpen) return;

    let typingInterval: NodeJS.Timeout;
    let index = 0;

    setTypedBottom("");

    typingInterval = setInterval(() => {
      setTypedBottom(bottomDescription.slice(0, index));
      index++;
      if (index > bottomDescription.length) clearInterval(typingInterval);
    }, 28);

    return () => clearInterval(typingInterval);
  }, [isOpen]);

  /* -------- Loading dots -------- */
  useEffect(() => {
    if (!open) return;

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(dotInterval);
  }, [isOpen]);

  return (
    <section className="w-full flex flex-col items-center gap-6 px-4">
      {/* ================= TOP PILL ================= */}
      <div
        onClick={onOpen}
        className={`
    w-full max-w-3xl
    bg-[#EFE8E1]
    rounded-[28px]
    px-5 py-3
    flex items-center justify-between
    shadow-[0_6px_20px_rgba(0,0,0,0.08)]
    cursor-pointer
    transition-all duration-300
    ${isOpen ? "opacity-0 h-0 overflow-hidden pointer-events-none" : "opacity-100"}
  `}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-white flex items-center justify-center shadow-md">
            <MessageSquare size={16} />
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl shadow-md">
            <span className="text-sm font-medium">Chat & Create</span>
          </div>
        </div>

        <img
          src="https://i.pravatar.cc/48"
          className="w-10 h-10 rounded-full shadow-md"
        />
      </div>

      {/* ================= MAIN CHAT CARD ================= */}
      <div
        className={`
          w-full max-w-4xl  rounded-[28px] bg-[#EFE8E1]
          transition-all duration-500 ease-out
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none h-0 overflow-hidden"}
        `}
      >
        <div className="p-6 rounded-[28px] sm:p-8 shadow-md">
          {/* Header (click to close) */}
          <div
            onClick={onOpen}
            className="flex items-center gap-3 mb-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-md">
              <MessageSquare size={18} className="text-white" />
            </div>
            <div className="bg-black text-white px-5 py-2 rounded-full shadow-md">
              <span className="text-sm font-medium">Chat & Create</span>
            </div>
          </div>

          {/* Chat */}
          <div className="flex flex-col gap-10 mt-6">
            {/* User */}
            <div className="flex justify-end items-end gap-3">
              <div className="bg-[#5F8F7A] text-white px-6 py-2 rounded-[18px] max-w-[520px] text-sm shadow-md">
                Run a campaign on our fintech audience with 5000+ leads
              </div>
              <img
                src="https://i.pravatar.cc/56"
                className="w-12 h-12 rounded-full shadow-md"
              />
            </div>

            {/* AI */}
            <div className="flex items-end gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6FB1A0] flex items-center justify-center shadow-md">
                <Bot size={22} className="text-white" />
              </div>

              <div className="bg-white px-6 py-5 rounded-[20px] max-w-[560px] text-sm leading-relaxed shadow-md min-h-[96px]">
                {typedResponse}
                <span className="animate-pulse">▍</span>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mt-4 flex items-center gap-2 text-sm text-black/60">
            <Sparkles size={16} className="text-[#5F8F7A]" />
            <span>
              {statusText}
              {dots}
            </span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ANIMATED TEXT ================= */}
      <div
        className={`
          w-[85%] max-w-3xl text-center
          transition-all duration-500
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 h-0 overflow-hidden"}
        `}
      >
        <p className="text-sm text-[#3A4F58] min-h-[48px]">
          {typedBottom}
          <span className="animate-pulse">▍</span>
        </p>
      </div>
    </section>
  );
}
