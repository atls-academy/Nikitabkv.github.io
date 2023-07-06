import React        from 'react'

import { LogoIcon } from '@ui/icon'
import { Box }      from '@ui/layout'
import { Row }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'

const LandingHeader = () => (
  <Box
    background='gray'
    justifyContent={['center', 'space-between']}
    padding={['20px', '32px 40px']}
  >
    <Layout width={['40px', '56px']} height={['40px', '56px']}>
      <LogoIcon width='100%' height='100%' />
    </Layout>

    <Layout flexBasis={860} alignItems='center' display={['none', 'flex']}>
      <Row width={200} justifyContent='center'>
        <Text color='white' fontSize='medium'>
          ACADEMY
        </Text>
      </Row>
      <Box flexBasis={20} />
      <Row width={200} justifyContent='center'>
        <Text color='white' fontSize='medium'>
          КУРСЫ
        </Text>
      </Row>
      <Box flexBasis={20} />
      <Row width={200} justifyContent='center'>
        <Text color='white' fontSize='medium'>
          ОБУЧЕНИЕ
        </Text>
      </Row>
      <Box flexBasis={20} />
      <Row width={200} justifyContent='center'>
        <Text color='white' fontSize='medium'>
          FAQ
        </Text>
      </Row>
    </Layout>

    <Layout alignItems='center' display={['none', 'flex']}>
      <Text color='white' fontSize='medium'>
        Курсы
      </Text>
    </Layout>
  </Box>
)

export { LandingHeader }
