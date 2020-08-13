import styled from 'styled-components'

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  min-height: 50px;
`

const EditorContainer = styled.div`
  height: 100%;
`

const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 50px);
  overflow-y: auto;
  padding: 0 10px;
  max-width: 860px;
  margin: 0 auto;
`

const StyledRichEditor = styled.div`
  height: 100%;
`

export default StyledRichEditor

export { ToolBar, EditorContainer, ViewContainer }
