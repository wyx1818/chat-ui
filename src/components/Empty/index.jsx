import React from 'react'
import PropTypes from 'prop-types'

import StyledEmpty, { EmptyImg } from './style'
import { useSpring } from 'react-spring'

function Empty({ icon, children, ...rest }) {
  const animeProps = useSpring({
    transform: 'translate3d(0px, 0px, 0px)',
    opacity: 1,
    from: { transform: 'translate3d(100px, 0px, 0px)', opacity: 0 },
    config: {
      tension: 140,
    },
    delay: 300,
  })
  return (
    <StyledEmpty {...rest} style={animeProps}>
      <EmptyImg src={icon} />
    </StyledEmpty>
  )
}

Empty.propTypes = {
  children: PropTypes.any,
}

export default Empty
