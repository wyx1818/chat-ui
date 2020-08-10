import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledFileList, { Files } from './style'
import FilterList from '../FilterList'
import FileCard from '../FileCard'
import useStaggeredList from '../../hooks/useStaggeredList'
import fileData from 'data/files'

function FileList({ children, ...rest }) {
  const trailAnimations = useStaggeredList(10)

  return (
    <StyledFileList {...rest}>
      <FilterList options={['最新文件优先', '按文件名排序']}>
        <Files>
          {fileData.map(({ id, name, size, type, updateAt }, index) => (
            <animated.div key={id} style={trailAnimations[index]}>
              <FileCard
                key={id}
                name={name}
                size={size}
                type={type}
                updateAt={updateAt}
              />
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
