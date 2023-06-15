import React from "react";

import {Box, Column, Layout} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'

const LandingCourses = () => (
    <Box marginLeft={'170px'} background={'#FFFFFF'} height='1625px' justifyContent={'center'} alignItems={'center'}>
        <Column width={'1630px'} height='1225px'>
            <Layout marginBottom={'80px'} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'96px'}>Курсы и материалы</Text>
                <Text fontSize={'20px'}>Все материалы</Text>
            </Layout>
            <Divider weight={1} color='#000000'/>
            <Layout marginTop={'80px'} marginBottom={'80px'} alignItems={'center'} justifyContent={'space-between'}>
                <Text width={'710px'} fontSize={'32px'}>Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные возможности в применении навыков. </Text>
                <Text width={'559px'} fontSize={'32px'}>Эффективность обучения заметно вырастает благодаря практики на существующих проектах.</Text>
            </Layout>
            <Layout>
                <Column>
                    <Text fontSize={'40px'} marginTop={'40px'} marginLeft={'40px'} marginBottom={'16px'}>Frontend Engineer</Text>
                    <Text fontSize={'20px'} width={'694px'} marginLeft={'40px'} marginBottom={'120px'}>
                        Вы изучите фундаментальные знания в ИТ и прокачаетесь
                        в направлении программирования. Получите востребованную профессию
                        и возможность открыть бизнес в сфере информационных технологий</Text>
                    <Text fontSize={'40px'} marginLeft={'40px'} marginBottom={'16px'}>Основы разработки</Text>
                    <Text fontSize={'20px'} width={'694px'} marginLeft={'40px'} marginBottom={'120px'}>
                        Вы изучите фундаментальные знания в ИТ и прокачаетесь
                        в направлении программирования. Получите востребованную профессию
                        и возможность открыть бизнес в сфере информационных технологий
                    </Text>
                    <Layout width={'1160px'} height={'156px'} padding={'32px'}>
                        <Text width={'496px'} fontSize={'40px'}>Как использовать библиотеки</Text>
                        <Text width={'496px'} fontSize={'40px'}>Как использовать библиотеки</Text>
                    </Layout>
                </Column>
                <Column width={'410px'} padding={'32px 32px 16px 32px'}>
                    <Text fontSize={'16px'}>
                        Вы изучите фундаментальные знания в IT и
                        прокачаете нужные для сферы навыки. Мы
                        не собираем большие группы, что позволяет
                        курировать работу каждого студента.
                    </Text>
                    <Box alignSelf={'center'} width={'240px'} height={'240px'} margin={'70px 0px 66px 0px'} background={'rgba(66,66,66,0.95)'}/>
                    <Text fontSize={'64px'}>5</Text>
                    <Text fontSize={'14px'} width={'188px'}>студентов обучаются в одной практической группе</Text>
                    <Text fontSize={'20px'} marginTop={'68px'}>Процесс поступления</Text>
                </Column>
            </Layout>
        </Column>
    </Box>
)

export {LandingCourses}
