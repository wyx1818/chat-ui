import React from 'react'
import Button from './Button'
import useColorSwitch from './useColorSwitch'

function App () {
  const [color, handleButtonClick] = useColorSwitch()
  const [color2, handleButton2Click] = useColorSwitch('#0000ff', '#ff00ff')
  return (
    <div>
      <Button width="120px" label="按钮" onClick={ handleButtonClick }>
        <span>&gt;</span>
      </Button>
      <p style={ { color } }>这是一段文本</p>
      <Button label="点我" onClick={ handleButton2Click }/>
      <p style={ { color: color2 } }>这是第二段文本</p>
    </div>)
}

export default App
