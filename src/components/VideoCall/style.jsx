import styled from 'styled-components'
import Button from '../Button'
import Avatar from '../Avatar'
import { cardCss } from '../../utils/mixins'

// 布局按钮
const Actions = styled.div`
  grid-area: actions / title;
  align-self: end;
  justify-self: center;

  display: grid;
  grid-template-columns: 90px 90px 90px;
`

// 展示按钮
const Action = styled(Button).attrs({ diameter: '64px' })`
  font-size: 32px;
  color: white;
  box-shadow: none;

  background-color: ${({ theme, type }) =>
    type === 'hangOff' ? theme.red2 : theme.grayDark2};
`

// 展示己方
const Self = styled(Avatar)`
  grid-area: self;
  align-self: end;
  justify-self: end;
`

// 展示最小化按钮
const Minimize = styled(Button)`
  justify-self: end;
  grid-area: title;
  background-color: ${({ theme }) => theme.grayPlaceholder};
  padding: 0;
  width: 62px;
  height: 62px;
  font-size: 46px;
`

// 小型组件
const VideoCallAlert = styled.div`
  display: grid;
  grid-template-areas:
    'avatar info info'
    'avatar action icon';
  row-gap: 5px;
  column-gap: 10px;
  align-items: center;
  width: max-content;
  position: absolute;
  right: 0;
  top: 10vh;
  border: 1px solid ${({ theme }) => theme.grayBorder};
  z-index: 200;
  ${cardCss()};
`

const StyledVideoCall = styled.div`
  height: 100vh;
  padding: 20px 20px 40px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-areas:
    'title title'
    'actions self';
`

export default StyledVideoCall

export { Action, Actions, Self, Minimize, VideoCallAlert }
