import styled from 'styled-components'

// 布局导航
const Nav = styled.div`
  flex-shrink: 0;
`

// 侧边栏
const SideBar = styled.aside`
  max-width: 448px;
  min-width: 344px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.gradiantGray};
`

// 布局内容区域
const Content = styled.main`
  flex: 2;
  position: relative;
`

// 滑动抽屉
const Drawer = styled.div`
  max-width: 310px;
`

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

export default StyledChatApp
export {Nav, SideBar, Content, Drawer}
