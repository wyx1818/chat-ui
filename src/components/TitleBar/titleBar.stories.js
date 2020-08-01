import React from "react"

import TitleBar from "."

import face1 from 'assets/images/face-female-2.jpg'

export default {
  title: "UI 组件/TitleBar",
  component: TitleBar
}

export const Default = () => <TitleBar avatarSrc={face1} name="慕容天宇" status="online" time="3小时前"/>
