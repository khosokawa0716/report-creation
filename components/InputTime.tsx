import React from 'react'
import inputTimeStyles from '../styles/InputTime.module.scss'

interface InputProps {
  initValue: string
  type: 'hour' | 'minute'
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
export default function InputTime({
  initValue,
  type,
  handleChange,
}: InputProps) {
  const optionItems = () => {
    const hours = [...Array(24)].map((_, i) => i)
    const minutes = ['00', '15', '30', '45']
    const times = type === 'hour' ? hours : minutes
    return times.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ))
  }
  return (
    <>
      <select
        className={inputTimeStyles['com-input-time']}
        value={initValue}
        onChange={(e) => handleChange(e)}
      >
        {optionItems()}
      </select>
    </>
  )
}
