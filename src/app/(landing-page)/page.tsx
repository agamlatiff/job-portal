import Clients from '@/components/page/Clients'
import Hero from '@/components/page/Hero'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='px-32 mb-10'>
      <Hero/>
      <Clients/>
    </div>
  )
}

export default LandingPage