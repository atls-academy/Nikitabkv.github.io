import React from 'react'
import {FC} from 'react'

import {Box} from '@ui/layout'

import {DividerProps} from './divider.interface'

const Divider: FC<DividerProps> = ({weight, color}) => (
    <Box width='100%' height={weight} backgroundColor={color} />
)

export {Divider}
