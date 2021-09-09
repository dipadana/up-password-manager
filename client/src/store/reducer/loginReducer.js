import { CHANGE_LOGIN_ID, CHANGE_LOGIN_NAME, CHANGE_LOGIN_STATUS } from '../constant'

const stateData = {
  loginStatus: false,
  loginName: '',
  login_id: ''
}

export default function loginReducer(state = stateData, action) {
  switch (action.type) {
    case CHANGE_LOGIN_STATUS :
      return {
        ...state,
        loginStatus: action.payload
      }
    case CHANGE_LOGIN_NAME :
      return {
        ...state,
        loginName: action.payload
      }
    case CHANGE_LOGIN_ID :
      return {
        ...state,
        login_id: action.payload 
      }
    default :
      return state
  }
}