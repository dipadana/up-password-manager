import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddPassword from './AddPassword'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../../store'

// jest.mock('../../store/action')

describe('Home testing', () => {
  test('Home rendered withour crashing', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <Provider store={Store}>
        <Router>
          <AddPassword />
        </Router>
      </Provider>
    )
    
    expect(getByTestId('addPassword-page')).toBeInTheDocument()
    expect(getByTestId('home-title')).toHaveTextContent(/yourpass/i)
    expect(getByTestId('addPassword-title')).toBeInTheDocument()
    expect(getByTestId('addPassword-form')).toBeInTheDocument()
    expect(getByTestId('addPassword-url')).toBeInTheDocument()
    expect(getByTestId('addPassword-username')).toBeInTheDocument()
    expect(getByTestId('addPassword-password')).toBeInTheDocument()

  })
})