import React from "react";

import {Layout, Box, Column} from '@ui/layout'
import {Text} from '@ui/text'
import {LogoIcon} from '@ui/icon'

import {About} from "./about";
import {TextComponent} from "./text";

const LandingHero = () => (
    <Box background='gray' height={['996px', '1670px']}>
        <Column width='100%' alignItems='center' justifyContent='center'>
            <Column width='100%' height={['auto', '86%']}>
                <Layout justifyContent={['center', 'space-between']} marginBottom={['80px', '0']}>
                    <Layout margin={['23px 0 23px 0', '40px 0 35px 35px']}>
                        <LogoIcon width='56' height='56'/>
                    </Layout>
                    <Layout width='860px' alignItems='center' justifyContent='center' display={['none', 'flex']}>
                        <Layout justifyContent='center' width='200px'>
                            <Text fontSize={['medium']} color='white'>ACADEMY</Text>
                        </Layout>
                        <Layout justifyContent='center' width='200px'>
                            <Text fontSize={['medium']} color='white'>КУРСЫ</Text>
                        </Layout>
                        <Layout justifyContent='center' width='200px'>
                            <Text fontSize={['medium']} color='white'>ОБУЧЕНИЕ</Text>
                        </Layout>
                        <Layout justifyContent='center' width='200px'>
                            <Text fontSize={['medium']} color='white'>FAQ</Text>
                        </Layout>
                    </Layout>
                    <Layout margin='0px 35px 0px 35px' alignItems='center' display={['none', 'flex']}>
                        <Text color='white' fontSize='18px'>Курсы</Text>
                    </Layout>
                </Layout>
            </Column>
            <About/>
            <TextComponent/>
        </Column>
    </Box>
)

export {LandingHero}
