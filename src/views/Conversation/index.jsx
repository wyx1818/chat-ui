import React from 'react'
import PropTypes from 'prop-types'

import StyledConversation, {
  StyledEmptyConversation,
} from './style'
import MessageContent from 'components/MessageContent'

import emptyIcon from 'assets/icons/undraw_chat_1wo5.svg'
import Empty from '../../components/Empty'

function Conversation({ type, children, ...rest }) {

  if (type === 'empty') {
    return (
      <StyledEmptyConversation>
        <Empty icon={emptyIcon} />
      </StyledEmptyConversation>
    )
  }

  return (
    <StyledConversation {...rest}>
      <MessageContent/>
    </StyledConversation>
  )
}

Conversation.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['empty', 'message'])
}
Conversation.defaultProps = {
  type: 'empty',
}

export default Conversation
