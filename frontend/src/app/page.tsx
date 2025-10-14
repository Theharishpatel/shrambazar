"use client";

import { JobCard } from "@/components/common/jobcard";
import { FeatureJobSection } from "@/components/landing/featureJobsSection/featureJobSection";
import { HeroSection } from "@/components/landing/herosection/heroSection";
import WorkTypeGrid from "@/components/landing/Worktypesection/WorkTypeGrid";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WorkTypeGrid />
      <FeatureJobSection />
     
    </div>
  );
}
