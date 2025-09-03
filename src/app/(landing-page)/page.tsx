import BannerSignUp from '@/components/page/BannerSignUp'
import Category from '@/components/page/Category'
import Clients from '@/components/page/Clients'
import FeaturedJobs from '@/components/page/FeaturedJobs'
import Hero from '@/components/page/Hero'

const LandingPage = () => {
  return (
    <div className='px-32 mb-0'>
      <Hero/>
      <Clients/>
      <Category/>
      <BannerSignUp/>
      <FeaturedJobs/>
    </div>
  )
}

export default LandingPage