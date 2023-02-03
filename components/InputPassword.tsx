import React from 'react'
import inputStyles from '../styles/InputText.module.scss'

interface InputProps {
  labelText: string
  initValue: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputText({
  labelText,
  initValue,
  handleChange,
}: InputProps) {
  return (
    <label className={`${inputStyles['com-input']}  ${inputStyles.blue}`}>
      {labelText}
      <input
        type="password"
        minLength={0}
        maxLength={256}
        value={initValue}
        onChange={(e) => handleChange(e)}
      />
    </label>
  )
}
