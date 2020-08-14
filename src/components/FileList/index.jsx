import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import StyledFileList, { Files } from './style'
import FilterList from '../FilterList'
import FileCard from '../FileCard'
import useStaggeredList from '../../hooks/useStaggeredList'
import fileData from 'data/files'
import pinyin from 'pinyin'

// 将汉字转为拼音，方便后续排序
const dealData = fileData.map((data) => ({
  ...data,
  pinyin: pinyin(data.name).join(''),
}))

function FileList({ children, ...rest }) {
  const [sortType, setSortType] = useState('updatedAt')
  const trailAnimations = useStaggeredList(10)

  const filterData =
    sortType === 'pinyin'
      ? dealData.sort((m, n) => m[sortType].localeCompare(n[sortType]))
      : dealData.sort((m, n) => n[sortType] - m[sortType])

  return (
    <StyledFileList {...rest}>
      <FilterList
        options={[
          { label: '上传时间', value: 'updatedAt' },
          { label: '文件名', value: 'pinyin' },
        ]}
        filterValue={sortType}
        setSortType={setSortType}
      >
        <Files>
          {filterData.map(({ id, name, size, type, updateAt }, index) => (
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
