import React from 'react'

import NoteList from '.'

export default {
  title: '页面组件/NoteList',
  component: NoteList,
}

export const Default = () => (
  <div style={{ width: "500px" }}>
    <NoteList />
  </div>
)
