import styled, { css } from 'styled-components'

// 布局导航
const StyledNav = styled.div`
  flex-shrink: 0;

  position: relative;
  z-index: 10;
`

// 侧边栏
const StyledSideBar = styled.aside`
  max-width: 448px;
  min-width: 350px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.gradiantGray};

  position: relative;
  z-index: 9;
  > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }
`

// 布局内容区域
const StyledContent = styled.main`
  flex: 2;
  position: relative;
`

// 滑动抽屉
const Drawer = styled.div`
  max-width: 310px;
  width: 0;
  transform: translateX(200px);
  transition: transform 0.4s;
  will-change: width, transform;
  ${({ show }) =>
    show &&
    css`
      width: initial;
      transform: translateX(0px);
    `}
`

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

export default StyledChatApp
export { StyledNav, StyledSideBar, StyledContent, Drawer }
