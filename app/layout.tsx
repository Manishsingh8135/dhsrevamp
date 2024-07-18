import type { Metadata } from "next";
import { Inter, Creepster, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider"
import { NavbarDemo } from "@/components/navbar/Navbar";
import FooterPreview from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creepster',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: "DHS REVAMP",
  description: "Best Home Revamp Service in North America.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${creepster.variable} ${oswald.variable} ${inter.className}`}>
      <body className={`${oswald.className} text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarDemo/>
          {children}
          <FooterPreview/>
        </ThemeProvider>
      </body>
    </html>
  );
}