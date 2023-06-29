import React        from 'react'

import { Divider }  from '@ui/divider'
import { PlugIcon } from '@ui/icon'
import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'

const LandingCourses = () => (
  <Box
    margin={['64px 20px', '0 0 0 170px']}
    background='white'
    height={['auto', '1480px']}
    justifyContent='center'
    alignItems={['flex-start', 'center']}
  >
    <Column width={['335px', '1630px']} height={['auto', '1225px']}>
      <Layout marginBottom={['40px', '80px']} alignItems='center' justifyContent='space-between'>
        <Text width={['336px', 'auto']} fontSize={['mediumHuge', 'XL']}>
          Курсы и материалы
        </Text>
        <Text fontSize='increased' display={['none', 'inline-flex']}>
          Все материалы
        </Text>
      </Layout>

      <Divider weight={1} color='#000000' />

      <Layout
        marginBottom={['40px', '80px']}
        marginTop={['40px', '80px']}
        alignItems='center'
        justifyContent='space-between'
        flexDirection={['column', 'row']}
      >
        <Text width={['335px', '710px']} fontSize={['increased', 'huge']} lineHeight='140%'>
          Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные возможности
          в применении навыков.{' '}
        </Text>
        <Text
          width={['335px', '559px']}
          fontSize={['increased', 'huge']}
          marginTop={['20px', '0px']}
          lineHeight='140%'
        >
          Эффективность обучения заметно вырастает благодаря практики на существующих проектах.
        </Text>
      </Layout>

      <Layout flexDirection={['column-reverse', 'row']} justifyContent='space-between'>
        <Column height={['562px', 'auto']}>
          <Text
            fontSize={['increasedPlus', 'mediumHuge']}
            marginTop='40px'
            marginLeft={['0px', '40px']}
            marginBottom={['12px', '16px']}
          >
            Frontend Engineer
          </Text>
          <Text
            fontSize={['extra', 'increased']}
            width={['350px', '694px']}
            marginLeft={['0px', '40px']}
            marginBottom={['52px', '120px']}
            lineHeight={['160%', '140%']}
          >
            Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования.
            Получите востребованную профессию и возможность открыть бизнес в сфере информационных
            технологий
          </Text>
          <Text
            fontSize={['increasedPlus', 'mediumHuge']}
            marginLeft={['0px', '40px']}
            marginBottom={['12px', '16px']}
          >
            Основы разработки
          </Text>
          <Text
            fontSize={['extra', 'increased']}
            width={['350px', '694px']}
            marginLeft={['0px', '40px']}
            marginBottom={['36px', '120px']}
            lineHeight={['160%', '140%']}
          >
            Вы изучите фундаментальные знания в ИТ и прокачаетесь в направлении программирования.
            Получите востребованную профессию и возможность открыть бизнес в сфере информационных
            технологий
          </Text>
          <Layout
            width={['350px', '1160px']}
            height={['46px', '156px']}
            padding={['0', '0px 40px']}
            marginBottom={['36px', '0']}
          >
            <Text
              width={['228px', '496px']}
              fontSize={['increased', 'mediumHuge']}
              whiteSpace='nowrap'
              marginRight={['99px', '0']}
            >
              Как использовать
              <br /> библиотеки
            </Text>
            <Text
              width={['228px', '496px']}
              fontSize={['increased', 'mediumHuge']}
              whiteSpace='nowrap'
              overflow='hidden'
            >
              Дизайн, Figma,
              <br /> Математика
            </Text>
          </Layout>
        </Column>

        <Column
          width={['335px', '410px']}
          height={['192px', '100%']}
          padding={['16px', '32px 32px 16px 32px']}
          flexDirection={['row', 'column']}
          flexWrap={['wrap', 'nowrap']}
          alignItems={['center', 'flex-start']}
        >
          <Text fontSize={['regular', 'extra']} lineHeight={['140%', '160%']}>
            Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не
            собираем большие группы, что позволяет курировать работу каждого студента.
          </Text>

          <Box
            order={['2', '0']}
            alignSelf={['flex-start', 'center']}
            width={['64px', '240px']}
            height={['64px', '240px']}
            margin={['0', '74px 0px 62px 0px']}
            background='plug'
          >
            <PlugIcon width='100%' height='100%' />
          </Box>

          <Text fontSize={['56px', '64px']} paddingBottom={['0', '8px']}>
            5
          </Text>
          <Text
            fontSize={['normal', 'regular']}
            width={['131px', '188px']}
            marginLeft={['12px', '0']}
            marginRight={['auto', '0']}
          >
            студентов обучаются в одной практической группе
          </Text>
          <Text fontSize='increased' marginTop='68px' display={['none', 'inline-flex']}>
            Процесс поступления
          </Text>
        </Column>
      </Layout>

      <Text fontSize='16pxpx' display={['inline-flex', 'none']}>
        Все материалы
      </Text>
    </Column>
  </Box>
)

export { LandingCourses }
