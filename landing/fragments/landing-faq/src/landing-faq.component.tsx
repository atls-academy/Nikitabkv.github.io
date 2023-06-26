import React from "react";

import {Box, Layout, Column} from '@ui/layout'
import {Text} from '@ui/text'
import {ListItem} from "./list-item";

const QUESTIONS_DATA = [
    {
        id: 1,
        text: 'Подойдёт ли мне профессия?',
        openText: 'test'
    },
    {
        id: 2,
        text: 'Подойдёт ли мне профессия?',
        openText: 'test'
    },
    {
        id: 3,
        text: 'Подойдёт ли мне профессия?',
        openText: 'test'
    },
    {
        id: 4,
        text: 'Подойдёт ли мне профессия?',
        openText: 'test'
    },
    {
        id: 5,
        text: 'Подойдёт ли мне профессия?',
        openText: 'test'
    },
    {
        id: 6,
        text: 'Подойдёт ли мне профессия?',
        openText: 'test'
    }
]

const LandingFaq = () => (
    <Box background='white' justifyContent='center'>
        <Layout width={['343px', '1610px']} height={['483px', 'auto']} justifyContent='space-between' alignItems='center' marginLeft={['0', '150px']} marginTop={['80px', '160px']} marginBottom={['80px', '80px']} flexWrap='wrap'>
            <Text fontSize={['huge', 'XL']}>Вопросы и ответы</Text>
            <Layout order={[`1`, `0`]}>
                <Text fontSize='increased'>Задать вопрос</Text>
            </Layout>
            <Column flexBasis='100%' height={['333px','757px']} marginTop={['30px', '80px']} marginBottom='60px'>
                {QUESTIONS_DATA.map((item) => <ListItem data={item} key={item.id} isLastItem={item.id === QUESTIONS_DATA.length}/>)}
            </Column>
        </Layout>
    </Box>
)

export {LandingFaq}