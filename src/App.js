import React from 'react'
import ChatApp from './components/ChatApp'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp />
    </ThemeProvider>
  )
}

export default App
