import React from "react";

import {Box, Layout, Column} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'
import {PlugIcon, LeftArrowIcon, RightArrowIcon} from '@ui/icon'

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

const LandingProcess = () => (
    <Box background='gray' width='100%' height={['1587px', '2648px']} justifyContent='center' flexDirection='column' alignItems='center'>
        <Column height='728px' marginTop={['64px', '120px']} marginBottom={['32px', '224px']}>
            <Column width={['375px', '1760px']} justifyContent='center' alignSelf='center' alignItems='center'>
                <Box position='absolute' width='400px' height='400px' background='plug' alignSelf='center' display={['none', 'flex']}>
                    <PlugIcon width='100%' height='100%'/>
                </Box>
                {LIST_DATA.map((item) => <ListItem data={item} isLastItem={LIST_DATA.length === item.id}/> )}
            </Column>
        </Column>
        <Column width='100%' height={['auto', '482px']}>
            <Divider weight={1} color='white'/>
            <Layout marginTop={['36px', '64px']} marginBottom={['36px', '64px']}>
                <Text fontSize={['hugePlus', 'largest']} color='white' overflow='hidden' whiteSpace='nowrap'>
                    JAVASCRIPT — HTML — CSS — SASS — VANILLA JS — JADE — JAVASCRIPT —
                </Text>
            </Layout>
            <Layout marginBottom={['36px', '64px']}>
                <Text fontSize={['hugePlus', 'largest']} color='white' overflow='hidden' whiteSpace='nowrap'>
                    ATOM — FIGMA — GITHUB — ATOM — FIGMA — GITHUB — ATOM — FIGMA — GITHUB —
                </Text>
            </Layout>
            <Divider weight={1} color='white'/>
        </Column>

        <Column width={['335px', '960px']} alignItems='center' justifyContent='flex-start' marginTop={['56px', '224px']}>
            <Text color='white' fontSize={['11px', 'regular']}>ПРОЦЕСС СОЗДАНИЯ</Text>
            <Text height='92px' width={['auto', '890px']} color='white' fontSize={['increasedPlus', 'mediumHuge']} textAlign='center' marginTop={['16px', '24px']} marginBottom={['24px', '50px']}>Любой процесс перестаёт быть сложным, когда знаешь как он протекает</Text>
            <Box width={['auto', '960px']} height={['400px', '633px']}>
                <Column justifyContent='space-between' alignItems='center'>
                <Box width={['155px', '960px']} height={['323px', '516px']} padding='12px' background={['', 'white']} border={['2px', '']}>
                    <Box width={['155px', '936px']} background={['', 'black']} overflow='hidden' alignItems='center' flexDirection='column'>
                        <Text color='white'>Title and toolbar</Text>
                        <PlugIcon width='720px' height='540px'/>
                    </Box>
                </Box>
                <Layout width={['335px', '960px']} justifyContent='space-between' alignItems='center'>
                    <LeftArrowIcon/>
                    <Text color='white' fontSize={['normal', 'extra']} width={['123px', 'auto']} textAlign='center'>Формирование системы базовых фрагментов и компонентов</Text>
                    <RightArrowIcon/>
                </Layout>
                </Column>
            </Box>
        </Column>
    </Box>
)

export {LandingProcess}

/// НАДО ДОБАВИТЬ KEY
