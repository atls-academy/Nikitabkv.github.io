import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { LeftArrowIcon }    from '@ui/icon'
import { PlugIcon }         from '@ui/icon'
import { RightArrowIcon }   from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const LandingSlider = () => (
  <Box
    background='gray'
    color='white'
    padding={['24px 0 32px', '160px 0']}
    alignItems='center'
    flexDirection='column'
  >
    <Column width={[335, 960]}>

      <Box justifyContent='center'>
        <Text fontSize={['atomicPlus', 'regular']}>
          <FormattedMessage id='CreationProcessTitle' />
        </Text>
      </Box>
      <Layout flexBasis={[16, 24]} />
      <Box justifyContent='center' display={['none', 'flex']}>
        <Text fontSize='mediumHuge' whiteSpace='break-spaces' textAlign='center'>
          <FormattedMessage id='CreationProcessDescription' />
        </Text>
      </Box>
      <Box justifyContent='center' display={['flex', 'none']}>
        <Text fontSize='increasedPlus' textAlign='center'>
          <FormattedMessage id='CreationProcessDescriptionMobile' />
        </Text>
      </Box>

      <Layout flexBasis={[24, 50]} />
    </Column>

    <Column width={[335, 960]} alignItems='center'>
      <Box width={['159px', '100%']} background='white' padding={['2px', '12px']}>
        <Box flexBasis={[936]} height={[323, 516]} background='black' justifyContent='center' alignItems='center'>
          <PlugIcon height='100%' width='100%' />
        </Box>
      </Box>
      <Layout flexBasis={[24, 32]} />
      <Row>
        <Box padding={['24px 16px']} alignItems='center'>
          <LeftArrowIcon />
        </Box>
        <Row padding={['16px']} justifyContent='center' alignItems='center'>
          <Text fontSize={['extra', 'extra']} lineHeight={['largest']} textAlign='center'>
            <FormattedMessage id='CreationProcessSlider' />
          </Text>
        </Row>
        <Box padding={['24px 16px']} alignItems='center'>
          <RightArrowIcon />
        </Box>
      </Row>
    </Column>
  </Box>
)

export { LandingSlider }
