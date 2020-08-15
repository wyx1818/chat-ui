import React from 'react'
import PropTypes from 'prop-types'

import StyledInputText, { InputUnderline } from './style'
import LabelContainer from '../../LabelContainer'

function InputText({
  label,
  type,
  direct = 'column',
  placeholder = '请输入内容',
  defaultValue,
  ...rest
}) {
  const input = (
    <InputUnderline
      type="text"
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )

  if (type === 'underline') {
    return (
      <StyledInputText {...rest}>
        {label ? (
          <LabelContainer label={label} direct={direct}>
            {input}
          </LabelContainer>
        ) : (
          input
        )}
      </StyledInputText>
    )
  }

  return input
}

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['underline', 'normal']),
  direct: PropTypes.oneOf(['row', 'column']),
  placeholder: PropTypes.string,
}

export default InputText
