import React from "react";

import {Box, Column, Layout} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'
import {PlugIcon} from '@ui/icon'

const LandingCourses = () => (
    <Box margin={['64px 20px', '0 0 0 170px']} background='#FFFFFF' height={['auto', '1480px']} justifyContent='center' alignItems={['flex-start', 'center']}>
        <Column width={['335px', '1630px']} height={['auto', '1225px']}>
            <Layout marginBottom={['40px', '80px']} alignItems='center' justifyContent='space-between'>
                <Text width={['336px', 'auto']} fontSize={['40px', '96px']}>Курсы и материалы</Text>
                <Text fontSize='20px' display={['none', 'inline-flex']}>Все материалы</Text>
            </Layout>

            <Divider weight={1} color='#000000'/>

            <Layout marginBottom={['40px', '80px']} marginTop={['40px', '80px']} alignItems='center' justifyContent='space-between' flexDirection={['column', 'row']}>
                <Text width={['335px', '710px']} fontSize={['20px', '32px']}>Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные возможности в применении навыков. </Text>
                <Text width={['335px', '559px']} fontSize={['20px', '32px']} marginTop={['20px', '0px']}>Эффективность обучения заметно вырастает благодаря практики на существующих проектах.</Text>
            </Layout>

            <Layout flexDirection={['column-reverse', 'row']} justifyContent={'space-between'}>
                <Column height={['474px', 'auto']}>
                    <Text fontSize={['24px', '40px']} marginTop='40px' marginLeft={['0px', '40px']} marginBottom={['12px', '16px']}>Frontend Engineer</Text>
                    <Text fontSize={['16px', '20px']} width={['350px', '694px']} marginLeft={['0px', '40px']} marginBottom={['52px', '120px']}>
                        Вы изучите фундаментальные знания в ИТ и прокачаетесь
                        в направлении программирования. Получите востребованную профессию
                        и возможность открыть бизнес в сфере информационных технологий</Text>
                    <Text fontSize={['24px', '40px']} marginLeft={['0px', '40px']} marginBottom={['12px', '16px']}>Основы разработки</Text>
                    <Text fontSize={['16px', '20px']} width={['350px', '694px']} marginLeft={['0px', '40px']} marginBottom={['36px', '120px']}>
                        Вы изучите фундаментальные знания в ИТ и прокачаетесь
                        в направлении программирования. Получите востребованную профессию
                        и возможность открыть бизнес в сфере информационных технологий
                    </Text>
                    <Layout width={['350px', '1160px']} height={['46px', '156px']} padding={['0', '0px 40px']} marginBottom={['36px', '0']}>
                        <Text width={['228px', '496px']} fontSize={['20px', '40px']}>Как использовать<br/> библиотеки</Text>
                        <Text width={['228px', '496px']} fontSize={['20px', '40px']}>Дизайн, Figma,<br/> Математика</Text>
                    </Layout>
                </Column>

                <Column width={['335px', '410px']} height={['192px', '100%']} padding={['16px', '32px 32px 16px 32px']} flexDirection={['row', 'column']} flexWrap={['wrap', 'nowrap']} alignItems={['center', 'flex-start']}>
                    <Text fontSize={['14px', '16px']}>
                        Вы изучите фундаментальные знания в IT и
                        прокачаете нужные для сферы навыки. Мы
                        не собираем большие группы, что позволяет
                        курировать работу каждого студента.
                    </Text>

                    <Box order={['2', '0']} alignSelf={['flex-start', 'center']} width={['64px', '240px']} height={['64px', '240px']} margin={['0', '74px 0px 62px 0px']} background='rgba(66,66,66,0.95)'>
                        <PlugIcon width='100%' height='100%' />
                    </Box>

                    <Text fontSize={['56px', '64px']} paddingBottom={['0', '8px']}>5</Text>
                    <Text fontSize={['12px', '14px']} width={['131px', '188px']} marginLeft={['12px', '0']} marginRight={['auto', '0']}>студентов обучаются в одной практической группе</Text>
                    <Text fontSize='20px' marginTop='68px' display={['none', 'inline-flex']}>Процесс поступления</Text>
                </Column>
            </Layout>


            <Text fontSize='16pxpx' display={['inline-flex', 'none']}>Все материалы</Text>
        </Column>
    </Box>
)

export {LandingCourses}


// <Box marginLeft='170px' background='#FFFFFF' height='1625px' justifyContent='center' alignItems='center'>
//     <Column width='1630px' height='1225px'>
//         <Layout marginBottom='80px' alignItems='center' justifyContent='space-between'>
//             <Text fontSize={['40px', '96px']}>Курсы и материалы</Text>
//             <Text fontSize='20px' display={['none', 'inline-flex']}>Все материалы</Text>
//         </Layout>
//
//         <Divider weight={1} color='#000000'/>
//
//         <Layout marginTop='80px' marginBottom='80px' alignItems='center' justifyContent='space-between'>
//             <Text width='710px' fontSize='32px'>Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные возможности в применении навыков. </Text>
//             <Text width='559px' fontSize='32px'>Эффективность обучения заметно вырастает благодаря практики на существующих проектах.</Text>
//         </Layout>
//
//         <Layout>
//             <Column>
//                 <Text fontSize='40px' marginTop='40px' marginLeft='40px' marginBottom='16px'>Frontend Engineer</Text>
//                 <Text fontSize='20px' width='694px' marginLeft='40px' marginBottom='120px'>
//                     Вы изучите фундаментальные знания в ИТ и прокачаетесь
//                     в направлении программирования. Получите востребованную профессию
//                     и возможность открыть бизнес в сфере информационных технологий</Text>
//                 <Text fontSize='40px' marginLeft='40px' marginBottom='16px'>Основы разработки</Text>
//                 <Text fontSize='20px' width='694px' marginLeft='40px' marginBottom='120px'>
//                     Вы изучите фундаментальные знания в ИТ и прокачаетесь
//                     в направлении программирования. Получите востребованную профессию
//                     и возможность открыть бизнес в сфере информационных технологий
//                 </Text>
//                 <Layout width='1160px' height='156px' padding='32px'>
//                     <Text width='496px' fontSize='40px'>Как использовать библиотеки</Text>
//                     <Text width='496px' fontSize='40px'>Как использовать библиотеки</Text>
//                 </Layout>
//             </Column>
//             <Column width='410px' padding='32px 32px 16px 32px'>
//                 <Text fontSize='16px'>
//                     Вы изучите фундаментальные знания в IT и
//                     прокачаете нужные для сферы навыки. Мы
//                     не собираем большие группы, что позволяет
//                     курировать работу каждого студента.
//                 </Text>
//                 <Box alignSelf='center' width='240px' height='240px' margin='70px 0px 66px 0px' background='rgba(66,66,66,0.95)'/>
//                 <Text fontSize='64px'>5</Text>
//                 <Text fontSize='14px' width='188px'>студентов обучаются в одной практической группе</Text>
//                 <Text fontSize='20px' marginTop='68px'>Процесс поступления</Text>
//             </Column>
//         </Layout>
//
//
//         <Text fontSize='20px' display={['inline-flex', 'none']}>Все материалы</Text>
//     </Column>
// </Box>