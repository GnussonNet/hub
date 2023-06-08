"use client";

import Link from "next/link";
import { NavItem } from "@/types/nav";
import LucideIcon from "./LucideIcon";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: NavItem[];
  wrapped?: boolean;
}

export function NavItems({ items, wrapped }: MainNavProps) {
  const pathname = usePathname();
  return items?.length ? (
    <nav className={cn("flex gap-2")}>
      {items?.map(
        (item, index) =>
          item.href && (
            <Button
              key={index}
              size={"sm"}
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
  ) : null;
}
