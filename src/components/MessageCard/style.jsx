import styled, { css } from 'styled-components'

import Text from 'components/Text'
import Paragraph from '../Paragraph'
import Badge from '../Badge'
import { activeBarCss, cardCss } from '../../utils/mixins'
import StyledAvatar from '../Avatar/style'

// 昵称
const Name = styled(Text).attrs({ size: 'large' })`
 grid-area: name;
`

// 时间
const Time = styled(Text).attrs({ size: 'medium', type: 'secondary' })`
  grid-area: time;
  justify-self: end;
`

// 状态
const Status = styled(Text).attrs({ type: 'secondary' })`
  grid-area: status;
`

// 消息文本的容器组件，用来单独布局消息和未读数
const Message = styled.div`
  grid-area: message;
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;
  ${ ({ replied }) =>
    replied &&
    css`
      grid-template-columns: 24px 1fr 30px;
    `
  };
`

// 详细文本
const MessageText = styled(Paragraph).attrs({ ellipsis: true })``

// 未读数
const UnreadBadge = styled(Badge)`
  justify-self: end;
`

// 消息卡片容器
const StyledMessageCard = styled.div`
  ${ cardCss() };
  display: grid;
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message";
  grid-template-columns: 64px 1fr 1fr;
  row-gap: 16px;
  background-color: ${ ({ theme }) => theme.background };
  transition: 0.4s;

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  };

  ${ StyledAvatar } {
    grid-area: avatar;
  };

  // 激活状态
  ${ ({ active }) =>
  active &&
  css`
    background-color: ${ ({ theme }) => theme.darkPurple };
    ${ Name }, ${ Status }, ${ Time }, ${ MessageText } {
      color: white;
    };
    ${ Status }, ${ Time } {
      opacity: 0.4;
    };
    ${ activeBarCss({ barWidth: '4px', shadowWidth: '14px' }) };

    overflow: hidden;
    `
  }
`

export default StyledMessageCard

export { Name, Time, Status, Message, MessageText, UnreadBadge }
