import { css } from 'styled-components'

/**
 * 在线状态图标
 * @param{string} color 在线图标背景颜色
 * @param{string} size 在线图标尺寸大小
 */
export const circleCss = (color, size = '8px') => css`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${color};
`

export const activeBarCss = ({
  barWidth = '8px',
  shadowWidth = '20px'
} = {}) => css`
  position: relative;

  /*sc-selector*/
  &::before,
  &::after {
    display: block;
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
  }

  /*显示条*/
  &::before {
    width: ${barWidth};
    background: linear-gradient(
      180deg,
      rgba(142, 197, 242, 1) 0%,
      rgba(79, 157, 222, 1) 100%
    );
  }

  /*阴影*/
  &::after {
    width: ${shadowWidth};
    background: linear-gradient(
      270deg,
      rgba(41, 47, 76, 1) 0%,
      rgba(142, 197, 242, 1) 100%
    );
    opacity: 0.6;
  }
`

export const cardCss = (radius = '6px', padding = '20px 30px') => css`
  padding: ${padding};
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 18px 40px 0 rgba(0, 0, 0, 0.04);
  border-radius: ${radius};
`
