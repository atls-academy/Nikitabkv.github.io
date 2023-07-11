import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Column }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

const ListItem = ({ id, content, isLastItem }) => (
  <Column>
    <Box className='row' flexDirection={['column', 'row']} color='white'>
      <Box flexBasis={[28, 560]}>
        <Text fontSize={['18px', '24px']}>{id}</Text>
        <Layout flexBasis={[12, 32]} />
        <Text fontSize={['increasedPlus', 'mediumHuge']} whiteSpace='nowrap'>
          <FormattedMessage id={content} />
        </Text>
      </Box>
      <Layout flexBasis={[8, 640]} />
      <Box>
        <Layout flexBasis={[23, 0]} />
        <Text fontSize={['regular', 'increasedPlus']} lineHeight='high' whiteSpace='pre-line'>
          <FormattedMessage id={`ProcessItemDescription`} />
        </Text>
      </Box>
    </Box>
    {isLastItem ? '' : <Layout flexBasis={[28, 48]} />}
    {isLastItem ? '' : <Divider color='white' weight={1} />}
    {isLastItem ? '' : <Layout flexBasis={[28, 48]} />}
  </Column>
)

export { ListItem }
