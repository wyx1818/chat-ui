import styled from 'styled-components'

// 布局社交图标
const SocialLinks = styled.div`
  & > * {
    margin: 0 9px;
  }
`

// 布局联系信息
const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`

// 社交容器
const StyledProfile = styled.div`
  display: grid;
  align-content: start;
  justify-content: center;
  justify-items: center;
  position: relative;
  padding: 30px;
  height: 100vh;
  margin-top: 2vh;
  overflow-y: auto;
`

export default StyledProfile

export { SocialLinks, ContactSection }
