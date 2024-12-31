import Link from "next/link";
import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { ArrowRight, Check, Star } from "lucide-react";
import SkillSelector from "@/components/skill-selector";
import { currentUser } from "@clerk/nextjs/server";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";
import { Incon } from "@/components/icon";

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
      <section className="relative py-24 sm:py-14">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-base/7 font-semibold">
          Real-World Experiences</h2>
          <Heading>What are user say</Heading>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {/* first customer */}
          <div className="flex flex-auto flex-col gap-4 p-6 bg-purple-100/70 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
            <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
              <Star className="size-5 text-purple-600 fill-purple-600"/>
              <Star className="size-5 text-purple-600 fill-purple-600"/>
              <Star className="size-5 text-purple-600 fill-purple-600"/>
              <Star className="size-5 text-purple-600 fill-purple-600"/> 
              <Star className="size-5 text-purple-600 fill-purple-600"/>
            </div>
            <p className="text-base sm:text-lg/8 font-medium tracking-tight text-center text-purple-950 lg:text-left text-pretty">
            As a beginner in tech, I often struggled to find project ideas that aligned with my learning path. Nexidea not only provided suggestions but inspired me to take on challenges I never thought I could tackle!
            </p>
            <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
              <Image src={'/user-2.png'} alt="Random user" className="rounded-full object-cover" width={48} height={48}/>
              <div className="flex flex-col items-center sm:items-start sm:my-auto">
                <p className="font-semibold flex items-center">
                  Sophia Patel
                  <Incon.verificationBadge className="size-4 inline-block ml-1.5"/>
                </p>
                <p className="text-sm text-gray-600">@sophiacodes</p>
              </div>
            </div>
          </div>
          {/* second customer review */}
          <div className="flex flex-auto flex-col gap-4 p-6 bg-purple-100/70 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
            <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
              <Star className="size-5 text-purple-600 fill-purple-600"/>
              <Star className="size-5 text-purple-600 fill-purple-600"/>
              <Star className="size-5 text-purple-600 fill-purple-600"/>
              <Star className="size-5 text-purple-600 fill-purple-600"/> 
              <Star className="size-5 text-purple-600 fill-purple-600"/>
            </div>
            <p className="text-base sm:text-lg/8 font-medium tracking-tight text-center text-purple-950 lg:text-left text-pretty">I&apos;ve tried several tools for project inspiration, but nothing compares to Nexidea. The personalized approach makes it perfect for professionals and learners alike.
            </p>
            <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
              <Image src={'/user-1.png'} alt="Random user" className="rounded-full object-cover" width={48} height={48}/>
              <div className="flex flex-col items-center sm:items-start sm:my-auto">
                <p className="font-semibold flex items-center">
                  Arjun Desai
                  <Incon.verificationBadge className="size-4 inline-block ml-1.5"/>
                </p>
                <p className="text-sm text-gray-600">@CodeByArjun</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      </section>
      <section></section>
      <Footer />
    </>
  );
}
