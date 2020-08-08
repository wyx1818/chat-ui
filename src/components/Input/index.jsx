import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'
import StyledInput, { InputContainer, Prefix, Suffix } from './style'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { useTheme } from 'styled-components'
import InputText from './InputText'

/**
 * 输入框组件
 * @param placeholder 占位符
 * @param prefixIcon 前面的图标
 * @param suffixIcon 后面的图标
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Input({
  placeholder = '请输入内容',
  prefixIcon,
  suffixIcon,
  ...rest
}) {
  return (
    <InputContainer {...rest}>
      {prefixIcon && <Prefix>{prefixIcon}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffixIcon && <Suffix>{suffixIcon}</Suffix>}
    </InputContainer>
  )
}

/**
 * 搜索框组件
 * @param placeholder 占位符
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Search({ placeholder = '请输入内容', ...rest }) {
  const theme = useTheme()
  return (
    <Input
      placeholder={placeholder}
      prefixIcon={
        <Icon icon={SearchIcon} width={18} height={18} color={theme.grayDark} />
      }
      {...rest}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  prefixIcon: PropTypes.any,
  suffixIcon: PropTypes.any,
}

// 将 Search 作为自组件导出
Input.Search = Search
Input.Text = InputText

export default Input
