import styled, { css } from 'styled-components'

import Paragraph from '../Paragraph'
import Icon from '../Icon'
import Text from '../Text'

// 会话时间
const Time = styled(Paragraph).attrs({ type: 'secondary', size: 'small' })`
  margin: 6px 6px 6px 24px;
  word-spacing: 1rem;
`

// 气泡容器
const Bubble = styled.div`
  padding: 15px 22px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`

// 气泡小尾巴
const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;

  z-index: 5;
`

// 内容文字
const MessageText = styled(Text)``

// 会话包裹容器
const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;

  ${({ type }) => type && typeVariants[type]}
`

// 气泡变体
const typeVariants = {
  mine: css`
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset;
      right: 0;
    }

    path {
      fill: ${({ theme }) => theme.primaryColor};
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    ${MessageText} {
      color: white;
    }
  `,
}

export default StyledChatBubble

export { Time, Bubble, BubbleTip, MessageText }
