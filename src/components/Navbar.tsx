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

const SIMULATED_AUTH = true;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navItemsWrapped, setNavItemsWrapped] = useState({
    links: false,
    buttons: false,
  });

  const navMenuButtonRef = useRef<HTMLButtonElement>(null);
  const navPlaceholderRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const navButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false);

      const navMenuButton = navMenuButtonRef.current;
      const navPlaceholder = navPlaceholderRef.current;
      const navItems = navItemsRef.current;
      const navButtons = navButtonsRef.current;

      if (!navMenuButton || !navPlaceholder || !navItems || !navButtons) return;

      const linksWrapped =
        navPlaceholder.getBoundingClientRect().top <
        navItems.getBoundingClientRect().top;
      const buttonsWrapped =
        navItems.getBoundingClientRect().top <
        navButtons.getBoundingClientRect().top;

      if (linksWrapped) {
        setNavItemsWrapped((prev) => ({ ...prev, links: true }));
        setNavItemsWrapped((prev) => ({ ...prev, buttons: true }));
      } else if (buttonsWrapped) {
        setNavItemsWrapped((prev) => ({ ...prev, buttons: true }));
        setNavItemsWrapped((prev) => ({ ...prev, links: false }));
      } else {
        setNavItemsWrapped((prev) => ({ ...prev, links: false }));
        setNavItemsWrapped((prev) => ({ ...prev, buttons: false }));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const navMenuButton = navMenuButtonRef.current;
  //   const navPlaceholder = navPlaceholderRef.current;
  //   const navItems = navItemsRef.current;
  //   const navButtons = navButtonsRef.current;

  //   if (!navMenuButton || !navPlaceholder || !navItems || !navButtons) return;

  //   const linksWrapped =
  //     navPlaceholder.getBoundingClientRect().top <
  //     navItems.getBoundingClientRect().top;
  //   const buttonsWrapped =
  //     navItems.getBoundingClientRect().top <
  //     navButtons.getBoundingClientRect().top;

  //   if (linksWrapped) {
  //     setNavItemsWrapped((prev) => ({ ...prev, links: true }));
  //     setNavItemsWrapped((prev) => ({ ...prev, buttons: true }));
  //   } else if (buttonsWrapped) {
  //     setNavItemsWrapped((prev) => ({ ...prev, buttons: true }));
  //     setNavItemsWrapped((prev) => ({ ...prev, buttons: false }));
  //   } else {
  //     setNavItemsWrapped((prev) => ({ ...prev, links: false }));
  //     setNavItemsWrapped((prev) => ({ ...prev, buttons: false }));
  //   }
  // }, []);

  return (
    <header
      className={cn(
        "container sticky top-0 z-40 flex w-full flex-wrap items-center overflow-hidden border-b bg-background",
        menuOpen ? "h-auto" : "h-16"
      )}
    >
      <Link
        href={pathname.startsWith("/dashboard") ? "/dashboard" : "/"}
        className="mr-6 flex h-16 flex-shrink-0 items-center space-x-2 rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <LucideIcon name="Globe" className="h-6 w-6 flex-shrink-0" />
        <span className="inline-block font-bold">
          {siteConfig.name}{" "}
          <span className=" text-sm font-thin xs:inline">by GnussonNet</span>
        </span>
      </Link>
      <Button
        ref={navMenuButtonRef}
        onClick={() => setMenuOpen(!menuOpen)}
        size={"sm"}
        variant={"outline"}
        className={cn("ml-auto", navItemsWrapped.links ? "block" : "hidden")}
        // className={cn(navItemsWrapped.buttons ? "block" : "hidden")}
      >
        <LucideIcon name="Menu" className="h-4 w-4" />
      </Button>
      <div ref={navPlaceholderRef}></div>
      <div
        ref={navItemsRef}
        className={cn(
          "relative flex w-full items-center",
          menuOpen ? "w-full" : "flex-1"
        )}
      >
        {/* <NavItems
          wrapped={navItemsWrapped.links}
          items={
            pathname === "/" ? siteConfig.landingNav : siteConfig.dashboardNav
          }
        /> */}
        <nav className={cn("flex gap-2", menuOpen ? "w-full flex-col" : "")}>
          {siteConfig.landingNav?.map(
            (item, index) =>
              item.href && (
                <Button
                  key={index}
                  size={menuOpen ? "lg" : "sm"}
                  variant={"ghost"}
                  className={cn(
                    "text-muted-foreground hover:text-primary hover:no-underline",
                    pathname === item.href && "text-primary"
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    {item.icon && (
                      <LucideIcon name={item.icon} className="mr-2 h-4 w-4" />
                    )}
                    {item.title}
                  </Link>
                </Button>
              )
          )}
        </nav>
      </div>
      <Separator className={cn(menuOpen ? "block" : "hidden")} />
      <div
        ref={navButtonsRef}
        className={cn(
          "relative flex h-16 flex-1 items-center space-x-4",
          menuOpen ? "justify-center" : "justify-end"
        )}
      >
        <nav className="flex items-center space-x-4">
          <div>
            {/* FIXME Check for authentication */}
            {!SIMULATED_AUTH && !pathname.startsWith("/dashboard") ? (
              <>
                <Button size={"sm"} variant={"ghost"} asChild>
                  <Link
                    className="flex-shrink-0"
                    href={siteConfig.unauthenticatedNav.signUp.href}
                  >
                    <LucideIcon
                      name={siteConfig.unauthenticatedNav.signUp.icon}
                      className="mr-2 h-4 w-4"
                    />
                    {siteConfig.unauthenticatedNav.signUp.title}
                  </Link>
                </Button>
                <Button size={"sm"} variant={"default"} asChild>
                  <Link
                    className="flex-shrink-0"
                    href={siteConfig.unauthenticatedNav.signIn.href}
                  >
                    <LucideIcon
                      name={siteConfig.unauthenticatedNav.signIn.icon}
                      className="mr-2 h-4 w-4"
                    />
                    {siteConfig.unauthenticatedNav.signIn.title}
                  </Link>
                </Button>
              </>
            ) : SIMULATED_AUTH && !pathname.startsWith("/dashboard") ? (
              <Button size={"sm"} variant={"default"} asChild>
                <Link
                  className="flex-shrink-0"
                  href={siteConfig.authenticatedNav.dashboard.href}
                >
                  <LucideIcon
                    name={siteConfig.authenticatedNav.dashboard.icon}
                    className="mr-2 h-4 w-4"
                  />
                  {siteConfig.authenticatedNav.dashboard.title}
                </Link>
              </Button>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
