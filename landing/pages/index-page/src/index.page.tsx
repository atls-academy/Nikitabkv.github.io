import React              from 'react'

import { LandingCourses } from '@landing/courses-fragment'
import { LandingFaq }     from '@landing/faq-fragment'
import { LandingHero }    from '@landing/hero-fragment'
import { LandingProcess } from '@landing/process-fragment'
import { LandingHeader }  from '@landing/header-fragment'
import { LandingAbout }  from '@landing/about-fragment'

const Page = () => (
  <>
    <LandingHeader />
    <LandingHero />
    <LandingAbout />
    <LandingCourses />
    {/*<LandingProcess />*/}
    {/*<LandingFaq />*/}
  </>
)

export default Page
