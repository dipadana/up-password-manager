export const fetchDataPassword = () => async dispatch => {
  let data = [
              {
                  "_id": "5de3bc5b1930ed1c3474bca1",
                  "UserId": {
                      "_id": "5de39b931930ed1c3474bc9f",
                      "username": "dipadana",
                      "email": "dipadana@gmail.com",
                      "password": "$2a$10$BdC/ANoGLp6hjPxrqpiVe.Ge7/kAizO5gGicvS1uJCbp1iiKiaHsG",
                      "createdAt": "2019-12-01T10:53:07.649Z",
                      "updatedAt": "2019-12-01T10:53:07.649Z"
                  },
                  "passwordData": "123456",
                  "nameData": "dipadana",
                  "urlData": "twitter.com",
                  "createdAt": "2019-12-01T13:12:59.769Z",
                  "updatedAt": "2019-12-01T20:26:23.409Z"
              },
              {
                  "_id": "5de429482d200517936ee45e",
                  "UserId": {
                      "_id": "5de39b931930ed1c3474bc9f",
                      "username": "dipadana",
                      "email": "dipadana@gmail.com",
                      "password": "$2a$10$BdC/ANoGLp6hjPxrqpiVe.Ge7/kAizO5gGicvS1uJCbp1iiKiaHsG",
                      "createdAt": "2019-12-01T10:53:07.649Z",
                      "updatedAt": "2019-12-01T10:53:07.649Z"
                  },
                  "passwordData": "123!Pkmn",
                  "nameData": "dipadana",
                  "urlData": "facebook.com",
                  "createdAt": "2019-12-01T20:57:44.438Z",
                  "updatedAt": "2019-12-01T20:57:44.438Z"
              },
              {
                  "_id": "5de4298e2d200517936ee45f",
                  "UserId": {
                      "_id": "5de39b931930ed1c3474bc9f",
                      "username": "dipadana",
                      "email": "dipadana@gmail.com",
                      "password": "$2a$10$BdC/ANoGLp6hjPxrqpiVe.Ge7/kAizO5gGicvS1uJCbp1iiKiaHsG",
                      "createdAt": "2019-12-01T10:53:07.649Z",
                      "updatedAt": "2019-12-01T10:53:07.649Z"
                  },
                  "passwordData": "123456@#dA",
                  "nameData": "dipadana",
                  "urlData": "hacktiv8.com",
                  "createdAt": "2019-12-01T20:58:54.593Z",
                  "updatedAt": "2019-12-01T21:34:58.655Z"
              }
          ]
  dispatch({ type: 'CHANGE_PASSWORD_DATA', payload: data })
  return data
}

export const loginProcess = (email,password,history,location) => async dispatch => {

  let data = {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpcGFkYW5hIiwiZW1haWwiOiJkaXBhZGFuYUBnbWFpbC5jb20iLCJfaWQiOiI1ZGUzOWI5MzE5MzBlZDFjMzQ3NGJjOWYiLCJpYXQiOjE1NzUyNDQ3MDd9.uSMNpZuyNgXurMpUQwAmw6v8QdvkvZnJKhTc5VTCvC4",
      "username": "dipadana",
      "email": "dipadana@gmail.com"
  }

  localStorage.setItem('access_token',data.access_token)
  localStorage.setItem('email', data.email)
  await dispatch({ type: 'CHANGE_LOGIN_STATUS', payload: true })
  history.replace(location.state ? location.state.from : '/')
}