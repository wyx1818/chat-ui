import face1 from 'assets/images/face-male-1.jpg'
import face3 from 'assets/images/face-male-2.jpg'
import face5 from 'assets/images/face-male-3.jpg'
import face7 from 'assets/images/face-male-4.jpg'

import face2 from 'assets/images/face-female-1.jpg'
import face4 from 'assets/images/face-female-2.jpg'
import face6 from 'assets/images/face-female-3.jpg'
import face8 from 'assets/images/face-female-4.jpg'

const now = new Date().getTime()
const min = 1000 * 60
const hour = 1000 * 3600
const day = 1000 * 3600 * 24

export default [
  {
    id: 1,
    avatar: face1,
    name: '李铭浩',
    intro: '这是一段个性签名，这个人很懒',
    status: 'online',
    statusText: '在线',
    addTime: now - day * 2,
  },
  {
    id: 2,
    avatar: face2,
    name: '孙文佳',
    intro: '我是一名前端工程师',
    status: 'online',
    statusText: '在线',
    addTime: now - day * 21 - hour * 10,
  },
  {
    id: 3,
    avatar: face3,
    name: '慕容天宇',
    intro: '千里之行，始于足下。',
    status: 'offline',
    statusText: '离线',
    addTime: now - day * 12 - hour * 10,
  },
  {
    id: 4,
    avatar: face4,
    name: '郭文菲',
    intro: '一寸光阴一寸金，寸金难买寸光阴',
    status: 'online',
    statusText: '在线',
    addTime: now - day * 2 - hour * 10,
  },
  {
    id: 5,
    avatar: face5,
    name: '张峰',
    intro: '玉不琢、不成器，人不学、不知义',
    status: 'online',
    statusText: '在线',
    addTime: now - day * 2 - hour * 10 - min * 20,
  },
  {
    id: 6,
    avatar: face6,
    name: '李凝',
    intro: '读书破万卷，下笔如有神',
    status: 'offline',
    statusText: '离线',
    addTime: now - day * 5,
  },
  {
    id: 7,
    avatar: face7,
    name: '王雨斐',
    intro: '莫等闲，白了少年头，空悲切',
    status: 'online',
    statusText: '在线',
    addTime: now - day * 3,
  },
  {
    id: 8,
    avatar: face8,
    name: '赵子枫',
    intro: '学而不思则罔，思而不学则殆',
    status: 'offline',
    statusText: '离线',
    addTime: now - day * 32 - hour * 10,
  },
]
