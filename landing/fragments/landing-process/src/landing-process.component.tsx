import React from "react";

import {Box, Layout, Column} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'

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
    <Box background='#666666' width='100%' height='2746px' justifyContent='center' flexDirection='column'>
        <Column>
            <Column width='1760px' height='728px' justifyContent='center' marginTop='160px' alignSelf='center'>
                <Box position='absolute' width='400px' height='400px' background='rgba(66,66,66,0.95)' alignSelf='center'/>
                {LIST_DATA.map((item) => <ListItem data={item} isLastItem={LIST_DATA.length === item.id}/> )}
            </Column>
        </Column>
        <Column height='482px' marginTop='160px'>
            <Divider weight={1} color='white'/>
            <Layout paddingTop='64px' paddingBottom='64px'>
                {/*{*/}
                {/*    TEXT_ITEMS_FIRST.map((item) => (*/}
                {/*        <>*/}
                {/*            <Text fontSize='80px' color='white'>*/}
                {/*                {item}*/}
                {/*            </Text>*/}
                {/*        </>*/}
                {/*    ))*/}
                {/*}*/}
            </Layout>
            <Divider weight={1} color='white'/>
        </Column>
        <Column alignItems='center' justifyContent='center'>
            <Text color='white' fontSize='14px'>ПРОЦЕСС СОЗДАНИЯ</Text>
            <Text color='white' fontSize='40px' textAlign='center'>Любой процесс перестаёт быть сложным, <br/> когда знаешь как он протекает</Text>
            <Box width='960px' height='540px' color='rgba(66,66,66,0.95)'></Box>
        </Column>
    </Box>
)

export {LandingProcess}
