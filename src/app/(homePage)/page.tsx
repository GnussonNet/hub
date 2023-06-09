import LucideIcon from "@/components/LucideIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import boardImage from "@assets/img/board.svg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
      <div className="relative w-full items-center py-24 lg:py-36">
        <div className="relative m-auto flex-col items-start align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative m-auto items-center gap-12 lg:inline-flex">
              <div className="max-w-3xl text-center lg:text-left">
                <div>
                  <p className="text-3xl font-medium text-primary md:text-6xl">
                    Hub, the best way to{" "}
                    <span className="text-blue-500">enchance</span> workflow
                    between teams.
                  </p>
                  <p className="mt-4 text-lg tracking-tight text-muted-foreground lg:text-xl">
                    To better understand each other, we need to communicate. Hub
                    is a platfor to help you and your team to communicate
                    better. With Hub you can create boards, add cards,
                    communicate and much more.
                  </p>
                </div>
                <div className="mt-10 flex flex-col items-center gap-3 lg:flex-row">
                  <Button size={"lg"}>Create free account</Button>
                  <p className="text-muted-foreground">
                    <span className="block">No credit card info required</span>
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
              <Image
                src={boardImage}
                alt="hero"
                className="mx-auto w-full max-w-2xl rounded-2xl object-cover object-center drop-shadow-xl lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative items-center justify-center py-14 text-center lg:py-24">
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
      <div className="relative mx-auto w-full max-w-7xl items-center py-14 lg:py-24">
        <div className="mx-auto grid grid-cols-1 items-start lg:grid-cols-3">
          <div className="lg:pr-12">
            <div className="flex flex-col p-8 lg:p-0">
              <h1 className="text-4xl text-primary">
                Always know
                <span className="lg:block"> what you’ll pay </span>
              </h1>
              <div className="mt-3 max-w-lg">
                <p className="text-sm text-muted-foreground">
                  Choose a plan that works the best for you and your team. Start
                  small, upgrade when you need to.
                </p>
              </div>
            </div>
          </div>
          <section className="flex flex-col px-6 sm:px-8 lg:py-8">
            <h2 className="mt-5 text-lg text-primary">Big fish</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For even the biggest enterprise companies.
            </p>
            <p className="order-first text-5xl font-light tracking-tight text-primary">
              $99
            </p>
            <ul
              role="list"
              className="order-last mt-10 flex flex-col gap-y-3 text-sm text-muted-foreground"
            >
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Connect unlimited websites </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Connect up to 15 bank accounts </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Track up to 200 credit cards </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Analytics support </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Export up to 24 months data </span>
              </li>
            </ul>
            <Button className="mt-8">Get started</Button>
          </section>
          <section className="order-first flex flex-col rounded-xl bg-accent px-6 py-8 sm:px-8 lg:order-none">
            <h3 className="mt-5 text-lg text-primary">Indie Hacker</h3>
            <p className="mt-2 text-sm text-white/60">
              Perfect for those leaving 9-5 and working 24/7.
            </p>
            <p className="order-first text-5xl font-light tracking-tight text-primary">
              $29
            </p>
            <ul
              role="list"
              className="order-last mt-10 flex flex-col gap-y-3 text-sm text-white/60"
            >
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Connect 80 websites </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Connect up to 5 bank accounts </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Track up to 50 credit cards </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Analytics support </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Export up to 12 months data </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Cloud service 24/7 </span>
              </li>
              <li className="flex items-center">
                <LucideIcon name="Check" className="h-4 w-4" />
                <span className="ml-4"> Track in multiple users </span>
              </li>
            </ul>
            <Button className="mt-8">Get started</Button>
          </section>
        </div>
      </div>
      <div className="relative mx-auto w-full items-center py-14 lg:py-24">
        <div className="mx-auto text-center lg:p-10">
          <div>
            <p className="text-5xl tracking-tight text-primary ">
              Subscribe and get{" "}
              <span className="lg:block">
                <span className="text-blue-500">benefits</span> from our
                newsletter
              </span>
            </p>
            <p className="mt-4 text-lg tracking-tight text-muted-foreground">
              If you could kick the person in the pants responsible for most of
              your trouble, you wouldn&lsquo;t sit for a month. Imagine that,
              fam.
            </p>
          </div>
          <div className="mx-auto flex flex-col items-center pb-8 pt-8 md:pt-6">
            <form
              className="flexflex-col mx-auto items-center justify-center"
              action=""
            >
              <div className="flex w-full items-center space-x-4">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </div>
          <div className="mx-auto sm:flex">
            <p className="mx-auto px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
