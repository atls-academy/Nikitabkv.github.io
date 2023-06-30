import React       from 'react'

import { Divider } from '@ui/divider'
import { Box }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }    from '@ui/text'

import { Social }  from './social'

const About = () => (
  <Box
    width={['335px', '1650px']}
    justifyContent='space-between'
    flexDirection={['column', 'row']}
  >
    <Column width={['335px', '1460px']}>
      <Text color='white' fontSize={['largePlus', 'XL']} lineHeight={['140%', '120%']}>
        Обучаем <br /> профессионалов{' '}
      </Text>
      <Text
        color='white'
        fontSize={['largePlus', 'XL']}
        lineHeight={['140%', '120%']}
      >
        для революции в IT
      </Text>
      <Layout flexBasis={[24, 48]}/>
      <Divider weight={1} color='white' />
      <Layout flexBasis={[24, 48]}/>
      <Text
        color='white'
        fontSize={['regular', 'increased']}
        lineHeight='140%'
      >
        Мы не учим программированию и дизайну, мы учим мышлению, <br />
        способному реализовывывать невозможные идеи.
      </Text>
    </Column>
    <Layout flexBasis={[40, 0]}/>
    <Social />
  </Box>
)

export { About }
