import React, { useState } from 'react'
import './login.scss'
import Header from '../../components/Header'
import { useDispatch } from 'react-redux'
import { loginProcess } from '../../store/action'
import { useHistory, useLocation } from 'react-router-dom'

export default function Login (props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  function handleLoginProcess () {
    dispatch(loginProcess(email,password,history,location))
  }

  return (
    <div data-testid="login-page">
      <div className="container">
        <Header />
        <div className="row mt-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="login-container">
                  <p data-testid="login-title" className="login-container--login-title">Login YourPass</p>
                  <form data-testid="login-form" onSubmit={(e) => {
                      e.preventDefault()
                      handleLoginProcess()
                    }} className="login-container--input">
                    <div data-testid="login-email-form" className="login-container--w100">
                      <p>Email:</p>
                      <input value={ email }  onChange={ (e) => {setEmail(e.target.value) }} placeholder="dipadana@gmail.com" type="email" required className="login-container--input--input-bar"/>
                    </div>
                    <div data-testid="login-password-form" className="login-container--w100 mt-3">
                      <p>Password:</p>
                      <input value={ password } onChange={ (e) => {setPassword(e.target.value) }} className="login-container--input--input-bar" required placeholder="master password" type="password"/>
                    </div>
                    <div>
                      <button data-testid="login-btn"  type="submit" className="login-container--input--login-btn mr-2">Login</button>
                      <button data-testid="to-register-btn" onClick={ e => { history.push('/register') }} className="login-container--input--register-btn">Register</button>                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 