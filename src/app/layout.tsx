import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senflix",
  robots: { index: false, follow: false },
};

// Redirect-only site: this shell is never served (see vercel.json).
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
