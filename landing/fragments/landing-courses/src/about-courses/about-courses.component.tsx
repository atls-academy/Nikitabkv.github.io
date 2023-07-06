import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const AboutCourses = () => (
  <Box
    flexBasis={[650, 734]}
    width={['303px', '100%']}
    flexDirection={['column-reverse', 'row']}
    alignSelf='center'
  >
    <Box flexBasis={[40]} display={['none', 'flex']} />
    <Column overflowX='hidden'>
      <Box flexBasis={[76, 40]} />

      <Column flexBasis={[129, 40]}>
        <Text fontSize={['increasedPlus', 'mediumHuge']}>
          <FormattedMessage id='FrontendTitleCourses' />
        </Text>
        <Box flexBasis={[12, 16]} />
        <Text
          width='694px'
          fontSize='increased'
          lineHeight='high'
          display={['none', 'inline-flex']}
        >
          <FormattedMessage id='FrontendDescriptionCourses' />
        </Text>
        <Text
          width='335px'
          fontSize='regular'
          lineHeight='largest'
          display={['inline-flex', 'none']}
        >
          <FormattedMessage id='FrontendDescriptionCoursesMobile' />
        </Text>
      </Column>

      <Box flexBasis={[52, 120]} />

      <Column flexBasis={[129, 40]}>
        <Text fontSize={['increasedPlus', 'mediumHuge']}>
          <FormattedMessage id='DevelopmentBasicsTitleCourses' />
        </Text>
        <Box flexBasis={[12, 16]} />
        <Text
          width='694px'
          fontSize='increased'
          lineHeight='high'
          display={['none', 'inline-flex']}
        >
          <FormattedMessage id='DevelopmentBasicsDescriptionCourses' />
        </Text>
        <Text
          width='335px'
          fontSize='regular'
          lineHeight='largest'
          display={['inline-flex', 'none']}
        >
          <FormattedMessage id='DevelopmentBasicsDescriptionCoursesMobile' />
        </Text>
      </Column>

      <Box flexBasis={[36, 112]} />

      <Row width={['375px', '1160px']} flexBasis={[46, 156]}>
        <Text width={['228px', '496px']} fontSize={['increased', 'mediumHuge']}>
          <FormattedMessage id='HowUseCourses' /> <br />
          <FormattedMessage id='LibrariesCourses' />
        </Text>
        <Text width={['228px', '496px']} fontSize={['increased', 'mediumHuge']}>
          <FormattedMessage id='DesignFigmaCourses' /> <br />
          <FormattedMessage id='MathCourses' />
        </Text>
      </Row>
    </Column>
    <Box flexBasis={[40]} display={['none', 'flex']} />
    <Column
      flexBasis={[192, 346]}
      flexDirection={['row', 'column']}
      flexWrap={['wrap', 'nowrap']}
      alignItems={['flex-end', 'normal']}
    >
      <Box flexBasis={[0, 32]} display={['none', 'flex']} />
      <Text fontSize={['regular', 'extra']} lineHeight={['high', 'largest']}>
        <FormattedMessage id='CardTextCourses' />
      </Text>
      <Box flexBasis={[0, 74]} display={['none', 'flex']} />
      <Box height={16} width={303} display={['flex', 'none']} />

      <Box height={[64, 240]} justifyContent='center' order={[1, 0]} background='grey'>
        <PlugIcon width='100%' height='100%' />
      </Box>
      <Box flexBasis={[0, 62]} display={['none', 'flex']} />

      <Text fontSize={['bigNum', 'hugeExtra']} height={[56, 64]}>
        <FormattedMessage id='CardStudentsCountCourses' />
      </Text>
      <Box flexBasis={[12, 8]} />
      <Text
        width={[131, 188]}
        fontSize={['normal', 'regular']}
        lineHeight={['semiHigh', 'largest']}
      >
        <FormattedMessage id='CardStudentsTextCourses' />
      </Text>

      <Box flexBasis={[64, 68]} />
      <Text fontSize='increased' display={['none', 'inline-flex']}>
        <FormattedMessage id='ProcessCourses' />
      </Text>
    </Column>
  </Box>
)

export { AboutCourses }
