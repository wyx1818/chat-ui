import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StyledEditProfile from './style'
import Profile from '../Profile'

function EditProfile({ children, ...rest }) {
  // 控制编辑页面显隐
  const [showEdit, setShowEdit] = useState(false)

  if (!showEdit) {
    return (
      <Profile
        onEdit={() => setShowEdit(true)}
        showEditBtn
        showCloseIcon={false}
      />
    )
  }
  return <StyledEditProfile {...rest}>{children}</StyledEditProfile>
}

EditProfile.propTypes = {
  children: PropTypes.any,
}

export default EditProfile
