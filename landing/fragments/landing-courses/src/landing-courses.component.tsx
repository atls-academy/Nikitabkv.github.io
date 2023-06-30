import React        from 'react'

import { Divider }  from '@ui/divider'
import { PlugIcon } from '@ui/icon'
import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'

const LandingCourses = () => (
  <Box background='white' justifyContent='flex-start' alignItems={['flex-start', 'center']}>

    <Layout flexBasis={[20, 230]} height='100%'/>

    <Column width={['335px', '1630px']} justifyContent='center'>

      <Layout flexBasis={[64, 160]} width='100%'/>

      <Layout flexBasis={[20, 195]} alignItems='flex-start' justifyContent='space-between'>
        <Text fontSize={['mediumHuge', 'XL']}>
          Курсы и материалы
        </Text>
        <Text fontSize='increased' alignSelf='center' display={['none', 'inline-flex']}>
          Все материалы
        </Text>
      </Layout>

      <Layout flexBasis={[40, 0]} width='100%'/>

      <Divider weight={1} color='#000000' />

      <Layout flexBasis={[40, 0]} width='100%'/>

      <Layout flexBasis={[20, 295]} alignItems='center' justifyContent='space-between' flexDirection={['column', 'row']}>
        <Text width={['335px', '710px']} fontSize={['increased', 'huge']} lineHeight='140%'>
          Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные возможности
          в применении навыков.{' '}
        </Text>

        <Layout flexBasis={[20, 0]} width='100%'/>

        <Text width={['335px', '559px']} fontSize={['increased', 'huge']} lineHeight='140%'>
          Эффективность обучения заметно вырастает благодаря практики на существующих проектах.
        </Text>
      </Layout>

      <Layout flexBasis={[56, 0]} width='100%'/>

      <Layout flexBasis={[706, 734]} flexDirection={['column-reverse', 'row']} justifyContent={['space-between', 'flex-start']}>
        <Column height={['auto', '688px']}>

            <Layout flexBasis={[56, 40]} width='100%'/>


              <Text fontSize={['increasedPlus', 'mediumHuge']}>
                Frontend Engineer
              </Text>

              <Layout flexBasis={[12, 16]} width='100%'/>

              <Text fontSize={['extra', 'increased']} width={['338px', '694px']} lineHeight={['160%', '140%']} display='block'>
                Вы изучите фундаментальные знания в ИТ и прокачаетесь в
                <Text fontSize='increased' lineHeight='160%' display={['none', 'inline-flex']}>направлении</Text> программирования.
                Получите востребованную профессию и возможность открыть бизнес
                <Text fontSize='increased' lineHeight='160%' display={['none', 'inline-flex']}> в сфере информационных технологий </Text>
              </Text>

            <Layout flexBasis={[52, 120]} width='100%'/>


              <Text fontSize={['increasedPlus', 'mediumHuge']}>
                Основы разработки
              </Text>

              <Layout flexBasis={[12, 16]} width='100%'/>

              <Text fontSize={['extra', 'increased']} width={['338px', '694px']} lineHeight={['160%', '140%']} display='block'>
                Вы изучите фундаментальные знания в ИТ и прокачаетесь в
                <Text fontSize='increased' lineHeight='160%' display={['none', 'inline-flex']}>направлении</Text> программирования.
                Получите востребованную профессию и возможность открыть бизнес
                <Text fontSize='increased' lineHeight='160%' display={['none', 'inline-flex']}> в сфере информационных технологий </Text>
              </Text>

            <Layout flexBasis={[36, 112]} width='100%'/>

            <Layout width={['100%', '1160px']} height={['46px', 'auto']}>
                  <Text width={['228px', '496px']} fontSize={['increased', 'mediumHuge']} whiteSpace='nowrap'>
                    Как использовать
                    <br /> библиотеки
                  </Text>

                  <Layout flexBasis={[213, 112]} width='100%'/>

                  <Text width={['228px', '496px']} fontSize={['increased', 'mediumHuge']} whiteSpace='nowrap' overflow='hidden'>
                    Дизайн, Figma,
                    <br /> Математика
                  </Text>
            </Layout>

          </Column>

        <Layout flexBasis={[0, 40]}/>

        <Column flexBasis={['192px', '410px']} height={['auto', 'auto']} alignItems='flex-start'>

          <Layout flexBasis={[20, 32]} width='100%'/>

          <Text fontSize={['regular', 'extra']} lineHeight={['140%', '160%']}>
            Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не
            собираем большие группы, что позволяет курировать работу каждого студента.
          </Text>

          <Layout flexBasis={[16, 74]} width='100%'/>

          <Layout width='100%' flexDirection={['row', 'column']} alignItems={['center', 'flex-start']}>
            <Box order={['2', '0']} alignSelf={['flex-start', 'center']} width={['64px', '240px']} background='plug'>
              <PlugIcon width='100%' height='100%' />
            </Box>

            <Layout flexBasis={[0, 62]} width='100%'/>

            <Text fontSize={['56px', '64px']}>
              5
            </Text>

            <Layout flexBasis={[12, 8]} width='100%'/>

            <Text fontSize={['normal', 'regular']} width={['131px', '188px']}>
              студентов обучаются в одной практической группе
            </Text>

            <Layout flexBasis={[64, 0]} width='100%'/>
          </Layout>

          <Layout flexBasis={[0, 68]} width='100%'/>

          <Text fontSize='increased' display={['none', 'inline-flex']}>
            Процесс поступления
          </Text>
        </Column>
      </Layout>

      <Layout flexBasis={[52, 168]} width='100%'/>

      <Text fontSize='increased' alignSelf='center'>
        Все материалы
      </Text>

      <Layout flexBasis={[64, 0]} width='100%'/>
    </Column>

  </Box>
)

export { LandingCourses }
