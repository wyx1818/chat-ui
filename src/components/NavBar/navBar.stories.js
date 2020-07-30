import React from 'react'
import "styled-components/macro"
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

import NavBar, { MenuItem } from '.'

export default {
  title: '页面组件/NavBar',
  component: NavBar
}

export const Default = () => <NavBar>默认</NavBar>

export const Menu = () => {
  return (
    <div css={ `background-color: ${ ({ theme }) => theme.darkPurple }; width: 100px` }>
      <MenuItem showBadge active icon={ faCommentDots }/>
    </div>
  )
}
