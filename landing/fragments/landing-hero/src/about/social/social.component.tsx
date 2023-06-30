import React            from 'react'

import { EmailIcon }    from '@ui/icon'
import { GitHubIcon }   from '@ui/icon'
import { TelegramIcon } from '@ui/icon'
import { Layout }     from '@ui/layout'
import { Column }       from '@ui/layout'

const Social = () => (
  <Column
    width={['100%', '75px']}
    justifyContent='space-around'
    flexDirection={['row', 'column']}
    alignItems='center'
  >
    <Layout flexBasis={314} display={['none', 'flex']}/>
    <TelegramIcon width={24} height={24} />
    <Layout flexBasis={48} display={['none', 'flex']}/>
    <GitHubIcon width={24} height={24} />
    <Layout flexBasis={48} display={['none', 'flex']}/>
    <EmailIcon width={24} height={24} />
  </Column>
)

export { Social }
