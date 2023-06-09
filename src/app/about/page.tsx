import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <main className="container flex-1">
        <h1>About</h1>
      </main>

      <footer className="w-full" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Hub
        </h2>
        <div className="py-12">
          <div className="flex flex-col items-baseline space-y-6">
            <div className="mx-auto">
              <Button asChild size={"sm"} variant={"link"} className="p-2">
                <Link className="flex items-center space-x-2" href="/">
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
            <div className="mx-auto">
              <span className="mx-auto mt-2 text-sm text-muted-foreground">
                Copyright © 2023
                <Button
                  asChild
                  size={"sm"}
                  variant={"link"}
                  className="mx-2 px-0"
                >
                  <Link href="https://gnusson.net">@GnussonNet</Link>
                </Button>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
