import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const LogoIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 56 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M35.4486 5.14024C36.2736 7.23607 36.4076 9.57788 36.5418 11.9221C36.677 14.2844 36.8123 16.6492 37.6551 18.767L38.004 19.6438C39.1588 22.5457 40.7459 25.2611 42.7125 27.7L43.3067 28.4369C44.7419 30.2168 46.7474 31.515 48.7509 32.8118C50.7251 34.0897 52.6973 35.3664 54.12 37.1014C55.2927 38.4668 56 40.2344 56 42.1651C56 45.8242 53.4597 48.8971 50.0262 49.7568C49.0008 50.0163 47.9478 50.0648 46.928 49.9183C44.5955 49.6141 42.4061 48.5233 40.2144 47.4313C38.0757 46.3657 35.9349 45.2991 33.6568 44.9612L32.7138 44.8214C29.5923 44.3584 26.4182 44.3584 23.2967 44.8214L22.3536 44.9613C20.0756 45.2991 17.9348 46.3658 15.7961 47.4313C13.5374 48.5567 11.281 49.6809 8.86786 49.944C7.22556 50.1388 5.50789 49.8293 3.96516 48.9495C0.173398 46.7869 -1.12574 41.9973 1.06344 38.2516C1.17624 38.0586 1.2961 37.8722 1.42252 37.6924C2.86014 35.6477 5.04949 34.2305 7.24126 32.8118C9.24473 31.515 11.2502 30.2168 12.6855 28.4369L13.2796 27.7C15.2463 25.2611 16.8333 22.5457 17.9881 19.6437L18.337 18.767C19.1798 16.6492 19.3152 14.2844 19.4504 11.9221C19.5968 9.36249 19.7431 6.80572 20.7889 4.56893C21.1717 3.74217 21.702 2.97646 22.3682 2.31428C23.0633 1.62159 23.8735 1.07493 24.75 0.687234C25.7941 0.222903 26.8971 7.79046e-05 27.9882 1.44762e-05C29.0886 -0.00207663 30.2014 0.222351 31.254 0.692531C32.1212 1.07781 32.9233 1.61886 33.6127 2.30313C33.856 2.54396 34.0812 2.79857 34.2878 3.06489C34.7748 3.68888 35.1685 4.38743 35.4486 5.14024ZM28 35.986C27.4 35.986 26.9797 36.0107 26.5587 36.0353C26.1361 36.0601 25.7129 36.0849 25.1065 36.0849C21.611 36.0849 19.174 32.3998 20.9218 29.4516C21.1922 28.9954 21.3383 28.8101 21.5179 28.5821C21.7445 28.2946 22.0244 27.9393 22.675 26.8868C23.2274 25.9931 23.4144 25.5424 23.5829 25.136C23.7077 24.8353 23.8223 24.5588 24.0676 24.145C24.9415 22.671 26.4707 21.934 28 21.934C29.5292 21.934 31.0585 22.671 31.9323 24.145C32.1776 24.5588 32.2923 24.8353 32.4171 25.136C32.5856 25.5424 32.7726 25.9931 33.325 26.8868C33.9756 27.9393 34.2555 28.2946 34.4821 28.5821C34.6617 28.8101 34.8077 28.9954 35.0782 29.4516C36.8259 32.3998 34.389 36.0849 30.8935 36.0849C30.2871 36.0849 29.8638 36.0601 29.4413 36.0353C29.0202 36.0107 28.5999 35.986 28 35.986Z'
        fill='white'
      />
    </svg>
  )
}
