import axios from '../../api/server'
import swal from 'sweetalert2'

export const loginProcess = (email,password,history,location) => async dispatch => {
  try{
    const { data } = await axios({
      method: 'post',
      url: '/users/login',
      data: {
        email, password
      }
    })
    localStorage.setItem('access_token',data.access_token)
    localStorage.setItem('email', data.email)
    await dispatch({ type: 'CHANGE_LOGIN_STATUS', payload: true })
    history.replace(location.state ? location.state.from : '/')
  }
  catch(err){
    swal.fire(err.response.data.message)
    console.log(err.response.data.message)
  }
}

export const fetchDataPassword = () => async dispatch => {
  try{
    const { data } = await axios({
      method: 'get',
      url: '/passwords',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    dispatch({ type: 'CHANGE_PASSWORD_DATA', payload: data })
    console.log(data)
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const addPassword = (urlData, nameData, passwordData) => async dispatch => {
  try{
    const { data } = await axios({
      method: 'post',
      url: '/passwords',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: {
        urlData, nameData, passwordData
      }
    })
    swal.fire('Password berhasil ditambahkan!')
  }
  catch(err){
    console.log(err.response)
    swal.fire(err.response.data.message)
  }
}

export const getPasswordDetail = (_id) => async dispatch => {
  try{
    const { data } = await axios({
      method: 'get',
      url: `/passwords/onepass/${_id}`,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    console.log(data)
    return data
  }
  catch(err){
    console.log(err.response)
  }
}

export const editPasswordProcess = (urlData, nameData, passwordData, _id) => async dispatch =>{
  try{
    const data = await axios({
      method: 'put',
      url: `/passwords/${_id}`,
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: {
        urlData, nameData, passwordData
      }
    })
  }
  catch(err){
    console.log(err)
  }
}

export const registerProcess = (username, email, password, history) => async dispatch => {
  try{
    const { data } = await axios({
      method: 'post',
      url: '/users/register',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: {
        username, email, password
      }
    })
    console.log(data)
    swal.fire("Register Succesfuly")
    history.push('/login')
  }
  catch(err){
    console.log(err.response.data.errors)
    swal.fire(err.response.data.errors[0])
  }
}

export const deleteProcess = (_id) => async dispatch => {
  try{
    const { data } = await axios({
      method: 'delete',
      url: `/passwords/${_id}`,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
    console.log(data)
    swal.fire('Success delete password!')
  }
  catch(err){
    console.log(err.response)
    swal.fire(err.response.data.message)
  }
}