import { CHANGE_PASSWORD_DATA } from '../constant'

const stateData = {
  passwordData: []
}

export default function passwordReducer(state = stateData, action) {
  switch (action.type) {
    case CHANGE_PASSWORD_DATA :
      return {
        ...state,
        passwordData: action.payload
      }
    default :
      return state
  }
}