import React              from 'react'

import { LandingAbout }   from '@landing/about-fragment'
import { LandingCourses } from '@landing/courses-fragment'
import { LandingFaq }     from '@landing/faq-fragment'
import { LandingHeader }  from '@landing/header-fragment'
import { LandingHero }    from '@landing/hero-fragment'
import { LandingProcess } from '@landing/process-fragment'
import { LandingRunline } from '@landing/runline-fragment'
import { LandingSlider }  from '@landing/slider-fragment'

const Page = () => (
  <>
    <LandingHeader />
    <LandingHero />
    <LandingAbout />
    <LandingCourses />
    <LandingProcess />
    <LandingRunline />
    <LandingSlider />
    <LandingFaq />
  </>
)

export default Page
