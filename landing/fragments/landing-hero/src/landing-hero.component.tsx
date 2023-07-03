import React             from 'react'

import { LogoIcon }      from '@ui/icon'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Text }          from '@ui/text'

import { About }         from './about'
import { TextComponent } from './text'

const LandingHero = () => (
  <Box background='gray'>
    <Column width='100%' alignItems='center' justifyContent='center'>
      <Layout width='100%' flexBasis={[80, 120]} justifyContent={['center', 'space-between']}>
        <Layout flexBasis={[40, 96]} alignItems='center'>
          <Layout flexBasis={[0, 40]} />
          <LogoIcon width={56} height={56} />
        </Layout>

        <Layout
          width='860px'
          alignItems='center'
          justifyContent='space-between'
          display={['none', 'flex']}
        >
          <Layout flexBasis={200} justifyContent='center'>
            <Text fontSize={['medium']} color='white'>
              ACADEMY
            </Text>
          </Layout>
          <Layout flexBasis={200} justifyContent='center'>
            <Text fontSize={['medium']} color='white'>
              КУРСЫ
            </Text>
          </Layout>
          <Layout flexBasis={200} justifyContent='center'>
            <Text fontSize={['medium']} color='white'>
              ОБУЧЕНИЕ
            </Text>
          </Layout>
          <Layout flexBasis={200} justifyContent='center'>
            <Text fontSize={['medium']} color='white'>
              FAQ
            </Text>
          </Layout>
        </Layout>

        <Layout flexBasis={94} alignItems='center' display={['none', 'flex']}>
          <Text color='white' fontSize='18px'>
            Курсы
          </Text>
        </Layout>
      </Layout>
      <Layout width='100%'>
        <Layout flexBasis={[20, 230]} />
        <Column>
          <Layout flexBasis={[40, 412]} />
          <About />
          <Layout flexBasis={[100, 210]} />
          <TextComponent />
          <Layout flexBasis={[64, 160]} />
        </Column>
      </Layout>
    </Column>
  </Box>
)

export { LandingHero }
