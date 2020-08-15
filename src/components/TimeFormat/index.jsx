import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import 'moment/locale/zh-cn'

const oneDay = 1000 * 3600 * 24
const oneWeek = 1000 * 3600 * 24 * 7

function TimeFormat(props) {
  const { type='natural', dateToFormat } = props

  if (type === 'natural')
    return <NaturalFormatTime dateToFormat={dateToFormat} />

  return <FullTime dateToFormat={dateToFormat} />
}

function NaturalFormatTime({ dateToFormat }) {
  const diffTime = new Date().getTime() - dateToFormat
  const sameDay = !(new Date().getDay() - new Date(dateToFormat).getDay())

  if (diffTime < oneDay && sameDay) {
    return (
      <Moment
        locale="zh-CN"
        titleFormat="YYYY-MM-DD HH:mm"
        withTitle
        format="HH:mm"
      >
        {dateToFormat}
      </Moment>
    )
  } else if (diffTime > oneDay && diffTime < oneWeek) {
    return (
      <Moment fromNow locale="zh-CN" titleFormat="YYYY-MM-DD HH:mm" withTitle>
        {dateToFormat}
      </Moment>
    )
  }
  return (
    <>
      <Moment
        locale="zh-CN"
        titleFormat="YYYY-MM-DD HH:mm"
        withTitle
        format="M月D日"
      >
        {dateToFormat}
      </Moment>
    </>
  )
}

function FullTime({ dateToFormat }) {
  return (
    <Moment locale="zh-CN" titleFormat="YYYY-MM-DD HH:mm:ss" withTitle format="YYYY-MM-DD HH:mm">
      {dateToFormat}
    </Moment>
  )
}

TimeFormat.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['natural', 'full']),
  dateToFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
}

export default TimeFormat
