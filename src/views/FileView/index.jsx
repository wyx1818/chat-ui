import React from 'react'
import { StyledEmptyFileView } from './styled'
import Empty from '../../components/Empty'

import emptyIcon from 'assets/icons/undraw_file_searching_duff.svg'

FileView.propTypes = {}
FileView.defaultProps = {
  type: 'empty',
}

function FileView(props) {
  const { type } = props
  if (type === 'empty') {
    return (
      <StyledEmptyFileView>
        <Empty icon={emptyIcon} />
      </StyledEmptyFileView>
    )
  }

  return <div></div>
}

export default FileView
