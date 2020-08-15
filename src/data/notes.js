import note1 from 'assets/images/note-1.jpg'
import note2 from 'assets/images/note-2.jpg'
import note3 from 'assets/images/note-3.jpg'
import note4 from 'assets/images/note-4.jpg'
import note5 from 'assets/images/note-5.jpg'
import note6 from 'assets/images/note-6.jpg'
import note7 from 'assets/images/note-7.jpg'

const now = new Date().getTime()
const min = 1000 * 60
const hour = 1000 * 3600
const day = 1000 * 3600 * 24

export default [
  {
    id: 1,
    image: note1,
    title: '学习英语笔记',
    excerpt: 'Hello everyone！This is my first note!',
    publishedAt: now - min * 20,
    updatedAt: now - min * 2,
  },
  {
    id: 2,
    image: note2,
    title: '学习后端笔记',
    excerpt: '学习了 Node.js + Express + Mongodb 组件开发 api',
    publishedAt: now - day * 3,
    updatedAt: now - hour * 27,
  },
  {
    id: 3,
    image: note3,
    title: '学习移动端笔记',
    excerpt: 'Kotlin开发 android app 还可以吧',
    publishedAt: now - hour * 77,
    updatedAt: now - hour * 27,
  },
  {
    id: 4,
    image: note4,
    title: '学习大数据笔记',
    excerpt: '大数据服务器集群的组建十分考验系统设计能力',
    publishedAt: now - day * 20,
    updatedAt: now - day * 2,
  },
  {
    id: 5,
    image: note5,
    title: '学习人工智能笔记',
    excerpt: '学完人工智能感觉自己的数学智商需要提高',
    publishedAt: now - day * 12,
    updatedAt: now - day * 9 - min * 2,
  },
  {
    id: 6,
    image: note6,
    title: '学习数据挖掘笔记',
    excerpt: 'KNN 和 Naive Bays 感觉好简单！',
    publishedAt: now - day * 9,
    updatedAt: now - day * 8,
  },
  {
    id: 7,
    image: note7,
    title: '学习机器学习笔记',
    excerpt: '机器真的能到人脑的程度吗？我并不这么认为',
    publishedAt: now - day * 50,
    updatedAt: now - min * 200,
  },
]
