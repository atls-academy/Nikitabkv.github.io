import React from 'react'

import {ThemeProvider} from '@ui/theme'

const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
)

export default MyApp
