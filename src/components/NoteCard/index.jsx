import React from 'react'
import PropTypes from 'prop-types'

import StyledNoteCard, {
  NoteExcerpt,
  NoteImage,
  NoteTime,
  NoteTitle,
} from './style'
import TimeFormat from '../TimeFormat'

function NoteCard({
  image,
  title,
  excerpt,
  dateTime,
  updatedAt,
  children,
  ...rest
}) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={image} />
      <NoteTitle>{title}</NoteTitle>
      <NoteExcerpt>{excerpt}</NoteExcerpt>
      <NoteTime>
        <TimeFormat dateToFormat={dateTime} />
      </NoteTime>
    </StyledNoteCard>
  )
}

NoteCard.propTypes = {
  children: PropTypes.any,
}

export default NoteCard
