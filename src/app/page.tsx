import LucideIcon from "@/components/LucideIcon";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import boardImage from "@assets/img/board.svg";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="container flex-1 py-6">
        <div className="relative w-full items-center py-24 lg:py-36">
          <div className="relative m-auto flex-col items-start align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative m-auto items-center gap-12 lg:inline-flex">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <p className="text-3xl font-medium text-primary md:text-6xl">
                      Hub, the best way to{" "}
                      <span className="text-blue-500">enchance</span> workflow
                      between teams.
                    </p>
                    <p className="mt-4 text-lg tracking-tight text-muted-foreground lg:text-xl">
                      To better understand each other, we need to communicate.
                      Hub is a platfor to help you and your team to communicate
                      better. With Hub you can create boards, add cards,
                      communicate and much more.
                    </p>
                  </div>
                  <div className="mt-10 flex flex-col items-center gap-3 lg:flex-row">
                    <Button size={"lg"}>Create free account</Button>
                    <p className="text-muted-foreground">
                      <span className="block">
                        No credit card info required
                      </span>
                    </p>
                  </div>
                  <div className="mt-12 flex flex-col gap-3 divide-slate-400 lg:flex-row lg:divide-x-2">
                    <div>
                      <div className="flex items-center justify-center gap-3 lg:justify-start">
                        <div className="flex gap-1">
                          <LucideIcon
                            name="Star"
                            className="h-4 w-4 fill-yellow-500 text-yellow-500"
                          />
                          <LucideIcon
                            name="Star"
                            className="h-4 w-4 fill-yellow-500 text-yellow-500"
                          />
                          <LucideIcon
                            name="Star"
                            className="h-4 w-4 fill-yellow-500 text-yellow-500"
                          />
                          <LucideIcon
                            name="Star"
                            className="h-4 w-4 fill-yellow-500 text-yellow-500"
                          />
                          <LucideIcon
                            name="Star"
                            className="h-4 w-4 fill-yellow-500 text-yellow-500"
                          />
                        </div>
                        <span className="text-muted-foreground">Rating</span>
                      </div>
                    </div>
                    <div className="lg:pl-3">
                      <span>
                        <strong className="text-blue-500">500+</strong>
                        <span className="ml-3 text-muted-foreground">
                          Satisfied teams
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 block w-full lg:mt-0">
                {/* <img
                  alt="hero"
                  className="mx-auto w-full rounded-2xl object-cover object-center drop-shadow-xl lg:ml-auto"
                  src="https://leaddelta.com/wp-content/uploads/2022/12/home-hero.svg"
                /> */}
                <Image
                  src={boardImage}
                  alt="hero"
                  className="mx-auto w-full rounded-2xl object-cover object-center drop-shadow-xl lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-center justify-center py-12 text-center">
          <div className="mx-auto px-4 pb-12">
            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
              <div className="col-span-1 flex justify-center px-8">
                <img
                  className="max-h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/2a4d2cdd794587314ad2034778712608ac32e37c/79f3b/images/logos/8.svg"
                  alt="logo"
                />
              </div>
              <div className="col-span-1 flex justify-center px-8">
                <img
                  className="max-h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/4dc5df63255f9f0c1f54c804dd3149cf11308507/b7a70/images/logos/3.svg"
                  alt="logo"
                />
              </div>
              <div className="col-span-1 flex justify-center px-8">
                <img
                  className="max-h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/456c999508e76cd199714cfa4fad3826ebb02216/9147b/images/logos/5.svg"
                  alt="logo"
                />
              </div>
              <div className="col-span-1 flex justify-center px-8">
                <img
                  className="max-h-12"
                  src="https://d33wubrfki0l68.cloudfront.net/b5d09ea7476a226d10dd1235e071288761e51da7/e68ac/images/logos/6.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-2 lg:gap-24">
            <p className="text-muted-foreground md:mt-5">
              Responding to floods and weather caused by climate change,
              Florida-based Brillhart Architecture has raised a residence in
              southern Miami on galvanized steel stilts.
            </p>
            <p className="text-muted-foreground md:mt-5">
              Responding to floods and weather caused by climate change,
              Florida-based Brillhart Architecture has raised a residence in
              southern Miami on galvanized steel stilts.
            </p>
          </div>
          <Button variant={"ghost"} className="mt-10">
            <span>Read more</span>
            <LucideIcon name="ArrowRight" className="ml-3 h-4 w-4" />
          </Button>
        </div>
      </main>

      <footer className="w-full" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Hub
        </h2>
        <div className="py-12">
          <div className="flex flex-col items-baseline space-y-6">
            <div className="mx-auto">
              <Link
                href="/"
                className="flex flex-shrink-0 items-center space-x-2 rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <LucideIcon name="Globe" className="h-6 w-6 flex-shrink-0" />
                <span className="inline-block font-bold">
                  {siteConfig.name}{" "}
                  <span className=" text-sm font-thin xs:inline">
                    by GnussonNet
                  </span>
                </span>
              </Link>
            </div>
            <div className="mx-auto">
              <span className="mx-auto mt-2 text-sm text-muted-foreground">
                Copyright © 2023
                <Link
                  href="https://gnusson.net"
                  className="mx-2 text-blue-500 hover:text-muted-foreground"
                  rel="noopener noreferrer"
                >
                  @GnussonNet
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
