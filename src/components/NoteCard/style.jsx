import styled from 'styled-components'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import { cardCss } from '../../utils/mixins'

// 笔记缩略图
const NoteImage = styled.img`
  grid-area: image;
  justify-self: start;
  width: 60px;
  height: 60px;
  object-fit: cover;
`

// 笔记标题
const NoteTitle = styled(Heading).attrs({ level: 2 })`
  grid-area: title;
  align-self: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

// 笔记摘要
const NoteExcerpt = styled(Paragraph).attrs({ size: 'small' })`
  grid-area: excerpt;
  align-self: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

// 时间
const NoteTime = styled(Paragraph).attrs({ type: 'secondary' })`
  grid-area: time;
  justify-self: end;
`

const StyledNoteCard = styled.div`
  ${cardCss()};
  display: grid;
  grid-template-areas:
    'image title time'
    'image excerpt excerpt';
  grid-template-columns: 72px 2fr 1fr;
`

export default StyledNoteCard

export { NoteExcerpt, NoteImage, NoteTime, NoteTitle }
