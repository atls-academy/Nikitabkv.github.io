import React        from 'react'

import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'

import { ListItem } from './list-item'

const QUESTIONS_IDS = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
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
        <Layout>
          <Text fontSize={['huge', 'XL']}>Вопросы и ответы</Text>
        </Layout>
        <Column order={[`1`, `0`]} height='auto'>
          <Layout flexBasis={[44, 0]} />
          <Layout>
            <Text fontSize='increased'>Задать вопрос</Text>
          </Layout>
          <Layout flexBasis={[80, 0]} />
        </Column>
        <Column flexBasis='100%'>
          <Layout flexBasis={[0, 80]} display={['none', 'flex']} />
          {QUESTIONS_IDS.map((item) => (
            <ListItem data={item} key={item.id} isLastItem={item.id === QUESTIONS_IDS.length} />
          ))}
        </Column>
      </Layout>
      <Layout flexBasis={[0, 160]} />
    </Column>
  </Box>
)

export { LandingFaq }
