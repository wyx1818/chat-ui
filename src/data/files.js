const now = new Date().getTime()
const min = 1000 * 60
const hour = 1000 * 3600
const day = 1000 * 3600 * 24

export default [
  {
    id: 1,
    name: 'Source Code.zip',
    size: '1.5M',
    type: 'zip',
    updatedAt: now - min * 10,
  },
  {
    id: 2,
    name: '2012级软件工程成绩表.xls',
    size: '378k',
    type: 'excel',
    updatedAt: now - hour * 10,
  },
  {
    id: 3,
    name: '屏幕截图-2010-01-01.png',
    size: '4.8M',
    type: 'image',
    updatedAt: now - day * 10,
  },
  {
    id: 4,
    name: '《JavaScript: The Definitive Guide》.pdf',
    size: '4.2M',
    type: 'pdf',
    updatedAt: now - hour * 20,
  },
  {
    id: 5,
    name: 'ABC 技术峰会演讲稿.ppt',
    size: '1.8M',
    type: 'ppt',
    updatedAt: now - min * 20 - hour * 7,
  },
  {
    id: 6,
    name: '2018毕业论文.docx',
    size: '2.4M',
    type: 'word',
    updatedAt: now - day * 7,
  },
  {
    id: 7,
    name: '北京玉渊潭公园.jpg',
    size: '4.2M',
    type: 'image',
    updatedAt: now - hour * 30,
  },
]
