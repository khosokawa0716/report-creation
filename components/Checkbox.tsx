import React from 'react'
import checkboxStyles from '../styles/Checkbox.module.scss'

interface CheckboxProps {
  labelText: string
  initChecked: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Checkbox({
  labelText,
  initChecked,
  handleChange,
}: CheckboxProps) {
  return (
    <label className={checkboxStyles['com-checkbox']}>
      {labelText}
      <input
        type="checkbox"
        checked={initChecked}
        onChange={(e) => handleChange(e)}
      />
    </label>
  )
}
