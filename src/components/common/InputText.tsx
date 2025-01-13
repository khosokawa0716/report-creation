import React from 'react'
import inputStyles from '@styles/components/common/InputText.module.scss'

interface InputProps {
  borderColor: 'blue' | 'gray'
  labelText: string
  maxLength?: number
  initValue: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputText({
  borderColor,
  labelText,
  maxLength = 5000,
  initValue,
  handleChange,
}: InputProps) {
  return (
    <label
      className={`${inputStyles['com-input']}  ${
        borderColor === 'blue' ? inputStyles.blue : inputStyles.gray
      }`}
    >
      {labelText}
      <input
        type="text"
        minLength={0}
        maxLength={maxLength}
        value={initValue}
        onChange={(e) => handleChange(e)}
      />
    </label>
  )
}
