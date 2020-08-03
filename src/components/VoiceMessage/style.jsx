import styled, { css } from 'styled-components'
import StyledButton from '../Button/style'
import StyledIcon from '../Icon/style'
import StyledText from '../Text/style'

// 语音消息容器
const StyledVoiceMessage = styled.div`
  display: flex;

  align-items: center;

  & > *:first-child {
    flex-shrink: 0;
  }

  & > *:not(:first-child) {
    margin-left: 16px;
  }

  ${({ type }) => type && typeVariants[type]}
`

// 语音气泡变体
const typeVariants = {
  mine: css`
    ${StyledButton} {
      background-color: white;

      ${StyledIcon} path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    & > ${/* sc-selector */ StyledIcon} path {
      fill: white;
    }

    & > ${StyledText} {
      color: white;
    }
  `
}

export default StyledVoiceMessage
