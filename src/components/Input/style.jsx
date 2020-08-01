import styled from 'styled-components'

// 输入框
const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  border: none;
  background: none;
  color: ${ ({ theme }) => theme.grayDark };
  font-size: ${ ({ theme }) => theme.medium };
  &::placeholder {
    color: ${ ({ theme }) => theme.grayPlaceholder };
  }
`

// 输入框容器
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${ ({ theme }) => theme.grayBG };
  border-radius: 24px;
  padding: 0 30px;
`

// 输入框前缀
const Prefix = styled.div`
  margin-right: 16px;
`

// 输入框后缀
const Suffix = styled.div`
  margin-left: 16px;
`

export default StyledInput

export { Prefix, Suffix, InputContainer }
