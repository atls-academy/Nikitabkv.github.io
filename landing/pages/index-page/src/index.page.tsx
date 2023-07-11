import React                      from 'react'

import { LandingAbout }           from '@landing/about-fragment'
import { LandingCourses }         from '@landing/courses-fragment'
import { LandingSlider } from '@landing/slider-fragment'
import { LandingFaq }             from '@landing/faq-fragment'
import { LandingHeader }          from '@landing/header-fragment'
import { LandingHero }            from '@landing/hero-fragment'
import { LandingProcess }         from '@landing/process-fragment'
import { LandingTechnologies }    from '@landing/technologies-fragment'

const Page = () => (
  <>
    <LandingHeader />
    <LandingHero />
    <LandingAbout />
    <LandingCourses />
    <LandingProcess />
    <LandingTechnologies />
    <LandingSlider />
    <LandingFaq />
  </>
)

export default Page
