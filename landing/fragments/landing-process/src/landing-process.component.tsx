import React              from 'react'

import { Divider }        from '@ui/divider'
import { LeftArrowIcon }  from '@ui/icon'
import { PlugIcon }       from '@ui/icon'
import { RightArrowIcon } from '@ui/icon'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { ListItem }       from './list-item'

const LIST_DATA = [
  {
    id: 1,
    title: 'Интеграция в команду',
    text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
  },
  {
    id: 2,
    title: 'Создание среды',
    text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
  },
  {
    id: 3,
    title: 'Изучение технологий',
    text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
  },
  {
    id: 4,
    title: 'Практика изученого',
    text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
  },
  {
    id: 5,
    title: 'Интеграция в проект',
    text: 'Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.',
  },
]

const LandingProcess = () => (
  <Box
    background='gray'
    width='100%'
    justifyContent='center'
    flexDirection='column'
    alignItems='center'
  >
    <Layout flexBasis={[64, 160]} />
    <Column>
      <Column justifyContent='center' alignSelf='center' alignItems='center'>
        <Box
          position='absolute'
          width='400px'
          height='400px'
          background='plug'
          alignSelf='center'
          display={['none', 'flex']}
        >
          <PlugIcon width='100%' height='100%' />
        </Box>
        {LIST_DATA.map((item) => (
          <ListItem data={item} key={item.id} isLastItem={LIST_DATA.length === item.id} />
        ))}
      </Column>
    </Column>
    <Layout width='100%' flexBasis={[56, 235]} />
    <Column width='100%'>
      <Divider weight={1} color='white' />
      <Layout>
        <Text
          fontSize={['hugePlus', 'largest']}
          color='white'
          overflow='hidden'
          whiteSpace='nowrap'
        >
          JAVASCRIPT — HTML — CSS — SASS — VANILLA JS — JADE — JAVASCRIPT —
        </Text>
      </Layout>
      <Layout>
        <Text
          fontSize={['hugePlus', 'largest']}
          color='white'
          overflow='hidden'
          whiteSpace='nowrap'
        >
          ATOM — FIGMA — GITHUB — ATOM — FIGMA — GITHUB — ATOM — FIGMA — GITHUB —
        </Text>
      </Layout>
      <Divider weight={1} color='white' />
    </Column>
    <Layout width='100%' flexBasis={[56, 235]} />
    <Column alignItems='center' justifyContent='flex-start'>
      <Text color='white' fontSize={['11px', 'regular']}>
        ПРОЦЕСС СОЗДАНИЯ
      </Text>
      <Layout width='100%' flexBasis={[16, 24]} />
      <Text
        width={['auto', '890px']}
        color='white'
        fontSize={['increasedPlus', 'mediumHuge']}
        textAlign='center'
      >
        Любой процесс перестаёт быть сложным, когда знаешь как он протекает
      </Text>
      <Layout width='100%' flexBasis={[24, 50]} />

      <Box width={['auto', '960px']}>
        <Column justifyContent='space-between' alignItems='center'>
          <Box
            width={['155px', '960px']}
            height={['323px', '516px']}
            padding='12px'
            background={['black', 'white']}
            border={['2px', '']}
          >
            <Box
              width={['155px', '936px']}
              background={['', 'black']}
              overflow='hidden'
              alignItems='center'
              flexDirection='column'
            >
              <Text color='white'>Title and toolbar</Text>
              <PlugIcon width='720px' height='540px' />
            </Box>
          </Box>
          <Layout flexBasis={[32, 41]} />
          <Layout width={['335px', '960px']} justifyContent='space-between' alignItems='center'>
            <LeftArrowIcon />
            <Text
              color='white'
              fontSize={['normal', 'extra']}
              width={['175px', 'auto']}
              textAlign='center'
            >
              Формирование системы базовых фрагментов и компонентов
            </Text>
            <RightArrowIcon />
          </Layout>
          <Layout flexBasis={[5, 19]} />
        </Column>
      </Box>
    </Column>
    <Layout flexBasis={[70, 160]} />
  </Box>
)

export { LandingProcess }
