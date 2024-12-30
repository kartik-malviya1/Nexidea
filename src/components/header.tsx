import React from 'react'
import Link from 'next/link'
import { SignInButton, SignOutButton } from "@clerk/nextjs"
import { MaxWidthWrapper } from './max-width-wrapper'
import { Button } from './ui/button'
import { ShinyButton } from './ui/shiny-button'

export const Header = () => {
  const user = false 
  return (
    <nav className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='h-16 flex items-center justify-between'>
          <Link href={"/"} className='flex z-40 font-semibold text-xl'>
          Nex<span className='text-purple-600'>idea</span>
          </Link>

          <div className='h-full flex items-center space-x-2 '>
            {user ? <>
              <SignOutButton>
                <Button variant={'outline'}>Sign Out</Button>
              </SignOutButton>
              <hr className='border border-b-2 h-7'/>
              <SignInButton>
                <Button variant={'outline'} className='bg-purple-600 text-white duration-300'>Dashboard</Button>
              </SignInButton>
            </>
             
            : <div className="w-full max-w-40 mx-auto">
                <ShinyButton href="/sign-up"
                   className="relative z-10 h-10 max-w-32 text-sm left-2 shadow-lg transition-shadow duration-300 hover:shadow-xl">Get Started</ShinyButton>
            </div>}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
