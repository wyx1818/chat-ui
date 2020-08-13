import React from 'react'

import { Editor } from '@toast-ui/react-editor'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import hljs from 'highlight.js'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import 'highlight.js/styles/github.css';

import StyledRichEditor, { EditorContainer, ToolBar } from './style'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'

function EditMethod(props) {
  const { value,  title } = props
  const editorRef = React.createRef()

  const handleClickButton = () => {
    console.log(editorRef.current)
  }

  return (
    <StyledRichEditor>
      <ToolBar>
        <Paragraph bold>{title}</Paragraph>
        <Button type="primary" shape="rect" onClick={handleClickButton} style={{padding: '5px 10px'}}>
          保存
        </Button>
      </ToolBar>
      <EditorContainer>
        <Editor
          initialValue={value}
          previewStyle="vertical"
          height="100%"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={editorRef}
          language="zh-CN"
          plugins={[[codeSyntaxHighlight, { hljs }]]}
          viewer={true}
        />
      </EditorContainer>
    </StyledRichEditor>
  )
}

export default EditMethod
