import React from 'react'
import PropTypes from 'prop-types'

import StyledNoteList, {Notes} from './style'
import FilterList from '../FilterList'
import NoteCard from '../NoteCard'

function NoteList({ children, ...rest }) {
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={['最新创建优先', '最后修改优先']}
        actionLabel="添加笔记"
      >
        <Notes>
          {new Array(10).fill(0).map((_, index) => (
            <NoteCard key={index} />
          ))}
        </Notes>
      </FilterList>
    </StyledNoteList>
  )
}

NoteList.propTypes = {
  children: PropTypes.any,
}

export default NoteList
