import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './index'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../../store'

jest.mock('../../store/action')

describe('Home testing', () => {
  test('Home rendered withour crashing', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <Provider store={Store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    )
    
      let btn = getByTestId('to-register-btn')

    expect(getByTestId('login-page')).toBeInTheDocument()
    expect(getByTestId('login-title')).toBeInTheDocument()
    expect(getByTestId('login-form')).toBeInTheDocument()
    expect(getByTestId('login-email-form')).toBeInTheDocument()
    expect(getByTestId('login-password-form')).toBeInTheDocument()
    expect(getByTestId('login-btn')).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(getByTestId('home-title')).toHaveTextContent(/yourpass/i)
    // expect(getByTestId('home-add-sign')).toBeInTheDocument()

    // fireEvent 
    fireEvent.click(btn)
    // expect(getByTestId('register-page')).not.toBeInTheDocument()
    // debug()

  })
})