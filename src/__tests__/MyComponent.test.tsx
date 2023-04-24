import React from 'react'
import { render } from '@testing-library/react'
import MyComponent from '../../components/MyComponent'

describe('MyComponent', () => {
  it('renders the component', () => {
    const { getByText } = render(<MyComponent />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
