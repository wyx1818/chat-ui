import React from 'react'
import { Viewer } from '@toast-ui/react-editor'
import 'tui-color-picker/dist/tui-color-picker.css'
import hljs from 'highlight.js'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import 'highlight.js/styles/github.css';


import StyledRichEditor, { ViewContainer, ToolBar } from './style'
import Paragraph from '../../components/Paragraph'
import Separator from '../../components/Separator'

function ViewerMethod(props) {
  const { value, title } = props
  const viewRef = React.createRef()

  const handlerClick = () => {
    console.log(viewRef.current)
  }

  return (
    <StyledRichEditor>
      <ToolBar>
        <Paragraph onClick={handlerClick}>{title}</Paragraph>
        <Paragraph type="secondary">最后更新于 上午10:23</Paragraph>
      </ToolBar>
      <Separator />
      <ViewContainer>
        <Viewer
          initialValue={value}
          plugins={[[codeSyntaxHighlight, { hljs }]]}
          ref={viewRef}
        />
      </ViewContainer>
    </StyledRichEditor>
  )
}

export default ViewerMethod
