import React        from 'react'

import { Divider }  from '@ui/divider'
import { PlusIcon } from '@ui/icon'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'

const ListItem = ({ data, isLastItem }) => {
  const { text, id } = data

  return (
    <Column justifyContent='space-between' flexWrap='wrap' alignItems='flex-start'>
      <Layout display={['none', 'contents']}>
        <Divider weight={1} color='black' />
      </Layout>
      <Layout display={['contents', 'none']}>
        {id !== 1 ? <Divider weight={1} color='black' /> : ''}
      </Layout>

      <Layout flexBasis={[16, 40]} />
      <Layout
        width='100%'
        alignItems='center'
        flexDirection={['row-reverse', 'row']}
        justifyContent={['space-between', 'flex-start']}
      >
        <Text fontSize={['normal', 'increasedPlus']}>
          <PlusIcon />
        </Text>
        <Text fontSize={['increased', 'huge']} lineHeight={['140%']}>
          {text}
        </Text>
      </Layout>
      <Layout flexBasis={[16, 40]} />

      <Layout display={['none', 'contents']}>
        {isLastItem ? <Divider weight={1} color='black' /> : ''}
      </Layout>
    </Column>
  )
}

export { ListItem }
