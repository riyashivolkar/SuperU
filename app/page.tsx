import PricingPage from "@/components/pricing";
import HowItWorksSection from "@/components/working";

export const metadata = {
  title: "SuperU - AI Calling for Marketers",
  description:
    "Automate inbound and outbound AI calling campaigns that qualify leads, follow up instantly, and book meetings without human agents.",
};

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen overflow-x-hidden">
      {/* <Header /> */}
      <HowItWorksSection />
      <div className=" pt-12">
        {" "}
        <PricingPage />
      </div>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center"></main>
    </div>
  );
}
