import React from 'react'
import PropTypes from 'prop-types'

import StyledRichEditor from './style'
import Empty from '../../components/Empty'
import EditMethod from './EditMethod'

import note from 'assets/icons/undraw_Specs_djh3.svg'
import ViewerMethod from './ViewerMethod'

RichEditor.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['empty', 'edit', 'view']),
  noteValue: PropTypes.string,
}

function RichEditor(props) {
  const { title, type, noteValue } = props

  if (type === 'edit') return <EditMethod title={title} value={noteValue} />
  else if (type === 'view')
    return <ViewerMethod value={noteValue} title={title} />

  return (
    <StyledRichEditor>
      <Empty icon={note} />
    </StyledRichEditor>
  )
}

export default RichEditor
