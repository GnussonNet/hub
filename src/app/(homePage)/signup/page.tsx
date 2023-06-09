import Link from "next/link";
import React from "react";
import { UserAuthForm } from "./components/UserAuthForm";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const page = () => {
  return (
    <div
      className={cn(
        "container pt-8 sm:pt-12",
        siteConfig.options.navbar.paddingBottom
      )}
    >
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:h-full sm:max-w-xl">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-medium tracking-tight text-primary md:text-3xl ">
            Create an account
          </h1>
          <p className="text-md mt-4 tracking-tight text-muted-foreground md:text-lg">
            Enter your email below to create your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
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
  );
};

export default page;
