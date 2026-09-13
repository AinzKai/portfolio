import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { themeScript } from "@/lib/theme-script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Uzair Rizwan — Frontend Developer",
    template: "%s | Muhammad Uzair Rizwan",
  },
  description:
    "I build modern websites and digital systems that help businesses attract, convert, and retain customers. Based in Pakistan, serving international clients.",
  keywords: [
    "web developer",
    "freelance developer",
    "Next.js developer",
    "React developer",
    "landing page developer",
    "business website",
    "lead capture forms",
    "customer retention",
    "Pakistan web developer",
  ],
  authors: [{ name: "Muhammad Uzair Rizwan" }],
  creator: "Muhammad Uzair Rizwan",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://muhammaduzair.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammaduzair.dev",
    title: "Muhammad Uzair Rizwan — Frontend Developer",
    description:
      "I build modern websites and digital systems that help businesses attract, convert, and retain customers.",
    siteName: "Muhammad Uzair Rizwan",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@uzairrizwan",
    title: "Muhammad Uzair Rizwan — Frontend Developer",
    description:
      "I build modern websites and digital systems that help businesses attract, convert, and retain customers.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
