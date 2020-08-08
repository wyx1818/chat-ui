import React from 'react'
import PropTypes from 'prop-types'

import StyledRadio, { Circle, RadioButton, StyledRadioGroup } from './style'
import LabelContainer from '../LabelContainer'

function Radio({ children, name, ...rest }) {
  return (
    <StyledRadio {...rest}>
      {children}
      <RadioButton name={name} />
      <Circle />
    </StyledRadio>
  )
}

function RadioGroup({label, children, ...rest}) {
  return (
    <LabelContainer label={label}>
      <StyledRadioGroup {...rest}>{children}</StyledRadioGroup>
    </LabelContainer>
  )
}

Radio.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
}

RadioGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
}

Radio.Group = RadioGroup

export default Radio
