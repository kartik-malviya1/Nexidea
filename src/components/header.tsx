import React from "react";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Button } from "./ui/button";
import { ShinyButton } from "./ui/shiny-button";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight } from "lucide-react";

export const Header = async () => {
  const user = await currentUser();
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="h-16 flex items-center justify-between">
          <Link href={"/"} className="flex z-40 font-semibold text-xl">
            Nex<span className="text-purple-600">idea</span>
          </Link>
      
          <div className="h-full flex items-center space-x-2 ">
            {user ? (
              <>
                <SignOutButton>
                  <Button variant={"outline"}>Sign Out</Button>
                </SignOutButton>
                <hr className="border border-b-2 h-7" />
                <Link href={"/dashboard"} className="group relative flex transform">
                  <Button
                    variant={"default"}
                    className="bg-purple-600 hover:bg-purple-700 text-white duration-100"
                  >
                    Dashboard
                    <ArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
                  </Button>
                </Link>
              </>
            ) : (
              <div className="w-full mx-auto flex items-center gap-3">
                <Link href={"/sign-in"} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium hover:text-purple-600">
                    Pricing
                </Link>
                <Link href={"/sign-in"}>
                  <Button
                    variant={"ghost"}
                  >
                    Sign in
                  </Button>
                </Link>
                <hr className="border border-b-2 h-7" />
                <ShinyButton
                  href="/sign-up"
                  className="relative z-10 h-10 max-w-24 text-sm left-2 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  Sign up
                </ShinyButton>
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
