import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const AboutCourses = () => (
  <Layout
    flexBasis={[650, 734]}
    width={['303px', '100%']}
    flexDirection={['column-reverse', 'row']}
    alignSelf='center'
  >
    <Box flexBasis={[40]} display={['none', 'flex']} />
    <Column overflowX='hidden'>
      <Box flexBasis={[76, 40]} />

      <Text fontSize={['increasedPlus', 'mediumHuge']}>
        <FormattedMessage id='FrontendEngineer' defaultMessage='Frontend Engineer' />
      </Text>
      <Box flexBasis={[12, 16]} />
      <Text width='694px' fontSize='increased' lineHeight='140%' display={['none', 'inline-flex']}>
        <FormattedMessage
          id='YouStudyDesktop1'
          defaultMessage='Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования.
             Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий'
        />
      </Text>
      <Text width='335px' fontSize='regular' lineHeight='160%' display={['inline-flex', 'none']}>
        <FormattedMessage
          id='YouStudyMobile1'
          defaultMessage='Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.'
        />
      </Text>

      <Box flexBasis={[52, 120]} />

      <Text fontSize={['increasedPlus', 'mediumHuge']}>
        <FormattedMessage id='DevelopmentBasics' defaultMessage='Основы разработки' />
      </Text>
      <Box flexBasis={[12, 16]} />
      <Text width='694px' fontSize='increased' lineHeight='140%' display={['none', 'inline-flex']}>
        <FormattedMessage
          id='YouStudyDesktop2'
          defaultMessage='Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования.
            Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий'
        />
      </Text>
      <Text width='335px' fontSize='regular' lineHeight='160%' display={['inline-flex', 'none']}>
        <FormattedMessage
          id='YouStudyMobile2'
          defaultMessage='Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.'
        />
      </Text>

      <Box flexBasis={[36, 112]} />

      <Row width={['375px', '1160px']} flexBasis={[46, 156]}>
        <Text width={['228px', '496px']} fontSize={['increased', 'mediumHuge']}>
          <FormattedMessage id='HowUse' defaultMessage='Как использовать' /> <br />
          <FormattedMessage id='Libraries' defaultMessage='библиотеки' />
        </Text>
        <Text width={['228px', '496px']} fontSize={['increased', 'mediumHuge']}>
          <FormattedMessage id='DesignFigma' defaultMessage='Дизайн, Figma' /> <br />
          <FormattedMessage id='Math' defaultMessage='Математика' />
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
      <Text fontSize={['regular', 'extra']} lineHeight={['140%', '160%']}>
        <FormattedMessage
          id='YouStudyFull'
          defaultMessage='Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не собираем большие группы, что позволяет курировать работу каждого студента.'
        />
      </Text>
      <Box flexBasis={[0, 74]} display={['none', 'flex']} />
      <Box height={16} width={303} display={['flex', 'none']} />

      <Box height={[64, 240]} justifyContent='center' order={[1, 0]} background='grey'>
        <PlugIcon width='100%' height='100%' />
      </Box>
      <Box flexBasis={[0, 62]} display={['none', 'flex']} />
      <Text fontSize={['bigNum', 'hugeExtra']} height={[56, 64]}>
        <FormattedMessage id='5' defaultMessage='5' />
      </Text>
      <Box flexBasis={[12, 8]} />
      <Text width={[131, 188]} fontSize={['normal', 'regular']} lineHeight={['130%', '160%']}>
        <FormattedMessage
          id='StudentsGroup'
          defaultMessage='студентов обучаются в одной практической группе'
        />
      </Text>
      <Box flexBasis={[64, 68]} />
      <Text fontSize='increased' display={['none', 'inline-flex']}>
        <FormattedMessage id='Process' defaultMessage='Процесс поступления' />
      </Text>
    </Column>
  </Layout>
)

export { AboutCourses }
