import { Footer } from '@/components/footer'
import Home from '@/components/home-page'
import Testimonial from '@/components/testimonial'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async() => {
  const user = await currentUser() 
  return (
    <>
    <Home />
    { user ? null : <Testimonial />}
    <Footer />
    </>
  )
}

export default page