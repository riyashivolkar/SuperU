"use client";
import { Sparkles } from "lucide-react";
import ConfigureCampaign from "./configure-campaign";
import MonitorAnalyze from "./monitor-analyze";
import ChatAndCreate from "./chat";
import { useState } from "react";
type Step = "configure" | "monitor" | "chat";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<Step>("configure");
  const STEP_ORDER: Step[] = ["configure", "monitor", "chat"];
  const orderedSteps = [
    activeStep,
    ...STEP_ORDER.filter((step) => step !== activeStep),
  ];

  const renderStep = (step: Step) => {
    switch (step) {
      case "configure":
        return (
          <ConfigureCampaign
            key="configure"
            isOpen={activeStep === "configure"}
            onOpen={() => setActiveStep("configure")}
          />
        );

      case "monitor":
        return (
          <MonitorAnalyze
            key="monitor"
            isOpen={activeStep === "monitor"}
            onOpen={() => setActiveStep("monitor")}
          />
        );

      case "chat":
        return (
          <ChatAndCreate
            key="chat"
            isOpen={activeStep === "chat"}
            onOpen={() => setActiveStep("chat")}
          />
        );
    }
  };

  return (
    <section
      className="bg-center bg-no-repeat bg-cover relative"
      style={{ backgroundImage: "url('/texture.svg')" }}
    >
      {/* Top gradient blur */}
      <div className="hidden md:inline-block md:h-20 w-full bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6] to-[#FAF9F6] absolute -top-4 md:-top-7 left-0 z-30 blur-lg" />

      {/* Spacer */}
      <section className="pt-[40px] md:pt-[90px] w-full">
        <section className="w-full md:w-[85%] mx-auto overflow-hidden" />
      </section>
      {/* Dotted gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
        radial-gradient(circle, rgba(59,130,246,0.18) 2px, transparent 2px),
        radial-gradient(circle, rgba(249,115,22,0.18) 2px, transparent 2px)
      `,
            backgroundSize: "28px 28px",
            backgroundPosition: "0 0, 14px 14px",
            maskImage:
              "linear-gradient(to right, black 20%, black 60%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 20%, black 60%, transparent 85%)",
          }}
        />
      </div>

      {/* Main content */}
      <section className="w-full h-full mt-[56px] z-10 relative">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-7 z-10 relative px-5">
          {/* Badge with sparkle */}
          <p className="flex gap-2 items-center px-3 w-fit mx-auto py-1 rounded-full shadow-sm shadow-black/50 bg-white">
            {/* Sparkle icon */}
            <span className="flex items-center justify-center">
              <Sparkles size={14} className="text-amber-500" />
            </span>

            <span className="text-xs font-medium  text-black bg-clip-text ">
              How it Works
            </span>
          </p>

          {/* Heading */}
          {/* Radial focus behind heading */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(249,115,22,0.08), transparent 65%)",
              }}
            />
          </div>

          <h1
            className="flex flex-col font-bold   text-[32px] md:text-5xl justify-center items-center text-center"
            style={{ fontFamily: "Sentient" }}
          >
            <span className="text-[#070d0c]  leading-[120%]">
              From setup to scale:
            </span>
            <span className="text-[#070d0c] leading-[120%]">
              How AI conversations work
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#7D6F58]  tracking-tight text-sm md:text-lg w-full lg:w-[50%] text-center">
            This is how modern marketers launch, track, and scale AI calls with
            unlimited outbound calling and post-call analytics to refine your
            campaign to perfection.
          </p>
        </div>
        <section className="w-full flex flex-col items-center gap-2">
          {orderedSteps.map(renderStep)}
        </section>
      </section>
    </section>
  );
}
