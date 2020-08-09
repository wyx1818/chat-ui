import React from 'react'
import PropTypes from 'prop-types'

import StyledNoteCard, {
  NoteExcerpt,
  NoteImage,
  NotePublishTime,
  NoteTitle,
} from './style'
import note1 from 'assets/images/note-1.jpg'

function NoteCard({ children, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={note1} />
      <NoteTitle>学习英语笔记</NoteTitle>
      <NoteExcerpt>Hello everyone! This is my first note!</NoteExcerpt>
      <NotePublishTime>2020-08-09</NotePublishTime>
    </StyledNoteCard>
  )
}

NoteCard.propTypes = {
  children: PropTypes.any,
}

export default NoteCard
