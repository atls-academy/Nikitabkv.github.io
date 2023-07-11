import React     from 'react'

import { Box }   from '@ui/layout'
import { Row }   from '@ui/layout'
import { Space } from '@ui/text'
import { Text }  from '@ui/text'

const Line = ({ data }) => (
  <Row overflow='hidden'>
    {data.map((item) => (
      <Box key={item.id} color='white'>
        <Text fontSize={['hugePlus', 'largest']} color='white' whiteSpace='nowrap'>
          <Space count={1} />
          {item.content}
          <Space count={1} />—
        </Text>
      </Box>
    ))}
  </Row>
)

export { Line }
