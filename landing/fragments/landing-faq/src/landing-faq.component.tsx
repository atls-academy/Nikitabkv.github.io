import React from "react";

import {Box, Layout, Column} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'

const LandingFaq = () => (
    <Box background='#FFFFFF' flexWrap='wrap' justifyContent='center'>
        <Layout width='1610px' justifyContent='space-between' alignItems='center' marginLeft='150px' marginTop='160px' marginBottom='80px'>
            <Text fontSize='96px'>Вопросы и ответы</Text>
            <Text fontSize='20px'>Задать вопрос</Text>
        </Layout>
        <Column width='1610px' marginLeft='150px' marginBottom='160px'>

            <Layout justifyContent='space-between' flexWrap='wrap' alignItems='flex-start'>
                <Divider weight={1} color='black'/>
                <Layout alignItems='center'>
                    <Text fontSize='24px' margin='40px 26px 40px 0'>+</Text>
                    <Text fontSize='32px' margin='40px 40px 40px 0'>Подойдёт ли мне профессия?</Text>
                </Layout>
            </Layout>

            <Layout justifyContent='space-between' flexWrap='wrap' alignItems='flex-start'>
                <Divider weight={1} color='black'/>
                <Layout alignItems='center'>
                    <Text fontSize='24px' margin='40px 26px 40px 0'>+</Text>
                    <Text fontSize='32px' margin='40px 40px 40px 0'>Подойдёт ли мне профессия?</Text>
                </Layout>
            </Layout>

            <Layout justifyContent='space-between' flexWrap='wrap' alignItems='flex-start'>
                <Divider weight={1} color='black'/>
                <Layout alignItems='center'>
                    <Text fontSize='24px' margin='40px 26px 40px 0'>+</Text>
                    <Text fontSize='32px' margin='40px 40px 40px 0'>Подойдёт ли мне профессия?</Text>
                </Layout>
                <Divider weight={1} color='black'/>
            </Layout>

        </Column>
    </Box>
)

export {LandingFaq}
