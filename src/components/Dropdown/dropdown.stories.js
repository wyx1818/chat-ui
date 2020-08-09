import React from 'react'

import Dropdown from '.'
import { DropDownItem } from './style'
import Paragraph from '../Paragraph'
import Separator from '../Separator'
import Icon from '../Icon'

import { ReactComponent as Options } from 'assets/icons/options.svg'

const dropdownContent = (
  <>
    <DropDownItem>
      <Paragraph>个人资料</Paragraph>
    </DropDownItem>
    <DropDownItem>
      <Paragraph>关闭会话</Paragraph>
    </DropDownItem>
    <Separator />
    <DropDownItem>
      <Paragraph type="danger">屏蔽此人</Paragraph>
    </DropDownItem>
  </>
)

export default {
  title: 'UI 组件/Dropdown',
  component: Dropdown,
}

export const Default = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '50%',
    }}
  >
    <Paragraph>点击右侧按钮</Paragraph>
    <Dropdown content={dropdownContent}>
      <Icon opacity={0.3} icon={Options} />
    </Dropdown>
  </div>
)

export const Left = () => (
  <div>
    <Paragraph>点击下面按钮</Paragraph>
    <Dropdown content={dropdownContent} align="left">
      <Icon opacity={0.3} icon={Options} />
    </Dropdown>
  </div>
)
