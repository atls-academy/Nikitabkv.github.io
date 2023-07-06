import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { AboutCourses }     from './about-courses'

const LandingCourses = () => (
  <Box background='white' justifyContent={['center', 'normal']}>
    <Box height='100%' flexBasis={[0, 230]} display={['none', 'flex']} />
    <Column flexBasis={[335, 1610]}>
      <Box flexBasis={[64, 160]} />
      <Row flexBasis={[96, 115]} justifyContent={['', 'space-between']} alignItems={['', 'center']}>
        <Text fontSize={['mediumHuge', 'XL']}>
          <FormattedMessage id='TitleCourses' />
        </Text>
        <Text fontSize={['', 'increased']} display={['none', 'inline-flex']}>
          <FormattedMessage id='SubTitleCourses' />
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
        <Text fontSize={['increased', 'huge']} width={['335px', '710px']} lineHeight='high'>
          <FormattedMessage id='AboutAtlantisCourses' />
        </Text>
        <Box flexBasis={[20, 0]} display={['flex', 'none']} />
        <Text fontSize={['increased', 'huge']} width={['335px', '559px']} lineHeight='high'>
          <FormattedMessage id='AboutEfficiencyCourses' />
        </Text>
      </Row>
      <Box flexBasis={[56, 80]} />
      <AboutCourses />
      <Box flexBasis={[12, 0]} display={['flex', 'none']} />
      <Text fontSize='extra' display={['inline-flex', 'none']}>
        <FormattedMessage id='SubTitleCourses' />
      </Text>
      <Box flexBasis={[64, 160]} />
    </Column>
  </Box>
)

export { LandingCourses }
