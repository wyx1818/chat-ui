import styled from 'styled-components'

const StyledLabelContainer = styled.label`
  display: flex;
  flex-direction: ${({ direct }) => direct};
  font-size: ${({ theme }) => theme.normal};
`

export default StyledLabelContainer
