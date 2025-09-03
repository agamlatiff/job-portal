import Category from '@/components/page/Category'
import Clients from '@/components/page/Clients'
import Hero from '@/components/page/Hero'

const LandingPage = () => {
  return (
    <div className='px-32 mb-0'>
      <Hero/>
      <Clients/>
      <Category/>
      
    </div>
  )
}

export default LandingPage