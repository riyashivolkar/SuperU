"use client";

import { featureGroups } from "@/lib/data";
import React from "react";

export default function PricingPage() {
  const plans = ["Free", "Starter", "Pro", "Enterprise"];

  return (
    <main className="min-h-screen w-full bg-[#080808] rounded-3xl text-[#c7c5c5] relative">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(at 50% 0%, rgba(65,172,211,0.15) 0%, transparent 50%),
            radial-gradient(at 100% 100%, rgba(65,172,211,0.05) 0%, transparent 50%)
          `,
        }}
      />

      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-wide pb-6 w-fit mx-auto"
            style={{ fontFamily: "Sentient" }}
          >
            Compare Our Plans
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Choose the plan that scales with your AI conversations.
          </p>
        </div>

        {/* ===== SCROLLABLE TABLE CONTAINER ===== */}
        <div className="rounded-3xl border border-white/10 backdrop-blur-xl bg-white/[0.01]">
          <div className="max-h-[70vh] overflow-y-auto">
            <table className="w-full table-fixed border-collapse text-left">
              {/* Sticky Header */}
              <thead className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur border-b border-[#41acd3]/30">
                <tr>
                  <th className="p-3 md:p-6 w-[28%] uppercase text-left text-[#FAF9F6]/60 font-medium text-[10px] md:text-sm border-r border-white/5">
                    Features
                  </th>

                  {plans.map((plan) => (
                    <th
                      key={plan}
                      className={`p-3 md:p-6 text-center border-r border-white/5 text-[10px] md:text-sm font-medium ${
                        plan === "Pro"
                          ? "bg-[#41acd3]/[0.06] text-[#41acd3]"
                          : ""
                      }`}
                    >
                      {plan}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {featureGroups.map((group) => (
                  <React.Fragment key={group.section}>
                    {/* Section row */}
                    <tr>
                      <td
                        colSpan={5}
                        className="p-3 md:p-6 uppercase text-left text-[#41acd3] font-medium text-[9px] md:text-sm border-y border-white/5 bg-[#41acd3]/[0.04]"
                      >
                        {group.section}
                      </td>
                    </tr>

                    {/* Feature rows */}
                    {group.rows.map((row, rIdx) => (
                      <tr key={`${group.section}-${rIdx}`}>
                        <td className="px-3 md:px-6 py-4 border-r border-white/5  text-[10px] md:text-sm">
                          {row[0]}
                        </td>

                        {row.slice(1).map((cell, cIdx) => (
                          <td
                            key={`${group.section}-${rIdx}-${cIdx}`}
                            className={`px-3 md:px-6 py-4 text-center border-r border-white/5 text-[10px] md:text-sm ${
                              cell === "✓"
                                ? "text-green-500 font-semibold"
                                : "text-slate-400"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ===== END SCROLLABLE TABLE ===== */}
      </section>
    </main>
  );
}
