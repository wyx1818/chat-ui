import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledNoteList, { Notes } from './style'
import FilterList from '../FilterList'
import NoteCard from '../NoteCard'
import useStaggeredList from '../../hooks/useStaggeredList'

import noteData from 'data/notes'

function NoteList({ children, ...rest }) {
  const trailAnimations = useStaggeredList(10)

  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={['最新创建优先', '最后修改优先']}
        actionLabel="添加笔记"
      >
        <Notes>
          {noteData.map(
            ({ id, image, title, excerpt, publishedAt, updatedAt }, index) => (
              <animated.div key={id} style={trailAnimations[index]}>
                <NoteCard
                  key={id}
                  image={image}
                  title={title}
                  excerpt={excerpt}
                  publishedAt={publishedAt}
                  updatedAt={updatedAt}
                />
              </animated.div>
            )
          )}
        </Notes>
      </FilterList>
    </StyledNoteList>
  )
}

NoteList.propTypes = {
  children: PropTypes.any,
}

export default NoteList
