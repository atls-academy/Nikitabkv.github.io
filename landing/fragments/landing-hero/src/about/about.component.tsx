import React       from 'react'

import { Divider } from '@ui/divider'
import { Box }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Text }    from '@ui/text'

import { Social }  from './social'

const About = () => (
  <Box
    width={['335px', '1650px']}
    marginLeft={['0', '190px']}
    justifyContent='space-between'
    flexDirection={['column', 'row']}
  >
    <Column width={['335px', '1460px']} height={['auto', '498px']} marginTop={['20px', '0']}>
      <Text color='white' fontSize={['largePlus', 'XL']} lineHeight={['140%', '120%']}>
        Обучаем <br /> профессионалов{' '}
      </Text>
      <Text
        color='white'
        fontSize={['largePlus', 'XL']}
        paddingBottom={['24px', '48px']}
        lineHeight={['140%', '120%']}
      >
        для революции в IT
      </Text>
      <Divider weight={1} color='white' />
      <Text
        color='white'
        fontSize={['regular', 'increased']}
        paddingTop={['24px', '48px']}
        lineHeight='140%'
      >
        Мы не учим программированию и дизайну, мы учим мышлению, <br />
        способному реализовывывать невозможные идеи.
      </Text>
    </Column>
    <Social />
  </Box>
)

export { About }
