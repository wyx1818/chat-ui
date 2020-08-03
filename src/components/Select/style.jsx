import styled from 'styled-components'

import CaretDown from 'assets/icons/caret_down.svg'

const StyledSelect = styled.select`
  appearance: none;
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  border: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};

  /*IE 隐藏*/
  ::-ms-expand {
    display: none;
  }
`

export default StyledSelect
