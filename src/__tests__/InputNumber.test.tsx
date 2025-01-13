import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputNumber from '@components/common/InputNumber'
import styles from '@styles/Button.module.scss'

describe('InputNumber component', () => {
  test('renders the inputNumber with the correct text', () => {
    const labelText = 'Check me'
    const { getByText } = render(
      <InputNumber
        labelText={labelText}
        initValue={'0'}
        isDisabled={false}
        handleChange={() => {}}
      />,
    )

    const inputNumber = getByText(labelText)
    expect(inputNumber).toBeInTheDocument()
  })

  test('calls the handleChange function when value changed', () => {
    const handleChange1 = jest.fn()
    const { getByLabelText } = render(
      <InputNumber
        labelText="Test Input"
        initValue="0"
        isDisabled={false}
        handleChange={handleChange1}
      />,
    )
    const input = getByLabelText('Test Input')
    fireEvent.change(input, { target: { value: '5' } })
    expect(handleChange1).toHaveBeenCalled()
  })

  test('renders with disabled state when isDisabled is true', () => {
    const { getByLabelText } = render(
      <InputNumber
        labelText="Test Input1"
        initValue="0"
        isDisabled={true}
        handleChange={() => {}}
      />,
    )

    const input = getByLabelText('Test Input1')

    // 無効化された状態であることを確認
    expect(input).toBeDisabled()
  })
})
