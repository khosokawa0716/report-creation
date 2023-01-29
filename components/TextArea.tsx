import React from 'react'
import textAreaStyles from '../styles/TextArea.module.scss'

interface InputProps {
  borderColor: 'blue' | 'gray'
  labelText: string
  isDisabled?: boolean
  maxLength?: number
  initValue: string
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
export default function TextArea({
  borderColor,
  labelText,
  isDisabled = false,
  maxLength = 5000,
  initValue,
  handleChange,
}: InputProps) {
  return (
    <label
      className={`${textAreaStyles['com-textarea']}  ${
        borderColor === 'blue' ? textAreaStyles.blue : textAreaStyles.gray
      }`}
    >
      {labelText}
      <textarea
        value={initValue}
        disabled={isDisabled}
        minLength={0}
        maxLength={maxLength}
        onChange={(e) => handleChange(e)}
      />
    </label>
  )
}
