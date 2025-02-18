import "ui/styles/globals.css";
import { ThemeProvider } from "ui/components/ThemeProvider";
import { TailwindIndicator, cn } from "ui";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Web",
  description: "Web",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="relative flex flex-1 flex-col">
              {children}
          </div>
          <Footer />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
