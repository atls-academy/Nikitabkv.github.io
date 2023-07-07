import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { EmailIcon }        from '@ui/icon'
import { GitHubIcon }       from '@ui/icon'
import { TelegramIcon }     from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

const LandingHero = () => (
  <Box color='white' background='gray' justifyContent={['center', 'flex-start']}>
    <Box flexBasis={230} display={['none', 'flex']} />
    <Layout
      flexBasis={[335, 1650]}
      justifyContent='space-between'
      flexDirection={['column', 'row']}
    >
      <Column flexBasis={[350, 1460]}>
        <Box flexBasis={[100, 412]} />

        <Column flexBasis={[119, 349]} width={['335px', '1166px']}>
          <Text fontSize={['largePlus', 'XL']} lineHeight={['high', 'medium']}>
            <FormattedMessage id='TitleFirstHero' />
          </Text>
          <Text fontSize={['largePlus', 'XL']} lineHeight={['high', 'medium']} whiteSpace='nowrap'>
            <FormattedMessage id='TitleSecondHero' />
            <Box width={[20, 28]} />
            <Text fontSize={['largePlus', 'largest']} lineHeight={['high', 'default']}>
              <FormattedMessage id='ITHero' />
            </Text>
          </Text>
        </Column>

        <Box flexBasis={[24, 48]} />
        <Divider weight={1} color='white' />
        <Box flexBasis={[24, 48]} />

        <Column flexBasis={[60, 56]} width={['335px', '640px']}>
          <Text
            fontSize={['regular', 'increased']}
            lineHeight='high'
            display={['none', 'inline-flex']}
          >
            <FormattedMessage id='SloganHero' />
          </Text>
          <Text
            fontSize={['regular', 'increased']}
            lineHeight='high'
            display={['inline-flex', 'none']}
            whiteSpace='pre-line'
          >
            <FormattedMessage id='SloganHeroMobile' />
          </Text>
        </Column>

        <Box flexBasis={[24, 50]} />
      </Column>

      <Column flexBasis={56}>
        <Box flexBasis={708} display={['none', 'flex']} />
        <Column height={[52, 200]} flexDirection={['row', 'column']} justifyContent='space-evenly'>
          <Box padding='16px'>
            <TelegramIcon width='100%' height='100%' />
          </Box>
          <Box flexBasis={16} />
          <Box padding='16px'>
            <GitHubIcon width='100%' height='100%' />
          </Box>
          <Box flexBasis={16} />
          <Box padding='16px'>
            <EmailIcon width='100%' height='100%' />
          </Box>
        </Column>
        <Box flexBasis={[20, 50]} />
      </Column>
    </Layout>
  </Box>
)

export { LandingHero }
