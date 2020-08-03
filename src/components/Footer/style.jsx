import styled from 'styled-components'

// 右侧图标容器组件
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;

  & > * {
    margin-left: 16px;
  }
`
// 弹出层样式
const StyledPopoverContent = styled.div`
  display: flex;

  & > * {
    margin: 0 8px;
    font-size: 16px;
  }
`

// 底部容器
const StyledFooter = styled.footer`
  padding: 12px 30px;
  width: 100%;
`

export default StyledFooter

export { IconContainer, StyledPopoverContent }
