import styled from 'styled-components'
import Paragraph from '../Paragraph'
import { cardCss } from '../../utils/mixins'
import StyledAvatar from '../Avatar/style'

// 姓名
const Name = styled(Paragraph).attrs({ size: 'large' })`
  grid-area: name;
`

// 展示个性签名
const Intro = styled(Paragraph).attrs({ type: 'secondary' })`
  grid-area: intro;
`

const StyledContactCard = styled.div`
  display: grid;
  grid-template-areas: 'avatar name' 'avatar intro';
  grid-template-columns: 62px auto;

  ${StyledAvatar} {
    grid-area: avatar;
  };
  ${cardCss()}
`

export default StyledContactCard

export { Name, Intro }
