/**
 * 模块导入
 */
import styled, { css } from 'styled-components'

/**
 * 头像样式
 */

/**
 * 复用css代码
 * @param{string} color 背景颜色
 */
const circleMixinFunc = color => css`
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${ color };
`

// 头像最外层
const StyleAvatar = styled.div`
  position: relative;
`

// 在线状态
const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top : 4px;
  
  &::before {
    ${circleMixinFunc("white")};
    
    transform: scale(2);
  }
  
  &::after {
    ${ ({ theme }) => circleMixinFunc(theme.green) }
  }
`

// 圆型蒙版
const AvatarClip = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
`

// 图片容器
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;   // 等比例缩放填满容器
  object-position: center; // 在容器居中
`

export { StyleAvatar, StatusIcon, AvatarClip, AvatarImage }
