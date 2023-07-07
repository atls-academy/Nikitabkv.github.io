import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
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
      <Layout flexBasis={[76, 40]} />

      <Column flexBasis={[129, 40]}>
        <Box>
          <Text fontSize={['increasedPlus', 'mediumHuge']}>
            <FormattedMessage id='FrontendTitleCourses' />
          </Text>
        </Box>
        <Layout flexBasis={[12, 16]} />
        <Box>
          <Text
            width='694px'
            fontSize='increased'
            lineHeight='high'
            display={['none', 'inline-flex']}
          >
            <FormattedMessage id='FrontendDescriptionCourses' />
          </Text>
        </Box>
        <Box>
          <Text
            width='335px'
            fontSize='regular'
            lineHeight='largest'
            display={['inline-flex', 'none']}
          >
            <FormattedMessage id='FrontendDescriptionCoursesMobile' />
          </Text>
        </Box>
      </Column>

      <Layout flexBasis={[52, 120]} />

      <Column flexBasis={[129, 40]}>
        <Box>
          <Text fontSize={['increasedPlus', 'mediumHuge']}>
            <FormattedMessage id='DevelopmentBasicsTitleCourses' />
          </Text>
        </Box>
        <Layout flexBasis={[12, 16]} />
        <Box>
          <Text
            width='694px'
            fontSize='increased'
            lineHeight='high'
            display={['none', 'inline-flex']}
          >
            <FormattedMessage id='DevelopmentBasicsDescriptionCourses' />
          </Text>
        </Box>
        <Box>
          <Text
            width='335px'
            fontSize='regular'
            lineHeight='largest'
            display={['inline-flex', 'none']}
          >
            <FormattedMessage id='DevelopmentBasicsDescriptionCoursesMobile' />
          </Text>
        </Box>
      </Column>

      <Layout flexBasis={[36, 112]} />

      <Row width={['375px', '1160px']} flexBasis={[46, 156]}>
        <Text
          width={['228px', '496px']}
          fontSize={['increased', 'mediumHuge']}
          whiteSpace='pre-line'
        >
          <FormattedMessage id='HowUseCourses' />
        </Text>
        <Text
          width={['228px', '496px']}
          fontSize={['increased', 'mediumHuge']}
          whiteSpace='pre-line'
        >
          <FormattedMessage id='DesignFigmaCourses' />
        </Text>
      </Row>
    </Column>
    <Layout flexBasis={[40]} display={['none', 'flex']} />
    <Column
      flexBasis={[192, 346]}
      flexDirection={['row', 'column']}
      flexWrap={['wrap', 'nowrap']}
      alignItems={['flex-end', 'normal']}
    >
      <Layout flexBasis={[0, 32]} display={['none', 'flex']} />
      <Box>
        <Text fontSize={['regular', 'extra']} lineHeight={['high', 'largest']}>
          <FormattedMessage id='CardTextCourses' />
        </Text>
      </Box>
      <Layout flexBasis={[0, 74]} display={['none', 'flex']} />
      <Layout height={16} width={303} display={['flex', 'none']} />
      <Box height={[64, 240]} justifyContent='center' order={[1, 0]} background='grey'>
        <PlugIcon width='100%' height='100%' />
      </Box>
      <Layout flexBasis={[0, 62]} display={['none', 'flex']} />
      <Box>
        <Text fontSize={['bigNum', 'hugeExtra']} height={[56, 64]}>
          <FormattedMessage id='CardStudentsCountCourses' />
        </Text>
      </Box>
      <Layout flexBasis={[12, 8]} />
      <Box>
        <Text
          width={[131, 188]}
          fontSize={['normal', 'regular']}
          lineHeight={['semiHigh', 'largest']}
        >
          <FormattedMessage id='CardStudentsTextCourses' />
        </Text>
      </Box>
      <Layout flexBasis={[64, 68]} />
      <Box>
        <Text fontSize='increased' display={['none', 'inline-flex']}>
          <FormattedMessage id='ProcessCourses' />
        </Text>
      </Box>
    </Column>
  </Box>
)

export { AboutCourses }
