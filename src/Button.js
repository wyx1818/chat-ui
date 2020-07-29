import React from 'react'
import styled from 'styled-components'

const StyleButton = styled.div`
  width: ${ ({ width }) => width || '80px' };
  background-color: ${ ({ theme }) => theme.primaryColor }
`

function Button ({ width, onClick, label, children }) {

  return (
    <StyleButton width={ width } onClick={ onClick }>
      <button>{ label }</button>
      { children }
    </StyleButton>
  )
}

export default Button
