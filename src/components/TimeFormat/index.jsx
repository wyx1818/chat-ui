import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import 'moment/locale/zh-cn'

const oneWeek = 1000 * 3600 * 24 * 7

function TimeFormat({ dateToFormat, children, ...rest }) {
  const diffTime = new Date().getTime() - dateToFormat
  if (diffTime > oneWeek) {
    return (
      <Moment
        locale="zh-CN"
        titleFormat="YYYY-MM-DD hh:mm"
        withTitle
        format="M月D日"
      >
        {dateToFormat}
      </Moment>
    )
  }
  return (
    <>
      <Moment fromNow locale="zh-CN" titleFormat="YYYY-MM-DD hh:mm" withTitle>
        {dateToFormat}
      </Moment>
    </>
  )
}

TimeFormat.propTypes = {
  children: PropTypes.any,
}

export default TimeFormat
