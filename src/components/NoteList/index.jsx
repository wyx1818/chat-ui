import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledNoteList, { Notes } from './style'
import FilterList from '../FilterList'
import NoteCard from '../NoteCard'
import useStaggeredList from '../../hooks/useStaggeredList'

function NoteList({ children, ...rest }) {
  const trailAnimations = useStaggeredList(10)

  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={['最新创建优先', '最后修改优先']}
        actionLabel="添加笔记"
      >
        <Notes>
          {new Array(10).fill(0).map((_, index) => (
            <animated.div key={index} style={trailAnimations[index]}>
              <NoteCard key={index} />
            </animated.div>
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
