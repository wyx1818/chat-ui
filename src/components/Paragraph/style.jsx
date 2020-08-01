import styled, { css } from 'styled-components'
import StyledText from '../Text/style'

// 段落样式（继承Text的样式）
const StyledParagraph = styled(StyledText)`
  ${ ({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `
}
`

export default StyledParagraph
