import styled               from '@emotion/styled'
import { createBaseStyles } from '@atls-ui-parts/link'

import { Text }             from '@ui/text'

import { activeLinkStyles } from './link.styles'

export const Link = styled(Text.withComponent('a'))<{ active?: boolean }>(
  createBaseStyles(),
  activeLinkStyles
)
