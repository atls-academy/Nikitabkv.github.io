import React       from 'react'

import { Divider } from '@ui/divider'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Text }    from '@ui/text'

const ListItem = ({ data, isLastItem }) => {
  const { id, title, text } = data

  return (
    <Column>
      <Layout
        width={['335px', '1760px']}
        justifyContent='space-between'
        flexWrap='wrap'
        alignItems='center'
      >
        <Layout flexBasis={[560]}>
          <Text fontSize={['medium', 'increasedPlus']} color='white'>
            {id}
          </Text>
          <Layout flexBasis={[12, 32]} />
          <Text fontSize={['increasedPlus', 'mediumHuge']} color='white'>
            {title}
          </Text>
        </Layout>
        <Layout flexBasis={[23, 0]} />
        <Text
          width={['312px', '560px']}
          fontSize={['regular', 'increasedPlus']}
          color='white'
          lineHeight='140%'
        >
          {text}
        </Text>
      </Layout>
      {isLastItem ? '' : <Layout width='100%' flexBasis={[28, 48]} />}
      {isLastItem ? '' : <Divider weight={1} color='white' />}
      {isLastItem ? '' : <Layout width='100%' flexBasis={[28, 48]} />}
    </Column>
  )
}

export { ListItem }
