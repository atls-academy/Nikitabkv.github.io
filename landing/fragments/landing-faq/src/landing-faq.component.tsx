import React        from 'react'

import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'

import { ListItem } from './list-item'

const QUESTIONS_DATA = [
  {
    id: 1,
    text: 'Подойдёт ли мне профессия?',
    openText: 'test',
  },
  {
    id: 2,
    text: 'Подойдёт ли мне профессия?',
    openText: 'test',
  },
  {
    id: 3,
    text: 'Подойдёт ли мне профессия?',
    openText: 'test',
  },
  {
    id: 4,
    text: 'Подойдёт ли мне профессия?',
    openText: 'test',
  },
  {
    id: 5,
    text: 'Подойдёт ли мне профессия?',
    openText: 'test',
  },
  {
    id: 6,
    text: 'Подойдёт ли мне профессия?',
    openText: 'test',
  },
]

const LandingFaq = () => (
  <Box background='white' justifyContent={['center', 'flex-start']}>
    <Layout flexBasis={[0, 230]} display={['none', 'flex']} />
    <Column>
      <Layout flexBasis={[80, 160]} />
      <Layout
        width={['343px', '1610px']}
        flexBasis={['483px', 'auto']}
        justifyContent='space-between'
        alignItems='center'
        flexWrap='wrap'
      >
        <Text fontSize={['huge', 'XL']}>Вопросы и ответы</Text>
        <Column order={[`1`, `0`]} height='auto'>
          <Layout flexBasis={[44, 0]} />
          <Text fontSize='increased'>Задать вопрос</Text>
          <Layout flexBasis={[80, 0]} />
        </Column>
        <Column flexBasis='100%'>
          <Layout flexBasis={[0, 80]} display={['none', 'flex']} />
          {QUESTIONS_DATA.map((item) => (
            <ListItem data={item} key={item.id} isLastItem={item.id === QUESTIONS_DATA.length} />
          ))}
        </Column>
      </Layout>
      <Layout flexBasis={[0, 160]} />
    </Column>
  </Box>
)

export { LandingFaq }
