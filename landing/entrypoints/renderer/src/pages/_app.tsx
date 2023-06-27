import React from 'react'

import {ThemeProvider} from '@ui/theme'

const MyApp = ({ Component, pageProps, props }) => (
    <ThemeProvider>
        <Component {...pageProps} {...props} />
    </ThemeProvider>
)

export default MyApp
