import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Settings from '../../components/Settings'
import BlockedLIst from '../../components/BlockedLIst'
import Conversation from '../../components/Conversation'
import VideoCallContainer from 'containers/VideoCallContainer'
import { StyledContent } from './style'
import RichEditor from '../RichEditor'

function Content(props) {
  const { videoCallingState } = props

  const noteValue = `
  # 荷塘月色

  > 朱自清

  ## 我是二级标题

  曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的;正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。

  \`你好\`

  \`\`\`javascript
  const a = 2
  alter(a)
  import Editor from '@toast-ui/editor';
  import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

  import hljs from 'highlight.js';

  const editor = new Editor({
    // ...
    plugins: [[codeSyntaxHighlight, { hljs }]]
  });
  \`\`\`

  特点：

  1. 非常纯粹的继承关系，实例是子类的实例，也是父类的实例
  2. 父类新增的原型属性/方法，子类都能访问到
  3. 简单，易于实现

  缺点：

  1. 想要为子类新增属性和方法，必须要在 \`new Child()\` 之后执行，不能放在构造函器里
  2. 无法实现多继承
  3. 来自原型对象的应用属性是所有实例共享的
  4. 创建子类实例时，无法向构造函数传参

  ### 手写一个简易深拷贝

  思路：

  1. 判断是否为对象或者函数
  2. 判断是否为数组，用 \`...\` 展开赋值给新对象
  3. 遍历新对象的键，判断值是否为对象或函数，如果是递归，否者赋值

  \`\`\`javascript
  function deepClone(obj) {
    // 判断是否为对象或是函数
    function isObject(o) {
      return (typeof o === 'object' || typeof o === 'function' && o != null )
    }
    if (!isObject(obj)) {
      throw new Error('非对象')
    }
    let isArray = Array.isArray(obj)
    let newObj = isArray ? [...obj] : { ...obj }

    Reflect.ownKeys(newObj).forEach(key => {
      newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    })

    return newObj
  }
  \`\`\`

  完结啦

  好难
  `

  return (
    <StyledContent>
      {videoCallingState && <VideoCallContainer />}
      <Switch>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/settings/blocked">
          <BlockedLIst />
        </Route>
        <Route exact path="/notes">
          <RichEditor title="我是标题" type="empty" noteValue={noteValue} />
        </Route>
        <Route path="/">
          <Conversation />
        </Route>
      </Switch>
    </StyledContent>
  )
}

const mapStateToProps = (state) => ({
  videoCallingState: state.videoCalling.videoCallingState,
})

export default connect(mapStateToProps)(Content)
