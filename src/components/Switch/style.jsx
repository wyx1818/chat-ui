import styled from 'styled-components'

// 滑动按钮样式
const Slider = styled.span`
  background-color: ${({ theme }) => theme.grayBorder};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 16px;
  transition: 0.4s;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 28px;
    height: 28px;
    top: 1px;
    left: 1px;
    background-color: white;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.1),
      0 3px 1px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    transition: 0.4s;
  }
`

// 实际控制开关的组件
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 0;
  height: 0;
  opacity: 0;

  :checked + ${Slider} {
    background-color: ${({ theme }) => theme.primaryColor};

    ::before {
      transform: translateX(20px);
    }
  }
`

const StyledSwitch = styled.label`
  width: 51px;
  height: 31px;
  position: relative;
  display: inline-block;
`

export default StyledSwitch

export { Checkbox, Slider }
