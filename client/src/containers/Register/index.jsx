import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerProcess } from '../../store/action'
import './register.scss'
import Header from '../../components/Header'
import swal from 'sweetalert2'

export default function Register (props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()
  

  function handleRegisterProcess () {
    console.log('masuk')
    console.log(email, password, username)
    dispatch(registerProcess(username,email,password,history))
  }

  return (
    <div data-testid="register-page">
      <div className="container">
        <Header />
        <div className="row mt-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="login-container">
                  <p data-testid="register-title" className="login-container--login-title">Register YourPass</p>
                  <div className="login-container--input"> 
                    <div className="login-container--w100">
                      <p>Email:</p>
                      <input value={ email }  onChange={ (e) => {setEmail(e.target.value) }} placeholder="dipadana@gmail.com" type="email" required className="login-container--input--input-bar"/>
                    </div>
                    <div className="login-container--w100">
                      <p>Name:</p>
                      <input value={ username } onChange={ (e) => {setUsername(e.target.value) }} placeholder="Dipadana Putu" type="name" required className="login-container--input--input-bar"/>
                    </div>
                    <div className="login-container--w100 mt-3">
                      <p>Master Password:</p>
                      <input value={ password } onChange={ (e) => {setPassword(e.target.value) }} className="login-container--input--input-bar" required placeholder="master password" type="password"/>
                    </div>
                    <div>
                      <button onClick={ e => handleRegisterProcess() } className="login-container--input--login-btn mr-2">Register</button>
                      <button onClick={ e => history.push('/login') } className="login-container--input--register-btn">Login</button>                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}