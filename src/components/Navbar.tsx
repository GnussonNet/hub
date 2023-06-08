"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import LucideIcon from "./LucideIcon";
import { NavItems } from "./NavItems";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

// FIXME Remove this when auth is implemented
const SIMULATED_AUTH = false;
const HEADER_HEIGHT = "h-16";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navItemsWrapped, setNavItemsWrapped] = useState({
    links: false,
    buttons: false,
    menuButton: false,
  });

  const navLogoRef = useRef<HTMLAnchorElement>(null);
  const navMenuButtonRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const navButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(navItemsWrapped);
  }, [navItemsWrapped]);

  useEffect(() => {
    let previousWidth = window.innerWidth;

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== previousWidth) {
        setMenuOpen(false);
      }

      const navLogo = navLogoRef.current;
      const navMenuButton = navMenuButtonRef.current;
      const navItems = navItemsRef.current;
      const navButtons = navButtonsRef.current;

      if (!navLogo || !navMenuButton || !navItems || !navButtons) return;

      const linksWrapped =
        navLogo.getBoundingClientRect().top <
        navItems.getBoundingClientRect().top;
      const buttonsWrapped =
        navItems.getBoundingClientRect().top <
        navButtons.getBoundingClientRect().top;
      const menuButtonWrapped =
        navItems.getBoundingClientRect().top <
        navMenuButton.getBoundingClientRect().top;

      if (linksWrapped) {
        setNavItemsWrapped({ links: true, buttons: true, menuButton: true });
      } else if (menuButtonWrapped) {
        setNavItemsWrapped((prev) => ({
          ...prev,
          buttons: true,
          menuButton: true,
        }));
        setNavItemsWrapped((prev) => ({ ...prev, links: false }));
      } else if (buttonsWrapped) {
        setNavItemsWrapped((prev) => ({ ...prev, buttons: true }));
        setNavItemsWrapped((prev) => ({
          ...prev,
          links: false,
          menuButton: false,
        }));
      } else {
        setNavItemsWrapped({ links: false, buttons: false, menuButton: false });
      }
      previousWidth = currentWidth;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full overflow-hidden border-b bg-background",
        menuOpen ? "" : HEADER_HEIGHT
      )}
    >
      <div className="container flex w-full flex-wrap items-center">
        <Link
          ref={navLogoRef}
          href={pathname.startsWith("/dashboard") ? "/dashboard" : "/"}
          className={cn(
            "order-1 mr-6 flex flex-shrink-0 items-center space-x-2 rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            HEADER_HEIGHT
          )}
        >
          <LucideIcon name="Globe" className="h-6 w-6 flex-shrink-0" />
          <span className="inline-block font-bold">
            {siteConfig.name}{" "}
            <span className=" text-sm font-thin xs:inline">by GnussonNet</span>
          </span>
        </Link>
        <div
          ref={navItemsRef}
          className={cn(
            "relative flex items-center",
            menuOpen ? "w-full" : "flex-1",
            !menuOpen && HEADER_HEIGHT,
            navItemsWrapped.menuButton ? "order-5" : "order-3"
          )}
        >
          <NavItems
            menuOpen={menuOpen}
            items={
              pathname === "/" ? siteConfig.landingNav : siteConfig.dashboardNav
            }
          />
        </div>
        <Separator
          className={cn("order-5", menuOpen ? "my-4 block" : "hidden")}
        />
        <div
          ref={navMenuButtonRef}
          className={cn(
            "ml-auto items-center",
            navItemsWrapped.buttons ? "flex" : "hidden",
            navItemsWrapped.menuButton ? "order-3" : "order-5",
            menuOpen ? "order-2" : "order-4",
            HEADER_HEIGHT
          )}
        >
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            size={"sm"}
            variant={"outline"}
          >
            <LucideIcon name="Menu" className="h-4 w-4" />
          </Button>
        </div>
        <div
          ref={navButtonsRef}
          className={cn(
            "relative order-5 flex items-center space-x-4",
            menuOpen ? "mb-4 flex-1 justify-center" : "justify-end",
            !menuOpen && HEADER_HEIGHT
          )}
        >
          <nav className={cn("flex gap-2", menuOpen ? "w-full flex-col" : "")}>
            {!SIMULATED_AUTH && !pathname.startsWith("/dashboard") ? (
              <>
                <Button
                  size={menuOpen ? "lg" : "sm"}
                  variant={"ghost"}
                  className="flex flex-shrink-0 justify-start"
                  asChild
                >
                  <Link href={siteConfig.unauthenticatedNav.signUp.href}>
                    <LucideIcon
                      name={siteConfig.unauthenticatedNav.signUp.icon}
                      className="mr-2 h-4 w-4"
                    />
                    {siteConfig.unauthenticatedNav.signUp.title}
                  </Link>
                </Button>
                <Button
                  size={menuOpen ? "lg" : "sm"}
                  className="flex flex-shrink-0 justify-start"
                  asChild
                >
                  <Link href={siteConfig.unauthenticatedNav.signIn.href}>
                    <LucideIcon
                      name={siteConfig.unauthenticatedNav.signIn.icon}
                      className="mr-2 h-4 w-4"
                    />
                    {siteConfig.unauthenticatedNav.signIn.title}
                  </Link>
                </Button>
              </>
            ) : SIMULATED_AUTH && !pathname.startsWith("/dashboard") ? (
              <>
                <Button
                  size={menuOpen ? "lg" : "sm"}
                  className="flex justify-start"
                  asChild
                >
                  <Link href={siteConfig.authenticatedNav.dashboard.href}>
                    <LucideIcon
                      name={siteConfig.authenticatedNav.dashboard.icon}
                      className="mr-2 h-4 w-4"
                    />
                    {siteConfig.authenticatedNav.dashboard.title}
                  </Link>
                </Button>
              </>
            ) : (
              <></>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
