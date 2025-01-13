import React from 'react'
import buttonStyles from '@styles/components/common/ButtonIcon.module.scss'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ButtonProps {
  iconType: 'add' | 'delete' | 'edit' | 'save' | 'cancel'
  handleClick: (event: any) => void
  disabled?: boolean
}

const iconText = {
  add: faPlus,
  delete: faTrash,
  edit: faEdit,
  save: faSave,
  cancel: faTimes,
}

export default function Button({
  iconType,
  handleClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyles['com-button-icon']} ${
        buttonStyles[iconType]
      } ${disabled ? buttonStyles.disabled : ''}`}
      disabled={disabled}
      onClick={(e) => handleClick(e)}
    >
      <FontAwesomeIcon icon={iconText[iconType]} />
    </button>
  )
}
