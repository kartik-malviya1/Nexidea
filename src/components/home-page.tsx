import Link from "next/link";
import { Heading } from "@/components/heading";
import { ArrowRight, Check } from "lucide-react";
import SkillSelector from "@/components/skill-selector";
import { currentUser } from "@clerk/nextjs/server";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";


export default async function Home() {
  const user = await currentUser();
  return (
    <>
      <section className="relative py-24 sm:py-17">
        <MaxWidthWrapper className="text-center space-y-8">
          {user ? (
            <div className="mx-auto relative text-center flex flex-col items-center gap-10">
              <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                <Heading>
                  <span>Welcome back, {user.username}</span>
                </Heading>
              </div>
              <p className="text-base/7 text-gray-600 max-w-prose mx-auto text-pretty">
                Struggling to find project ideas? Choose your{" "}
                <span className="font-semibold text-gray-700">
                  {" "}
                  stack, pick your level, and let Nexidea craft ideas that match
                  your skills and expertise.
                </span>
              </p>
              <SkillSelector />
              <div className="w-full max-w-[12rem] mx-auto">
                <ShinyButton
                  href="#"
                  className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  Generating Idea
                </ShinyButton>
              </div>
              <div className="flex space-x-1">
                <p className="text-gray-600">
                  Did you have any problems when using this?
                </p>
                <Link href={"/help-me"}>
                  <span className="hover:underline text-gray-600 hover:text-purple-600 underline cursor-pointer">
                    Help me
                  </span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="mx-auto relative text-center flex flex-col items-center gap-10">
              <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                <div className="mb-6 flex">
                  <a
                    href="https://github.com/kartik-malviya1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                      <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                        New snippets ⚡️
                        <span className="inline-flex items-center pl-2 text-black dark:text-white">
                          Read more{" "}
                          <ArrowRight
                            className="pl-0.5 text-black dark:text-white"
                            size={16}
                          />
                        </span>
                      </div>
                    </span>
                  </a>
                </div>
                <Heading>
                  <span>Ideas Made for Your Stack</span>
                </Heading>
              </div>
              <p className="text-base/7 text-gray-600 max-w-prose mx-auto text-pretty">
                Struggling to find project ideas? Choose your{" "}
                <span className="font-semibold text-gray-700">
                  {" "}
                  stack, pick your level, and let Nexidea craft ideas that match
                  your skills and expertise.
                </span>
              </p>
              <ul className="space-y-2 text-base/7 text-left flex flex-col text-gray-600 sm:items-start">
                {[
                  "Roadmaps for Every Idea",
                  "Customizable Tech Stack Selection",
                  "Random Shuffle for Creative Exploration",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-1.5 items-center text-left"
                  >
                    <Check className="size-5 shrink-0 text-purple-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="w-full max-w-60 mx-auto">
                <ShinyButton
                  href="/sign-up"
                  className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  Start Generating Ideas
                </ShinyButton>
              </div>
            </div>
          )}
        </MaxWidthWrapper>
      </section>
    </>
  );
}
