import React from 'react'
import inputNumberStyles from '../styles/InputNumber.module.scss'

interface InputProps {
  labelText: string
  initValue: string
  isDisabled: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputNumber({
  labelText,
  initValue,
  isDisabled,
  handleChange,
}: InputProps) {
  return (
    <label className={inputNumberStyles['com-input']}>
      {labelText}
      <input
        type="number"
        min="0"
        max="99999"
        value={initValue}
        disabled={isDisabled}
        onChange={(e) => handleChange(e)}
      />
    </label>
  )
}
