import "@styles/globals.css";
import { siteConfig } from "@config/site";
import Navbar from "@/components/Navbar";

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
    <div className="flex flex-col">
      <Navbar />
      <main className="container flex-1 py-6">{children}</main>
    </div>
  );
}
