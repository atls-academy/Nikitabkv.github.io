import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import { messages }      from '../messages/messages'

const MyApp = ({ Component, pageProps, props }) => (
  <IntlProvider messages={messages.ru} locale='ru-RU'>
    <ThemeProvider>
      <Component {...pageProps} {...props} />
    </ThemeProvider>
  </IntlProvider>
)

export default MyApp
