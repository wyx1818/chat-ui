import React from 'react'
import PropTypes from 'prop-types'

import StyledFileCard, { FileIcon, FileName, FileSize, Options,Time } from './style'
import {ReactComponent as FileZip} from 'assets/icons/fileZip.svg'
import {ReactComponent as FileExcel} from 'assets/icons/fileExcel.svg'
import {ReactComponent as FileWorld} from 'assets/icons/fileWord.svg'
import {ReactComponent as FilePPT} from 'assets/icons/filePpt.svg'
import {ReactComponent as FileImage} from 'assets/icons/fileImage.svg'
import {ReactComponent as FilePdf} from 'assets/icons/filePdf.svg'
import {ReactComponent as OptionsIcon} from 'assets/icons/options.svg'
import Icon from '../Icon'

const fileIcons = {
  zip: FileZip,
  image: FileImage,
  pdf: FilePdf,
  word: FileWorld,
  excel: FileExcel,
  ppt: FilePPT
}

function FileCard ({ name, size, type, updateAt,children, ...rest }) {
  return (
    <StyledFileCard { ...rest }>
      <FileIcon icon={fileIcons[type]}/>
      <FileName>{name}</FileName>
      <FileSize>{size}</FileSize>
      <Options>
        <Icon icon={OptionsIcon} opacity={0.3}/>
      </Options>
      <Time>{updateAt}</Time>
    </StyledFileCard>
  )
}

FileCard.propTypes = {
  children: PropTypes.any
}

export default FileCard
