import * as messages     from '../../locales/ru.json'

import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

const MyApp = ({ Component, pageProps, props }) => (
  <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
    <ThemeProvider>
      <Component {...pageProps} {...props} />
    </ThemeProvider>
  </IntlProvider>
)

export default MyApp
