import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { AboutCourses }     from './about-courses'

const LandingCourses = () => (
  <Layout background='white' justifyContent={['center', 'normal']}>
    <Box height='100%' flexBasis={[0, 230]} display={['none', 'flex']} />
    <Column flexBasis={[335, 1610]}>
      <Box flexBasis={[64, 160]} />
      <Row flexBasis={[96, 115]} justifyContent={['', 'space-between']} alignItems={['', 'center']}>
        <Text fontSize={['mediumHuge', 'XL']}>
          <FormattedMessage id='Courses' defaultMessage='Курсы и материалы' />
        </Text>
        <Text fontSize={['', 'increased']} display={['none', 'inline-flex']}>
          <FormattedMessage id='AllContent' defaultMessage='Все материалы' />
        </Text>
      </Row>
      <Box flexBasis={[40, 80]} />
      <Divider color='black' weight={1} />
      <Box flexBasis={[40, 80]} />
      <Row
        flexBasis={[216, 135]}
        justifyContent={['', 'space-between']}
        flexDirection={['column', 'row']}
      >
        <Text fontSize={['increased', 'huge']} width={['335px', '710px']} lineHeight='140%'>
          <FormattedMessage
            id='AboutAtlantisCourses'
            defaultMessage='Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные возможности в применении навыков.'
          />
        </Text>
        <Box flexBasis={[20, 0]} display={['flex', 'none']} />
        <Text fontSize={['increased', 'huge']} width={['335px', '559px']} lineHeight='140%'>
          <FormattedMessage
            id='AboutEfficiencyCourses'
            defaultMessage='Эффективность обучения заметно вырастает благодаря практике на существующих проектах.'
          />
        </Text>
      </Row>
      <Box flexBasis={[56, 80]} />
      <AboutCourses />
      <Box flexBasis={[12, 0]} display={['flex', 'none']} />
      <Text fontSize={['', 'increased']} display={['inline-flex', 'none']}>
        <FormattedMessage id='AllContentMobile' defaultMessage='Все материалы' />
      </Text>
      <Box flexBasis={[64, 160]} />
    </Column>
  </Layout>
)

export { LandingCourses }
