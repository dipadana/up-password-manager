import React from 'react'
import './header.scss'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Header (props) {

  const history = useHistory()

  return(
    <>
        <div className="d-flex justify-content-between">
          <h1 className="mb-3 title" data-testid="home-title" onClick={ (e) => history.push('/') }>YourPass</h1>
          <Button />
        </div>
        <div className="nav-line"></div>
    </>
  )
}

function Button (props) {

  const loginStatus = useSelector(state => state.login.loginStatus)
  const history = useHistory()
  const dispatch = useDispatch()

  function logout () {
    localStorage.clear()
    dispatch({ type: 'CHANGE_LOGIN_STATUS', payload: false })
    dispatch({ type: 'CHANGE_PASSWORD_DATA', payload: [] })
    history.push('/login')
  }

  function gotoCreatePassword () {
    history.push('/addPassword')
  }

  if(loginStatus){
    return (
      <div className="d-flex">
        <div><h1 onClick={ gotoCreatePassword } data-testid="home-add-sign" className="add-password-button mr-2">+</h1></div>
        <div><h1 onClick={ logout } data-testid="home-logout-sign" className="add-password-button">-></h1></div>
      </div>
    )
  }
  else{
    return <div className="d-flex"></div>
  }
}