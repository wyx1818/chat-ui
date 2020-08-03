import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { activeBarCss } from '../../utils/mixins'
import StyledAvatar, { StatusIcon } from '../Avatar/style'

// 菜单容器
const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`

// 菜单子项
const StyledMenuItem = styled.div`
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 74px;

    ${activeBarCss()};
    ${({ active }) => (active ? '' : '&::before, &::after {height: 0}')};
  }
`

// 菜单图标
const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
`

// 侧导航
const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100%;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;

  ${StyledAvatar} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({ theme }) => theme.darkPurple};
      }
    }
  }
`

export default StyledNavBar

export { StyledMenuItem, MenuIcon, MenuItems }
