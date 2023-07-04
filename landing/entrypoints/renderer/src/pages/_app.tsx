import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

const MyApp = ({ Component, pageProps, props }) => (
  <IntlProvider locale='ru' defaultLocale='ru'>
    <ThemeProvider>
      <Component {...pageProps} {...props} />
    </ThemeProvider>
  </IntlProvider>
)

export default MyApp
