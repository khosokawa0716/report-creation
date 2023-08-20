import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from '../../components/Checkbox'
import styles from '../styles/Button.module.scss'

describe('Checkbox component', () => {
  test('renders the checkbox with the correct text', () => {
    const labelText = 'Check me'
    const { getByText } = render(
      <Checkbox
        labelText={labelText}
        initChecked={false}
        handleChange={() => {}}
      />,
    )

    const checkbox = getByText(labelText)
    expect(checkbox).toBeInTheDocument()
  })

  test('calls the handleChange function when clicked', () => {
    const handleChange = jest.fn()
    const { getByText } = render(
      <Checkbox
        labelText="Check me"
        initChecked={false}
        handleChange={handleChange}
      />,
    )

    const checkbox = getByText('Check me')
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalled()
  })
})
