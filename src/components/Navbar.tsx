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

  const navRef = useRef<HTMLHeadElement>(null);
  const navLogoRef = useRef<HTMLDivElement>(null);
  const navMenuButtonRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const navButtonsRef = useRef<HTMLDivElement>(null);

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
      const menuButtonWrapped =
        navLogo.getBoundingClientRect().top <
        navMenuButton.getBoundingClientRect().top;
      const buttonsWrapped =
        navLogo.getBoundingClientRect().top <
        navButtons.getBoundingClientRect().top;

      if (linksWrapped) {
        setNavItemsWrapped({ links: true, menuButton: true, buttons: true });
      } else if (menuButtonWrapped) {
        setNavItemsWrapped({ links: false, menuButton: true, buttons: true });
      } else if (buttonsWrapped) {
        setNavItemsWrapped({ links: false, menuButton: false, buttons: true });
      } else {
        setNavItemsWrapped({ links: false, menuButton: false, buttons: false });
      }
      previousWidth = currentWidth;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        navMenuButtonRef.current &&
        !navMenuButtonRef.current.contains(event.target as Node) &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 z-40 w-full overflow-hidden border-b bg-background",
        menuOpen ? "" : HEADER_HEIGHT
      )}
    >
      <div className="container flex w-full flex-wrap items-center">
        <div
          ref={navLogoRef}
          className={cn("order-1 flex items-center", HEADER_HEIGHT)}
        >
          <Button asChild size={"sm"} variant={"link"} className="mr-6 p-0">
            <Link
              className="flex items-center space-x-1"
              href={pathname.startsWith("/dashboard") ? "/dashboard" : "/"}
            >
              <LucideIcon name="Globe" className="h-6 w-6 flex-shrink-0" />
              <span className="inline-block font-bold">
                {siteConfig.name}{" "}
                <span className=" text-sm font-thin xs:inline">
                  by GnussonNet
                </span>
              </span>
            </Link>
          </Button>
        </div>
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
              pathname === "/dashboard"
                ? siteConfig.dashboardNav
                : siteConfig.landingNav
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

            menuOpen
              ? "order-2"
              : navItemsWrapped.menuButton
              ? "order-3"
              : "order-5",
            HEADER_HEIGHT
          )}
        >
          {menuOpen ? (
            <Button
              onClick={() => setMenuOpen(false)}
              size={"sm"}
              variant={"outline"}
              aria-label="Close menu"
            >
              <LucideIcon name="X" className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={() => setMenuOpen(true)}
              size={"sm"}
              variant={"outline"}
              aria-label="Open menu"
            >
              <LucideIcon name="Menu" className="h-4 w-4" />
            </Button>
          )}
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
