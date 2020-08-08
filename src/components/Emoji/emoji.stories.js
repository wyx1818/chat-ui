import React from 'react'

import Emoji from '.'

export default {
  title: 'UI 组件/Emoji',
  component: Emoji,
}

export const Default = () => (
  <div>
    {/* eslint-disable jsx-a11y/accessible-emoji */}
    <Emoji label="smile">😊</Emoji>
    <Emoji label="todo">✅</Emoji>
    <Emoji label="clock">🕔</Emoji>
  </div>
)
