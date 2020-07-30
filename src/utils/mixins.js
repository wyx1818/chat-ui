import { css } from 'styled-components'

/**
 * 在线状态图标
 * @param{string} color 在线图标背景颜色
 * @param{string} size 在线图标尺寸大小
 */
export const circleCSS = (color, size = '8px') => css`
  width: ${ size };
  height: ${ size };
  border-radius: 50%;
  background-color: ${ color };
`
