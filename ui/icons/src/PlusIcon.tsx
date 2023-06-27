import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const PlusIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='plus'>
        <path
          id='Vector'
          d='M2.00012 8.00009H14.0001M8.00012 2.00009V14.0001'
          stroke='black'
          strokeWidth={1.75}
          strokeLinecap='round'
        />
      </g>
    </svg>
  )
}
