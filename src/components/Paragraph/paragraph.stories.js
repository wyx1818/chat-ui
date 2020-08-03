import React from 'react'

import Paragraph from '.'

export default {
  title: '排版/Paragraph',
  component: Paragraph
}

export const Default = () => (
  <>
    <Paragraph>这是一个段落</Paragraph>
    <Paragraph>这是一个段落</Paragraph>
  </>
)

export const Ellipsis = () => (
  <Paragraph ellipsis>
    曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的;正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。
  </Paragraph>
)
