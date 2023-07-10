import React               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }         from '@ui/divider'
import { PlusIcon }        from '@ui/icon'
import { Column }          from '@ui/layout'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'

const ListItem = ({ data, isLastItem }) => (
  <Column justifyContent='space-between' flexWrap='wrap' alignItems='flex-start'>
    <Layout display={['none', 'contents']}>
      <Divider weight={1} color='black' />
    </Layout>

    <Layout display={['contents', 'none']}>
      {data.id !== 1 ? <Divider weight={1} color='black' /> : ''}
    </Layout>

    <Layout flexBasis={[16, 40]} />

    <Box
      width='100%'
      alignItems='center'
      flexDirection={['row-reverse', 'row']}
      justifyContent={['space-between', 'flex-start']}
    >
      <Layout width={[16, 20]} height={[16, 20]}>
        <PlusIcon width='100%' height='100%' />
      </Layout>

      <Layout flexBasis={24} display={['none', 'flex']} />

      <Layout>
        <Text fontSize={['increased', 'huge']} lineHeight={['140%']}>
          <FormattedMessage id={`FaqQuestion${data.id}`} />
        </Text>
      </Layout>
    </Box>

    <Layout flexBasis={[16, 40]} />

    <Layout display={['none', 'contents']}>
      {isLastItem ? <Divider weight={1} color='black' /> : ''}
    </Layout>
  </Column>
)

export { ListItem }
