import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addPassword } from '../../store/action'
import './addPassword.scss'
import Header from '../../components/Header'

export default function AddPassword (props) {

  const dispatch = useDispatch()
  const history = useHistory()
  const [nameData, setNameData] = useState('')
  const [urlData, setUrlData] = useState('')
  const [passwordData, setPasswordData] = useState('')

  const [passHaveNumber, setPassHaveNumber] = useState(false)
  const [passHaveUppercase, setPassHaveUppercase] = useState(false)
  const [passHaveLowercase, setPassHaveLowercase] = useState(false)
  const [passHaveSpesial, setPassHaveSpesial] = useState(false)
  const [passHaveLength, setPassHaveLength] = useState(false)

  function changeNameHandle (name) {
    setNameData(name)
  }

  function changeUrlHandle (url) {
    setUrlData(url)
  }

  function changePasswordHandle (password) {
    setPasswordData(password)
  }

  useEffect(() => {
    passNumber()
    passUppercase()
    passLowercase()
    passSpesial()
    passLength()
  },[passwordData])

  function passNumber () {
    if(passwordData.match(/[0-9]/)){
      setPassHaveNumber(true)
    }
    else{
      setPassHaveNumber(false)
    }
  }

  function passUppercase () {
    if(passwordData.match(/[A-Z]/)){
      setPassHaveUppercase(true)
    }
    else{
      setPassHaveUppercase(false)
    }
  }

  function passLowercase () {
    if(passwordData.match(/[a-z]/)){
      setPassHaveLowercase(true)
    }
    else{
      setPassHaveLowercase(false)
    }
  }

  function passSpesial () {
    if(passwordData.match(/[!@#\$%\^&]/)){
      setPassHaveSpesial(true)
    }
    else{
      setPassHaveSpesial(false)
    }
  }

  function passLength () {
    if(passwordData.length >= 6){
      setPassHaveLength(true)
    }
    else{
      setPassHaveLength(false)
    }
  }

  function showOrHidePassword () {
    const password = document.getElementById('password');
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  function addPasswordProcess () {
    if(urlData && nameData && passwordData){
      dispatch(addPassword(urlData,nameData,passwordData))
      .then(() => {
        history.push('/')
      })
    }
    else{
      console.log('all field musf fullfill')
    }
  }

  return (
    <div data-testid="addPassword-page">
      <div className="container">
        <Header />
        <div className="row mt-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="add-password-container">
                  <p data-testid="addPassword-title" className="add-password-container--title">Add new password | or anything what you like</p>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div data-testid="addPassword-form" className="add-password-container--input"> 
                        <div data-testid="addPassword-url" className="add-password-container--w100">
                          <p>URL:</p>
                          <input value={urlData} onChange={ e => changeUrlHandle(e.target.value) } placeholder="facebook.com" type="text" required className="add-password-container--input--input-bar"/>
                        </div>
                        <div data-testid="addPassword-username" className="add-password-container--w100">
                          <p>Username:</p>
                          <input value={nameData} onChange={ e => changeNameHandle(e.target.value) } placeholder="username" type="text" required className="add-password-container--input--input-bar"/>
                        </div>
                        <div data-testid="addPassword-password" className="add-password-container--w100">
                          <p>Password:</p>
                          <input id="password" value={passwordData} onChange={ e => changePasswordHandle(e.target.value) } className="add-password-container--input--input-bar" required placeholder="master password" type="password"/>
                          <div className="mt-3">
                            <input type="checkbox" onChange={ showOrHidePassword } /> Show password
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="add-password-container--widget pl-4">
                        <div className="add-password-container--widget--widget-title">
                          Your Password Strength Analysis :
                        </div>
                        <div className="add-password-container--widget--widget-card" style={{ backgroundColor: passHaveUppercase ? 'green' : 'grey' }}>
                          <p className="m-0">Have uppercase character</p>
                        </div>
                        <div className="add-password-container--widget--widget-card" style={{ backgroundColor: passHaveLowercase ? 'green' : 'grey' }}>
                          <p className="m-0">Have lowercase character</p>
                        </div>
                        <div className="add-password-container--widget--widget-card" style={{ backgroundColor: passHaveSpesial ? 'green' : 'grey' }}>
                          <p className="m-0">Have at least one special character (!@#\$%\^&)</p>
                        </div>
                        <div className="add-password-container--widget--widget-card" style={{ backgroundColor: passHaveNumber ? 'green' : 'grey' }}>
                          <p className="m-0">Have at least one number</p>
                        </div>
                        <div className="add-password-container--widget--widget-card" style={{ backgroundColor: passHaveLength ? 'green' : 'grey' }}>
                          <p className="m-0">At least 6 character length</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center add-password-container">
                      <button onClick={ addPasswordProcess } className="add-password-container--add-password-btn mr-2">Add Password</button>
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