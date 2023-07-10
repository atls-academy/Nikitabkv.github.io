import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const LandingTechnologies = () => (
  <Box background='gray' padding={['32px 0', '64px 0']} overflow='auto'>
    <Column>
      <Divider weight={1} color='white' />
      <Layout flexBasis={[36, 64]} />
      <Row overflow='auto'>
        <Text
          fontSize={['hugePlus', 'largest']}
          color='white'
          overflow='hidden'
          whiteSpace='nowrap'
        >
          <FormattedMessage id='TechnologiesFirstList' />
        </Text>
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Row>
        <Text
          fontSize={['hugePlus', 'largest']}
          color='white'
          overflow='hidden'
          whiteSpace='nowrap'
        >
          <FormattedMessage id='TechnologiesSecondList' />
        </Text>
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Divider weight={1} color='white' />
    </Column>
  </Box>
)

export { LandingTechnologies }
