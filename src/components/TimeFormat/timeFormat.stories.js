import React from 'react'

import TimeFormat from '.'
import Paragraph from '../Paragraph'

export default {
  title: '排版/TimeFormat',
  component: TimeFormat,
}

export const Default = () => (
  <Paragraph type='secondary'>
    <TimeFormat dateToFormat="2020-08-22" />
  </Paragraph>
)
