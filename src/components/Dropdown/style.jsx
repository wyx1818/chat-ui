import styled from 'styled-components'
import StyledSeparator from '../Separator/style'

// 下拉选项
const DropDownItem = styled.div`
  margin: 12px 0;
`

// 下拉选项容器
const DropDownContainer = styled.div`
  position: absolute;
  white-space: nowrap;
  padding: 4px 26px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);

  ${({ align }) => align}: 0;

  display: ${({ visible }) => visible ? 'block': 'none'};

  ${StyledSeparator} {
    margin: -3px -26px;
    width: calc(100% + 52px);
  }
`

const StyledDropdown = styled.div`
  position: relative;
  cursor: pointer;
`

export default StyledDropdown

export { DropDownContainer, DropDownItem }
