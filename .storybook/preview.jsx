import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme'
import 'store.css'

addDecorator((storyFn) => {
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
})

addParameters({
  options: {
    showRoots: true,
  },
})
