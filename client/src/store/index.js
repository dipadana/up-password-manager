import { createStore, applyMiddleware, combineReducers } from 'redux'
import { loginReducer, passwordReducer } from './reducer'
import thunk from 'redux-thunk'

let reducer = combineReducers({
  login: loginReducer,
  password: passwordReducer
})

let store = createStore (reducer, applyMiddleware(
  thunk
))

export default store
