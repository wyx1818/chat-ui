import styled, { css } from 'styled-components'
import { circleCss } from '../../utils/mixins'

// 变体，dot || default
const variants = {
  dot: css`
    position: relative;
    padding: 5px;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;

      display: ${({ show }) => (show ? 'block' : 'none')};
      ${({ theme }) => circleCss(theme.red, '6px')};
    }
  `,
  default: css`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 18px 40px 0 rgba(0, 0, 0, 0.04),
      0 6px 12px 0 rgba(0, 0, 0, 0.08);

    ${({ theme }) => circleCss(theme.red, '26px')};
    ${({ showZero, count }) =>
      !showZero && count === 0 && 'visibility: hidden'};
  `,
}

// 最外层容器
const StyledBadge = styled.div`
  display: inline-block;
  ${({ variant }) => variants[variant]}
`

// 数量
const Count = styled.div`
  font-size: ${({ theme }) => theme.normal};
  color: white;
`

export default StyledBadge

export { Count }
