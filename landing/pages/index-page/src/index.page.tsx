import React              from 'react'

import { LandingCourses } from '@landing/courses-fragment'
import { LandingFaq }     from '@landing/faq-fragment'
import { LandingHero }    from '@landing/hero-fragment'
import { LandingProcess } from '@landing/process-fragment'

const Page = () => (
  <>
    <LandingHero />
    <LandingCourses />
    {/*<LandingProcess />*/}
    {/*<LandingFaq />*/}
  </>
)

export default Page
