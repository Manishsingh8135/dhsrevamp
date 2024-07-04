import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider"
import { NavbarDemo } from "@/components/navbar/Navbar";
import FooterPreview from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DHS REVAMP",
  description: "Best Home Revamp Service in North America.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
