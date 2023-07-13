import React        from 'react'

import { LogoIcon } from '@ui/icon'
import { Box }      from '@ui/layout'
import { Row }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'

const LandingHeader = () => (
  <Box
    background='gray'
    justifyContent={['center', 'space-between']}
    padding={['20px', '32px 40px']}
  >
    <Layout width={['40px', '56px']} height={['40px', '56px']}>
      <NextLink path=''>
        <LogoIcon width='100%' height='100%' />
      </NextLink>
    </Layout>

    <Layout flexBasis={860} alignItems='center' display={['none', 'flex']}>
      <Row width={200} justifyContent='center'>
        <NextLink path=''>
          <Text color='white' fontSize='medium'>
            ACADEMY
          </Text>
        </NextLink>
      </Row>
      <Layout flexBasis={20} />
      <Row width={200} justifyContent='center'>
        <NextLink path='#courses'>
          <Text color='white' fontSize='medium'>
            КУРСЫ
          </Text>
        </NextLink>
      </Row>
      <Layout flexBasis={20} />
      <Row width={200} justifyContent='center'>
        <NextLink path='#process'>
          <Text color='white' fontSize='medium'>
            ОБУЧЕНИЕ
          </Text>
        </NextLink>
      </Row>
      <Layout flexBasis={20} />
      <Row width={200} justifyContent='center'>
        <NextLink path='#faq'>
          <Text color='white' fontSize='medium'>
            FAQ
          </Text>
        </NextLink>
      </Row>
    </Layout>

    <Layout alignItems='center' display={['none', 'flex']}>
      <NextLink path='#courses'>
        <Text color='white' fontSize='medium'>
          Курсы
        </Text>
      </NextLink>
    </Layout>
  </Box>
)

export { LandingHeader }
