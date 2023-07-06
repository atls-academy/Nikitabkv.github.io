import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import { LOCALES }       from '../locale/locales'
import { MESSAGES }      from '../locale/messages'

const MyApp = ({ Component, pageProps, props }) => (
  <IntlProvider messages={MESSAGES[LOCALES.RU]} locale={LOCALES.RU} defaultLocale={LOCALES.RU}>
    <ThemeProvider>
      <Component {...pageProps} {...props} />
    </ThemeProvider>
  </IntlProvider>
)

export default MyApp
