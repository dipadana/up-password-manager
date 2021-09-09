import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './index'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../../store'

jest.mock('../../store/action')

describe('Home testing', () => {
  test('Home rendered withour crashing', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <Provider store={Store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    )
    
    expect(getByTestId('home-page')).toBeInTheDocument()
    expect(getByTestId('home-title')).toHaveTextContent(/yourpass/i)
    expect(queryAllByTestId('home-card-child')).toHaveLength(0)
    // expect(getByTestId('home-add-sign')).toHaveTextContent('+')
    // expect(getByTestId('home-logout-sign')).toBeInTheDocument()

  })
})