import styled from 'styled-components'
import Icon from '../Icon'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Popover from '../Popover'
import { cardCss } from '../../utils/mixins'

// 文件图标
const FileIcon = styled(Icon).attrs({ width: 60, height: 60 })`
  grid-area: icon;
  justify-self: start;
`

// 文件名
const FileName = styled(Heading).attrs({ level: 2 })`
  grid-area: name;
  align-self: center;
`

// 文件大小
const FileSize = styled(Paragraph).attrs({ type: 'secondary' })`
  grid-area: size;
`

// 展示更多选项
const Options = styled(Popover)`
  grid-area: options;
  justify-self: end;
  align-self: center;
`

// 显示上传日期
const Time = styled(Paragraph).attrs({ type: 'secondary'})`
  grid-area: time;
  justify-self: end;
`

const StyledFileCard = styled.div`
  ${cardCss()};
  display: grid;
  grid-template-areas:
  "icon name options"
  "icon size time";
  grid-template-columns: 74px 1fr 1fr;
`

export default StyledFileCard

export {FileIcon, FileName, FileSize, Options, Time}
