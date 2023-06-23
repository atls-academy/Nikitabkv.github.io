import React from 'react'
import * as theme from './theme'
import {GlobalStyles} from './global.styles'
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react'

export const ThemeProvider = ({children}) => (
    <>
        <GlobalStyles/>
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </>
)