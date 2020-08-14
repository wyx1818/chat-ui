import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledNoteList, { Notes } from './style'
import FilterList from '../FilterList'
import NoteCard from '../NoteCard'
import useStaggeredList from '../../hooks/useStaggeredList'

import noteData from 'data/notes'

function NoteList({ children, ...rest }) {
  const [sortType, setSortType] = useState('publishedAt')
  const trailAnimations = useStaggeredList(10)

  // 过滤原始数据
  const filterData = noteData.sort((m, n) => {
    return n[sortType] - m[sortType]
  })

  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={[
          { label: '创建时间', value: 'publishedAt' },
          { label: '修改时间', value: 'updatedAt' },
        ]}
        actionLabel="添加笔记"
        filterValue={sortType}
        setSortType={setSortType}
      >
        <Notes>
          {filterData.map((data, index) => {
            const { id, image, title, excerpt } = data
            return (
              <animated.div key={id} style={trailAnimations[index]}>
                <NoteCard
                  key={id}
                  image={image}
                  title={title}
                  excerpt={excerpt}
                  dateTime={data[sortType]}
                />
              </animated.div>
            )
          })}
        </Notes>
      </FilterList>
    </StyledNoteList>
  )
}

NoteList.propTypes = {
  children: PropTypes.any,
}

export default NoteList
