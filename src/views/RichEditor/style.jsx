import styled from 'styled-components'
import Paragraph from '../../components/Paragraph'

// 标题栏
const ToolBar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  height: 50px;
`

// 编辑视图容器
const EditorContainer = styled.div`
  height: calc(100% - 50px);
`

// 查看视图容器
const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 50px);
  overflow-y: auto;
  padding: 0 10px;
  max-width: 860px;
  margin: 0 auto;
`

// 标题栏左侧
const NoteTitle = styled(Paragraph).attrs({ bold: true })``

// 布局标题栏右侧
const InfoArea = styled.section`
  display: flex;
  align-items: center;
  margin-left: -4px;
  & > * {
  margin: 0 4px;
  }
`

const TitleArea = styled.section`
  max-width: 300px;
`

const Time=styled(Paragraph).attrs({type: 'secondary'})``

const StyledRichEditor = styled.div`
  height: 100%;
`

export default StyledRichEditor

export { ToolBar, EditorContainer, ViewContainer, NoteTitle, InfoArea, Time, TitleArea }
