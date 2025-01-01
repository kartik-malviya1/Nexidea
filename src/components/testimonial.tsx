import Image from "next/image";
import { Incon } from "@/components/icon";

import React from 'react'
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Heading } from "./heading";
import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="relative py-24 sm:py-14">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-base/7 font-semibold">
          Real-World Experiences</h2>
          <Heading>What our user say</Heading>
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
  )
}

export default Testimonial

