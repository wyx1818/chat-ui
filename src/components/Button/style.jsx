import styled, { css } from 'styled-components'

const shapeVariants = {
  circle: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${({ diameter }) => diameter};
    height: ${({ diameter }) => diameter};
    border-radius: 50%;
  `,
  rect: css`
    padding: 12px 18px;
    border-radius: 6px;
  `
}

const typeVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
  `
}

// 按钮
const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  ${({ shape }) => shapeVariants[shape]};
  ${({ type }) => typeVariants[type]};
  ${({ bgColor }) => `background-color: ${bgColor}`};

  transform: scale(1);
  transition: 0.4s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
`

export default StyledButton
