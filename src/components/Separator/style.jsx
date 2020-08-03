import styled from 'styled-components'

// 分割线样式
const StyledSeparator = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${ ({ theme }) => theme.grayBorder };
`

export default StyledSeparator
