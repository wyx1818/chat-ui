import React from 'react'

import Heading from '.'

export default {
  title: '排版/Heading',
  component: Heading
}

export const H1 = () => <Heading level={ 1 }>这是H1标题</Heading>
export const H2 = () => <Heading level={ 2 }>这是H2标题</Heading>
export const H3 = () => <Heading level={ 3 }>这是H3标题</Heading>
export const H4 = () => <Heading level={ 4 }>这是H4标题</Heading>
export const H5 = () => <Heading level={ 5 }>这是H5标题</Heading>
export const H6 = () => <Heading level={ 6 }>这是H6标题</Heading>
