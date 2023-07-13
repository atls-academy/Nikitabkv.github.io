import React       from 'react'

import { Divider } from '@ui/divider'
import { Box }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'

import { Line }    from './line'

const DevLine = [
  { id: 1, content: 'JAVASCRIPT' },
  { id: 2, content: 'HTML' },
  { id: 3, content: 'CSS' },
  { id: 4, content: 'SASS' },
  { id: 5, content: 'VANILLA JS' },
  { id: 6, content: 'JADE' },
  { id: 7, content: 'JAVASCRIPT' },
  { id: 8, content: 'HTML' },
  { id: 9, content: 'CSS' },
]
const WorkspacesLine = [
  { id: 1, content: 'GITHUB' },
  { id: 2, content: 'ATOM' },
  { id: 3, content: 'FIGMA' },
  { id: 4, content: 'GITHUB' },
  { id: 5, content: 'ATOM' },
  { id: 6, content: 'FIGMA' },
  { id: 7, content: 'GITHUB' },
  { id: 8, content: 'ATOM' },
  { id: 9, content: 'FIGMA' },
]
const LandingRunline = () => (
  <Box background='gray' padding={['32px 0', '64px 0']}>
    <Column width='100vw'>
      <Divider weight={1} color='white' />
      <Layout flexBasis={[36, 64]} />
      <Line data={DevLine} />
      <Layout flexBasis={[36, 64]} />
      <Line data={WorkspacesLine} />
      <Layout flexBasis={[36, 64]} />
      <Divider weight={1} color='white' />
    </Column>
  </Box>
)

export { LandingRunline }
