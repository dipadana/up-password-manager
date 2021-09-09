import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Register from './index'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../../store'

describe('Home testing', () => {
  test('Home rendered withour crashing', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <Provider store={Store}>
        <Router>
          <Register />
        </Router>
      </Provider>
    )
    
    expect(getByTestId('register-page')).toBeInTheDocument()
    expect(getByTestId('register-title')).toHaveTextContent(/yourpass/i)
    expect(getByTestId('home-title')).toHaveTextContent(/yourpass/i)
    // expect(getByTestId('home-add-sign')).toBeInTheDocument()

  })
})