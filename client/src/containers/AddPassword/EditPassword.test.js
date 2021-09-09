import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EditPassword from './EditPassword'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../../store'

// jest.mock('../../store/action')

describe('Home testing', () => {
  test('Home rendered withour crashing', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <Provider store={Store}>
        <Router>
          <EditPassword />
        </Router>
      </Provider>
    )
    
    expect(getByTestId('editPassword-page')).toBeInTheDocument()
    expect(getByTestId('home-title')).toHaveTextContent(/yourpass/i)
    expect(getByTestId('editPassword-title')).toBeInTheDocument()
    expect(getByTestId('editPassword-form')).toBeInTheDocument()
    expect(getByTestId('editPassword-url')).toBeInTheDocument()
    expect(getByTestId('editPassword-username')).toBeInTheDocument()
    expect(getByTestId('editPassword-password')).toBeInTheDocument()

  })
})