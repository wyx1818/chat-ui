---
to: src/components/<%= name %>/index.js
---

import React from 'react'
import PropTypes from 'prop-types'

import Style<%= name %> from './style'

function <%= name %> ({ children, ...rest }) {
  return (
    <Style<%= name %> { ...rest }>
      {children}
    </Style<%= name %>>
  )
}

<%= name %>.propTypes = {
  children: PropTypes.any
}

export default <%= name %>
