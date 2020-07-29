import { useState } from 'react'

function useColorSwitch(color1 = '#ff0000', color2 ='#00ff00') {
  const [color, setColor] = useState(color1)

  const handleButton1Click = () => {
    setColor(color2)
  }

  return [color, handleButton1Click]
}

export default useColorSwitch
