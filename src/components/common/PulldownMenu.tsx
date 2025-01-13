import React from 'react'
import pulldownMenuStyles from '@styles/components/common/PulldownMenu.module.scss'

type SelectOption = {
  label: string
  value: string
}
interface PulldownMenuProps {
  initValue: string
  isDisabled: boolean
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: Array<SelectOption>
}
export default function PulldownMenu({
  initValue,
  isDisabled,
  handleChange,
  options,
}: PulldownMenuProps) {
  const optionItems = options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ))
  return (
    <select
      className={pulldownMenuStyles['com-pulldown-menu']}
      value={initValue}
      disabled={isDisabled}
      onChange={(e) => handleChange(e)}
    >
      {optionItems}
    </select>
  )
}
