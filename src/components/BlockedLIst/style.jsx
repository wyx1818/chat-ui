import styled from 'styled-components'
import StyledText from '../Text/style'
import Avatar from '../Avatar'
import Text from '../Text'
import Icon from '../Icon'

const BlockedAvatar = styled(Avatar)`
  grid-area: avatar;
`

const BlockName = styled(Text).attrs({ size: 'XLarge' })`
  grid-area: name;
  margin-top: 20px;
`

const CloseIcon = styled(Icon)`
  grid-area: 2/3/5/4;
  z-index: 10;
  margin-top: 10px;
`

// 整个屏蔽头像组件的容器
const ClosableAvatar = styled.div`
  display: grid;
  grid-template-areas:
    'avatar avatar avatar'
    'avatar avatar avatar'
    'avatar avatar avatar'
    'name name name';
  justify-items: center;
`

// 头部样式
const SettingsMenu = styled.div`
  display: grid;
  height: 148px;
  grid-template-columns: 10px 1fr;
  align-items: center;

  ${StyledText} {
    grid-column: span 1/-1;
    justify-self: center;
  }
`

// 好友布局
const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  justify-items: center;
`

const StyledBlockedLIst = styled.div`
  padding: 2vh 4vw;
`

export default StyledBlockedLIst

export {
  SettingsMenu,
  BlockedAvatar,
  BlockName,
  ClosableAvatar,
  CloseIcon,
  FriendList,
}
