import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonIcon from '../../components/ButtonIcon'

describe('Button component', () => {
  const handleClick = jest.fn()
  it('renders correctly with default props', () => {
    const { getByRole } = render(
      <ButtonIcon iconType="add" handleClick={handleClick} />,
    )
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).not.toBeDisabled()
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  const handleClickForDisabled = jest.fn()
  it('renders correctly when disabled', () => {
    const { getByRole } = render(
      <ButtonIcon
        iconType="delete"
        handleClick={handleClickForDisabled}
        disabled={true}
      />,
    )
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toBeDisabled()
    fireEvent.click(buttonElement)
    expect(handleClickForDisabled).not.toHaveBeenCalled()
  })
})
