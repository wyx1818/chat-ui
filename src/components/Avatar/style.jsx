import styled, { css } from 'styled-components'

/**
 * 在线状态图标
 * @param{string} color 在线图标背景颜色
 * @param{string} size 在线图标尺寸大小
 */
const circleMixinFunc = (color, size = '8px') => css`
  content: "";
  display: block;
  position: absolute;
  width: ${ size };
  height: ${ size };
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
    ${ ({ size }) => circleMixinFunc('white', size) };

    transform: scale(2);
  }

  &::after {
    ${ ({ theme, status, size }) => {
      if (status === 'online') {
        // 此处的size 为 状态图标的尺寸(statusIconSize)
        return circleMixinFunc(theme.green, size)
      } else if (status === 'offline') {
        return circleMixinFunc(theme.gray, size)
      }
    }
}
`

// 圆型蒙版
const AvatarClip = styled.div`
  width: ${ ({ size }) => size };
  height: ${ ({ size }) => size };
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
export default StyleAvatar

export { StatusIcon, AvatarClip, AvatarImage }
