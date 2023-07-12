import React        from 'react'

import { PlugIcon } from '@ui/icon'
import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'

import { ListItem } from './list-item'

const ITEMS_ID = [
  {
    id: 1,
    content: 'landing_process.team_integration',
  },
  {
    id: 2,
    content: 'landing_process.create_environment',
  },
  {
    id: 3,
    content: 'landing_process.exploring_technology',
  },
  {
    id: 4,
    content: 'landing_process.practice_learned',
  },
  {
    id: 5,
    content: 'landing_process.project_integration',
  },
]

const LandingProcess = () => (
  <Box background='gray' justifyContent={['center', 'center']}>
    <Column>
      <Layout flexBasis={[64, 160]} />
      <Column flexBasis={[20, 728]} width={[335, 1760]}>
        {ITEMS_ID.map((item) => (
          <ListItem
            id={item.id}
            content={item.content}
            isLastItem={ITEMS_ID.length === item.id}
            key={item.id}
          />
        ))}
        <Box
          position='absolute'
          width={400}
          height={728}
          alignSelf='center'
          display={['none', 'flex']}
        >
          <PlugIcon width='100%' height='100%' />
        </Box>
      </Column>
      <Layout flexBasis={[56, 160]} />
    </Column>
  </Box>
)

export { LandingProcess }
