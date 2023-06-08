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
    <html lang="en">
      <body className="dark">
        {children}
        {/* <div className="flex flex-col">
          <Navbar />
          <main className="container py-6 flex-1">{children}</main>
        </div> */}
      </body>
    </html>
  );
}
