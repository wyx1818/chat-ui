import styled from 'styled-components'
import StyledIcon from '../Icon/style'

// 文字标题
const Title = styled.div`
  display: grid;
  align-items: center;
`

// 可选动作
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${StyledIcon} {
    cursor: pointer;
  }
`

const StyledTitleBar = styled.div`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({ theme }) => theme.grayBorder};
`

export default StyledTitleBar

export { Title, Actions }
