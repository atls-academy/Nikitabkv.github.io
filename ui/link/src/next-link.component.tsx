import { createNextLink } from '@atls-ui-parts/link'

import React              from 'react'

import { Link }           from './link.component'

const NextLink = (props) => {
  const BaseLink = createNextLink(Link)
  return <BaseLink {...props} />
}

export { NextLink }
