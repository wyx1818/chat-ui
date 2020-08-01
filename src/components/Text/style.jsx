import styled, { css } from 'styled-components'

// 类型变体
const typeVariants = {
  primary: css`
    color: ${ ({ theme }) => theme.grayInput };
  `,
  secondary: css`
    color: ${ ({ theme }) => theme.grayInput };
    opacity: 0.3;
  `,
  danger: css`
    color: ${ ({ theme }) => theme.red };
  `,
}

// 尺寸变体
const sizeVariants = {
  XXSmall: css`
    ${ ({ theme }) => theme.XXSmall }
  `,
  XSmall: css`
    ${ ({ theme }) => theme.XSmall }
  `,
  small: css`
    ${ ({ theme }) => theme.small }
  `,
  normal: css`
    ${ ({ theme }) => theme.normal }
  `,
  medium: css`
    ${ ({ theme }) => theme.medium }
  `,
  large: css`
    ${ ({ theme }) => theme.large }
  `,
  XLarge: css`
    ${ ({ theme }) => theme.XLarge }
  `,
  XXLarge: css`
    ${ ({ theme }) => theme.XXLarge }
  `
}
// 文本容器
const StyledText = styled.span`
  font-size: ${ ({ size }) => sizeVariants[size] || sizeVariants.normal };
  ${ ({ type }) => typeVariants[type] }
  ${ ({ bold }) => bold && 'font-weight: 500' }
`

export default StyledText
