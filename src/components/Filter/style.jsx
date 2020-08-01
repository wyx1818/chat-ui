import styled from 'styled-components'
import StyledText from '../Text/style'

// 外层容器，用于包裹下拉菜单和label
const Filters  = styled.div`

`
// 外层容器，用于包裹动作按钮和label
const Action = styled.div`
  justify-self: end;
  ${StyledText} {
    padding-right: 1rem;
  };
`

// 过滤容器
const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`

export default StyledFilter

export { Filters, Action }
