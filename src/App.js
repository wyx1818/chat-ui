import React from 'react'

import useColorSwitch from './useColorSwitch'

function App() {
  const [color, handleButtonClick] = useColorSwitch()
  const [color2, handleButton2Click] = useColorSwitch('#0000ff', '#ff00ff')
  return <div></div>
}

export default App
