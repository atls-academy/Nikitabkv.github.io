import React from 'react'

import {Global} from '@emotion/react'
import {css} from '@emotion/react'

export const GlobalStyles = () => (
    <Global
        styles={css` 
          html,
          body,
          #__next {
            margin: 0;
            height: 100%;
          }
          body::-webkit-scrollbar {
            display: none
          }
        `}
    />
)
