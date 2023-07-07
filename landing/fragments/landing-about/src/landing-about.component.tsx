import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

const LandingAbout = () => (
  <Box background='gray' color='white' justifyContent={['center', 'flex-start']}>
    <Layout flexBasis={[0, 230]} />
    <Column flexBasis={[335, 1460]}>
      <Layout flexBasis={[64, 160]} />

      <Column display={['none', 'flex']}>
        <Row flexWrap='wrap' alignItems='center'>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='FirstTextAbout' />
          </Text>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='SecondTextAbout' />
          </Text>
          <Space count={9} />
          <PlugIcon width={40} height={40} />
          <Space count={9} />
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='ThirdTextAbout' />
          </Text>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='FourthTextAbout' />
          </Text>
          <Space count={18} />
          <PlugIcon width={40} height={40} />
        </Row>

        <Layout flexBasis={[20, 40]} />

        <Row flexWrap='wrap' alignItems='center'>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='SecondParagraphFirstTextAbout' />
          </Text>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='SecondParagraphSecondTextAbout' />
          </Text>
          <Space count={9} />
          <PlugIcon width={40} height={40} />
        </Row>
      </Column>

      <Column display={['flex', 'none']}>
        <Text fontSize='increased' lineHeight='high' whiteSpace='pre-line'>
          <FormattedMessage id='FirstParagraphAboutMobile' />
        </Text>
        <br />
        <Text fontSize='increased' lineHeight='high' whiteSpace='pre-line'>
          <FormattedMessage id='SecondParagraphAboutMobile' />
        </Text>
      </Column>
      <Layout flexBasis={[64, 160]} />
    </Column>
  </Box>
)

export { LandingAbout }
