import face1 from 'assets/images/face-male-1.jpg'
import face3 from 'assets/images/face-male-2.jpg'
import face5 from 'assets/images/face-male-3.jpg'

import face2 from 'assets/images/face-female-1.jpg'
import face4 from 'assets/images/face-female-2.jpg'
import face6 from 'assets/images/face-female-3.jpg'

const now = new Date().getTime()
const min = 1000 * 60
const hour = 1000 * 3600
const day = 1000 * 3600 * 24

export default [
  {
    id: 1,
    avatarSrc: face1,
    name: '李铭浩',
    status: 'online',
    statusText: '在线',
    message: '即使爬到最高的山上，一次也只能脚踏实地地迈一步',
    unreadCount: 2,
    replied: false,
    lastMessageAt: now - hour * 2,
    lastSeenAt: now - min * 50,
  },
  {
    id: 2,
    avatarSrc: face2,
    name: '孙文佳',
    status: 'offline',
    statusText: '离线',
    message: '好的，明天我就把资料送过去！感谢提醒！',
    unreadCount: 2,
    replied: false,
    lastMessageAt: now - day,
    lastSeenAt: now - hour * 6 - min * 22,
  },
  {
    id: 3,
    avatarSrc: face3,
    name: '慕容天宇',
    status: 'offline',
    statusText: '离线',
    message: '明天约一把王者荣耀，不连赢5把不罢休 🤘😊',
    unreadCount: 0,
    replied: true,
    lastMessageAt: now - hour * 66,
    lastSeenAt: now - min * 77,
  },
  {
    id: 4,
    avatarSrc: face4,
    name: '郭文菲',
    status: 'online',
    statusText: '在线',
    message: '明天我要去上课，如果有空的话我再和你说',
    unreadCount: 0,
    replied: true,
    lastMessageAt: now - hour * 36,
    lastSeenAt: now - hour * 7,
  },
  {
    id: 5,
    avatarSrc: face5,
    name: '张峰',
    status: 'online',
    statusText: '在线',
    message: '公司打印机坏了，找个人维修一下',
    unreadCount: 0,
    replied: false,
    lastMessageAt: now - day * 15,
    lastSeenAt: now - hour * 13,
  },
  {
    id: 6,
    avatarSrc: face6,
    name: '李凝',
    status: 'offline',
    statusText: '离线',
    message: '你知道吗？昨天发生了一件很神奇的事情！',
    unreadCount: 0,
    replied: true,
    lastMessageAt: now - day * 10,
    lastSeenAt: now - hour * 23,
  },
]
