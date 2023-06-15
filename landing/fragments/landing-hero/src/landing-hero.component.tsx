import React from "react";

import {Layout, Box, Column} from '@ui/layout'
import {Text} from '@ui/text'

import logo from '../../../public/logo.svg'
import {About} from "./about/about.component";
import {TextComponent} from "./text";

const LandingHero = () => (
    <Box background={'#666666'} height='1800px'>
        <Column width='100%' alignItems='center' justifyContent='center'>
            <Column width='100%'>
                <Layout className="header" justifyContent='space-between'>
                    <Layout margin='40px 0 35px 35px'>
                        <img src={logo.src} alt='logo'/>
                    </Layout>
                    <Layout width='860px' alignItems='center' justifyContent='center'>
                        <Layout justifyContent='center' width='200px'>
                            <Text color={'white'}>ACADEMY</Text>
                        </Layout>
                        <Layout justifyContent='center' width='200px'>
                            <Text color={'white'}>КУРСЫ</Text>
                        </Layout>
                        <Layout justifyContent='center' width='200px'>
                            <Text color={'white'}>ОБУЧЕНИЕ</Text>
                        </Layout>
                        <Layout justifyContent='center' width='200px'>
                            <Text color={'white'}>FAQ</Text>
                        </Layout>
                    </Layout>
                    <Layout margin='0px 35px 0px 35px' alignItems='center'>
                        <Text color={'white'} fontSize={'18px'}>Курсы</Text>
                    </Layout>
                </Layout>
            </Column>
            <About/>
            <TextComponent/>
        </Column>
    </Box>
)

export {LandingHero}
