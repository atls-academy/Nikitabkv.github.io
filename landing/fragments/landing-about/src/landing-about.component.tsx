import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column, Row }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

const LandingAbout = () => (
  <Box background='gray' color='white' justifyContent={['center', 'flex-start']}>
    <Box flexBasis={[0, 230]} />
    <Column flexBasis={[335, 1460]}>
      <Box flexBasis={[64, 160]} />

      <Column display={['none', 'flex']}>
        <Row flexWrap='wrap'>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='FirstTextAbout' />
          </Text>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='SecondTextAbout' />
            <Box display={['none', 'inline']} position='relative' top='6px'>
              <Space count={3} />
              <PlugIcon />
              <Space count={3} />
            </Box>
          </Text>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='ThirdTextAbout' />
          </Text>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='FourthTextAbout' />
            <Box display={['none', 'inline']} position='relative' top='6px'>
              <Space count={6} />
              <PlugIcon />
            </Box>
          </Text>
        </Row>

        <Box flexBasis={[20, 40]} />

        <Row flexWrap='wrap'>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='SecondParagraphFirstTextAbout' />
          </Text>
          <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
            <FormattedMessage id='SecondParagraphSecondTextAbout' />
            <Box display={['none', 'inline']} position='relative' top='6px'>
              <Space count={3} />
              <PlugIcon />
            </Box>
          </Text>
        </Row>
      </Column>

      <Column display={['flex', 'none']}>
        <Column>
          <Text fontSize='increased' lineHeight='high' whiteSpace='pre-line'>
            <FormattedMessage id='FirstParagraphAboutMobile' />
          </Text>
        </Column>
        <br />
        <Column>
          <Text fontSize='increased' lineHeight='high' whiteSpace='pre-line'>
            <FormattedMessage id='SecondParagraphAboutMobile' />
          </Text>
        </Column>
      </Column>
      <Box flexBasis={[64, 160]} />
    </Column>
  </Box>
)

export { LandingAbout }
