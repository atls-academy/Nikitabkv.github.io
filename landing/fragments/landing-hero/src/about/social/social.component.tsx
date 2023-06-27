import React            from 'react'

import { EmailIcon }    from '@ui/icon'
import { GitHubIcon }   from '@ui/icon'
import { TelegramIcon } from '@ui/icon'
import { Column }       from '@ui/layout'

const Social = () => (
  <Column
    width={['100%', '56px']}
    height={['44px', '495px']}
    marginBottom={['24px', '0']}
    marginTop={['24px', '0']}
    paddingTop={['0', '275px']}
    justifyContent='space-around'
    flexDirection={['row', 'column']}
    alignItems={['center', 'flex-start']}
  >
    <GitHubIcon width={24} height={24} />
    <TelegramIcon width={24} height={24} />
    <EmailIcon width={24} height={24} />
  </Column>
)

export { Social }
