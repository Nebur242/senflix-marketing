"use client";

import { CreatorSection } from "@/components/creator-section";
import { DiscoverySection } from "@/components/discovery-section";
import { DownloadSection } from "@/components/download-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustSection } from "@/components/trust-section";
import { ValueSection } from "@/components/value-section";

export function MarketingPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.03)_50%,transparent_100%)] opacity-40 dark:opacity-20" />
            <SiteHeader />
            <main>
                <HeroSection />
                <ValueSection />
                <CreatorSection />
                <DiscoverySection />
                <TrustSection />
                <DownloadSection />
                <FaqSection />
            </main>
            <SiteFooter />
        </div>
    );
}
