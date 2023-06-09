import "@styles/globals.css";
import { siteConfig } from "@config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <Navbar items={siteConfig.landingNav} />
      <main className="container flex-1">{children}</main>
      <Footer />
    </>
  );
}
