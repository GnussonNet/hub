import * as icons from "lucide-react";

type IconKey = keyof Omit<typeof icons, "createReactComponent">;

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: "Hub",
  name: "Hub",
  description: "Hub is a place for clients to get informed and notified about the process.",
  options: {
    navbar: {
      height: "h-16",
      padding: "pt-16",
    },
  },
  landingNav: [
    {
      title: "Home",
      href: "/",
      icon: "Home" as IconKey,
    },
    {
      title: "About",
      href: "/about",
      icon: "HeartHandshake" as IconKey,
    },
  ],
  dashboardNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "Rocket" as IconKey,
    },
  ],
  unauthenticatedNav: {
    signUp:
    {
      title: "Create Free Account",
      href: "/signup",
      icon: "UserPlus" as IconKey,
    },
    signIn: {
      title: "Sign In",
      href: "/signin",
      icon: "LogIn" as IconKey,
    },
  },
  authenticatedNav: {
    dashboard:
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "Rocket" as IconKey,
    },
  },
};
