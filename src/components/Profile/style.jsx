import styled from 'styled-components'

import arrowRight from 'assets/icons/arrowRight.svg'
import Icon from '../Icon'

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

// 相册容器
const AlbumSection = styled.section``

// 相册标题
const AlbumTitle = styled.div`
  justify-self: stretch; /*占据整个grid宽度*/
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};

    &::after {
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 2px;
    }
  }
`

// 布局照片
const Album = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 14px;
  justify-self: start;
  width: 100%;
`

// 设置照片样式
const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`

// 关闭按钮
const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
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

export {
  SocialLinks,
  ContactSection,
  Album,
  AlbumSection,
  AlbumTitle,
  Photo,
  CloseIcon
}
