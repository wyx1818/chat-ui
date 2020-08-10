import React from 'react'
import PropTypes from 'prop-types'
import 'styled-components/macro'
import { useHistory } from 'react-router-dom'

import StyledBlockedLIst, {
  BlockedAvatar,
  BlockName,
  ClosableAvatar,
  CloseIcon,
  FriendList,
  SettingsMenu,
} from './style'
import Icon from '../Icon'
import { ReactComponent as ArrowMenuLeft } from 'assets/icons/arrowMenuLeft.svg'
import { ReactComponent as closeCircle } from 'assets/icons/closeCircle.svg'
import Text from '../Text'
import blockData from 'data/blocked'

function BlockedLIst({ children, ...rest }) {
  const history = useHistory()

  return (
    <StyledBlockedLIst {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => history.goBack()}
        />
        <Text size="XXLarge">已屏蔽的好友</Text>
      </SettingsMenu>

      <FriendList>
        {blockData.map(({id, avatar, name}) => {
          return (
            <ClosableAvatar key={id}>
              <BlockedAvatar size="105px" src={avatar} />
              <CloseIcon width={46} height={51} icon={closeCircle} />
              <BlockName>{name}</BlockName>
            </ClosableAvatar>
          )
        })}
      </FriendList>
    </StyledBlockedLIst>
  )
}

BlockedLIst.propTypes = {
  children: PropTypes.any,
}

export default BlockedLIst
