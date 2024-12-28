import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ShinyButton } from "@/components/shiny-button";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>
    <section className="relative py-24 sm:py-32 bg-gray-100">
      <MaxWidthWrapper className="text-center space-y-8">
        <div className="mx-auto relative text-center flex flex-col items-center gap-10">
          <Heading>
            <span>Real Time SaaS Insights,</span>
            <br />
            <span>Delivered to Your Discord</span>
          </Heading>
        </div>
        <p className="text-base/7 text-gray-600 max-w-prose mx-auto text-pretty">PingPanda is the easiest way to monitor your SaaS. Get instant notifications for {" "}
          <span className="font-semibold text-gray-700"> sales, new users and any other event {" "}</span>
          sent directly to your Discord.
        </p>
        <ul className="space-y-2 text-base/7 text-left flex flex-col text-gray-600 sm:items-start">
        {[
          "Real time something something..",
          "Real time something something..",
          "Real time something something..",
          "Real time something something..",
        ].map((item, index)=>(
            <li key={index} className="flex gap-1.5 items-center mx-auto text-left">
              <Check className="size-5 shrink-0 text-emerald-600" />  
              {item}
            </li>
          ))}
        </ul>
        <div className="w-full max-w-40 mx-auto">
          <ShinyButton href="/sign-up"
           className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">Get Started</ShinyButton>
        </div>
      </MaxWidthWrapper>
    </section>
    <section></section>
    <section></section>
    </>
  );
}
