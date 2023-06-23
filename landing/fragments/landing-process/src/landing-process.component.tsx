import React from "react";

import {Box, Layout, Column} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'
import {PlugIcon} from '@ui/icon'

import {ListItem} from './list-item'

const LIST_DATA = [
    {
        id: 1,
        title: 'Интеграция в команду',
        text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.'
    },
    {
        id: 2,
        title: 'Создание среды',
        text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.'
    },
    {
        id: 3,
        title: 'Изучение технологий',
        text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.'
    },
    {
        id: 4,
        title: 'Практика изученого',
        text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.'
    },
    {
        id: 5,
        title: 'Интеграция в проект',
        text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.'
    }
]

const TEXT_ITEMS_FIRST = ['JAVASCRIPT', 'HTML', 'CSS', 'SASS', 'VANILLA JS', 'JADE', 'JAVASCRIPT']
const TEXT_ITEMS_SECOND = ['ATOM', 'FIGMA', 'GITHUB', 'ATOM', 'FIGMA', 'GITHUB', 'ATOM', 'FIGMA', 'GITHUB']

const LandingProcess = () => (
    <Box background='#666666' width='100%' height={['1490px', '2648px']} justifyContent='center' flexDirection='column' alignItems='center'>
        <Column height='728px' marginTop={['64px', '120px']} marginBottom={['32px', '224px']}>
            <Column width={['375px', '1760px']} justifyContent='center' alignSelf='center' alignItems='center'>
                <Box position='absolute' width='400px' height='400px' background='rgba(66,66,66,0.95)' alignSelf='center' display={['none', 'flex']}>
                    <PlugIcon width={'100%'} height={'100%'}/>
                </Box>
                {LIST_DATA.map((item) => <ListItem data={item} isLastItem={LIST_DATA.length === item.id}/> )}
            </Column>
        </Column>

        <Column width='100%' height={['auto', '482px']}>
            <Divider weight={1} color='white'/>
            <Layout marginTop={['36px', '64px']} marginBottom={['36px', '64px']}>
                {TEXT_ITEMS_FIRST.map((item) => (
                        <>
                            <Text fontSize={['46px', '80px']} color='white' overflow='hidden' whiteSpace={'nowrap'}>
                                {item}
                            </Text>
                        </>
                    ))}
            </Layout>
            <Layout marginBottom={['36px', '64px']}>
                {TEXT_ITEMS_SECOND.map((item) => (
                    <>
                        <Text fontSize={['46px', '80px']} color='white' overflow='hidden'>
                            {item}
                        </Text>
                    </>
                ))}
            </Layout>
            <Divider weight={1} color='white'/>
        </Column>

        <Column width={['335px', '960px']} alignItems='center' justifyContent='flex-start' marginTop={['56px', '224px']}>
            <Text color='white' fontSize={['11px', '14px']}>ПРОЦЕСС СОЗДАНИЯ</Text>
            <Text height='92px' color='white' fontSize={['24px', '40px']} textAlign='center' marginTop={['16px', '24px']} marginBottom={['24px', '50px']}>Любой процесс перестаёт быть сложным, когда знаешь как он протекает</Text>
            <Box width={['155px', '960px']} height={['323px', '633px']} background='rgba(66,66,66,0.95)'>
                тут должен быть слайдер
            </Box>
        </Column>
    </Box>
)

export {LandingProcess}

/// НАДО ДОБАВИТЬ KEY
