import React from 'react'

import {LandingHero} from '@landing/hero-fragment'
import {LandingCourses} from "@landing/courses-fragment";
import {LandingProcess} from "@landing/process-fragment";
import {LandingFaq} from "@landing/faq-fragment";

const Page = () => (
    <>
        <LandingHero/>
        <LandingCourses/>
        <LandingProcess/>
        <LandingFaq/>
    </>
)

export default Page
