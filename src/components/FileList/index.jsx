import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledFileList, { Files } from './style'
import FilterList from '../FilterList'
import FileCard from '../FileCard'
import useStaggeredList from '../../hooks/useStaggeredList'

function FileList({ children, ...rest }) {
  const trailAnimations = useStaggeredList(10)

  return (
    <StyledFileList {...rest}>
      <FilterList options={['最新文件优先', '按文件名排序']}>
        <Files>
          {new Array(10).fill(0).map((_, index) => (
            <animated.div key={index} style={trailAnimations[index]}>
              <FileCard key={index} />
            </animated.div>
          ))}
        </Files>
      </FilterList>
    </StyledFileList>
  )
}

FileList.propTypes = {
  children: PropTypes.any,
}

export default FileList
