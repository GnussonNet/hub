import "@styles/globals.css";
import { siteConfig } from "@config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar items={siteConfig.dashboardNav} />
      <main
        className={cn(
          "flex min-h-screen",
          siteConfig.options.navbar.paddingTop
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
