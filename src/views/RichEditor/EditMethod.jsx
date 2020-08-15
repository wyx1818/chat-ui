import React from 'react'
import PropTypes from 'prop-types'
import { Editor } from '@toast-ui/react-editor'
import hljs from 'highlight.js'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import 'highlight.js/styles/github.css'

import StyledRichEditor, {
  EditorContainer,
  ToolBar,
  InfoArea,
  Time,
  TitleArea,
} from './style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import TimeFormat from '../../components/TimeFormat'

EditMethod.propTypes = {
  type: PropTypes.oneOf(['edit', 'new']),
}

function EditMethod(props) {
  const { value, title, type, time } = props
  const editorRef = React.createRef()

  // 点击按钮操作
  const handleClickButton = () => {
    const tuiEditor = editorRef.current
    console.log(tuiEditor.getInstance())
    console.log('markdown:', tuiEditor.getInstance().getMarkdown())
  }

  return (
    <StyledRichEditor>
      <ToolBar>
        <TitleArea>
          <Input.Text
            placeholder="请输入标题"
            defaultValue={type === 'edit' ? title : null}
            type="underline"
            direct="row"
          />
        </TitleArea>
        <InfoArea>
          {type === 'edit' && (
            <Time>
              上次修改：
              <TimeFormat dateToFormat={time} type="full" />
            </Time>
          )}
          <Button
            type="primary"
            shape="rect"
            onClick={handleClickButton}
            style={{ padding: '5px 10px' }}
          >
            {type === 'edit' ? '保存' : '新增'}
          </Button>
        </InfoArea>
      </ToolBar>
      <EditorContainer>
        <Editor
          initialValue={type === 'edit' ? value : '> 记录下灵感吧'}
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
