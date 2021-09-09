import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './index'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../../store'

// jest.mock('../../store/action')

describe('Home testing', () => {
  test('Home rendered withour crashing', () => {
    const { debug, getByTestId, queryAllByTestId } = render(
      <Provider store={Store}>
        <Router>
          <Card />
        </Router>
      </Provider>
    )
    
    expect(getByTestId('card')).toBeInTheDocument()
    expect(getByTestId('card-img')).toBeInTheDocument()
    expect(getByTestId('card-edit-btn')).toBeInTheDocument()
    expect(getByTestId('card-url')).toBeInTheDocument()
    expect(getByTestId('card-username')).toBeInTheDocument()

  })
})