import React from 'react'
interface RangeProps {
  initValue: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Range({ initValue, handleChange }: RangeProps) {
  const options = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
  const optionItems = options.map((option, index) => (
    <option key={index} value={option} />
  ))
  return (
    <>
      <input
        type="range"
        step="5"
        list="range-list"
        value={initValue}
        onChange={(e) => handleChange(e)}
      />
      <datalist id="range-list">{optionItems}</datalist>
    </>
  )
}
