import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../../components/Button'
import styles from '../styles/Button.module.scss'

describe('Button component', () => {
  test('renders the button with the correct text', () => {
    const buttonText = 'Click me'
    const { getByText } = render(
      <Button backGroundColor="blue" handleClick={() => {}}>
        {buttonText}
      </Button>,
    )

    const button = getByText(buttonText)
    expect(button).toBeInTheDocument()
  })

  test('calls the handleClick function when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button backGroundColor="blue" handleClick={handleClick}>
        Click me
      </Button>,
    )

    const button = getByText('Click me')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })

  test('applies the "small" class when isSmall is true', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Button backGroundColor="blue" handleClick={handleClick} isSmall>
        Click me
      </Button>,
    )

    expect(container.querySelector('.com-button.small')).toBeInTheDocument()
  })

  test('applies the "disabled" class when disabled is true', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Button backGroundColor="blue" handleClick={handleClick} disabled>
        Click me
      </Button>,
    )

    expect(container.querySelector('.com-button.disabled')).toBeInTheDocument()
  })

  test('"disabled" not call click event', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button backGroundColor="blue" handleClick={handleClick} disabled>
        Click me
      </Button>,
    )

    const button = getByText('Click me')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })
})
