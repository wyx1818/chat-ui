import React from 'react'
import PropTypes from 'prop-types'

import StyledFilterList from './style'
import Input from '../Input'
import Filter from '../Filter'
import Select from '../Select'
import Option from '../Option'
import Button from '../Button'
import Icon from '../Icon'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'

function FilterList({
  options,
  filterLabel = '排序',
  filterValue,
  actionLabel,
  children,
  setSortType,
  ...rest
}) {
  const handleChange = (e) => {
    setSortType(e.target.value)
  }

  return (
    <StyledFilterList {...rest}>
      <Input.Search />
      <Filter style={{ padding: '20px 0' }}>
        {options && (
          <Filter.Filters label={filterLabel}>
            <Select defaultValue={filterValue} onChange={handleChange}>
              {options.map((option, index) => (
                <Option key={index} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Filter.Filters>
        )}

        {actionLabel && (
          <Filter.Action label={actionLabel}>
            <Button>
              <Icon icon={Plus} width={12} height={12} />
            </Button>
          </Filter.Action>
        )}
      </Filter>
      {children}
    </StyledFilterList>
  )
}

FilterList.propTypes = {
  children: PropTypes.any, // 加载具体的列表
  options: PropTypes.array,
  filterLabel: PropTypes.string,
  actionLabel: PropTypes.string,
  filterValue: PropTypes.string,
}

export default FilterList
