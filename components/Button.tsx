import React from 'react'
import buttonStyles from '../styles/Button.module.scss'

interface ButtonProps {
  backGroundColor: 'blue' | 'green' | 'red' | 'gray'
  handleClick: (event: any) => void
  children: string
  isSmall?: boolean
  disabled?: boolean
}
export default function Button({
  backGroundColor,
  handleClick,
  children,
  isSmall = false,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyles['com-button']} ${
        buttonStyles[backGroundColor]
      } ${isSmall ? buttonStyles.small : ''} ${
        disabled ? buttonStyles.disabled : ''
      }`}
      disabled={disabled}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  )
}
