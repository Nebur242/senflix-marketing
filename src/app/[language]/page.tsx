import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import { isLegalLanguage } from "@/lib/legal-copy";

export default async function LocalizedHomePage({
    params,
}: Readonly<{
    params: Promise<{ language: string }>;
}>) {
    const { language } = await params;

    if (!isLegalLanguage(language)) {
        notFound();
    }

    return <MarketingPage />;
}