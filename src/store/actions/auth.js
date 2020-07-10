import {
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_FAILED,

  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,

  USER_LOGOUT } from '../constants'

const endpoint = 'http://localhost:8220'

// функция проверят успешно ли отправился запрос
const checkResponse = (response, errText) => {
  if (!response.ok) throw new Error(errText)
  return response.json()
}
// функция вытаскивает из объекта ошибки строку
const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const getData = () => (dispatch) => {
  dispatch({ type: USER_DATA_LOADING })
  fetch(`${endpoint}/data`, {
    method: 'GET',
    headers: {
      'X-Auth': localStorage.getItem('token'),
    },
  })
    .then((response) => checkResponse(response, 'Ошибка загрузки'))
    .then(({ data }) => {
      dispatch({ type: USER_DATA_SUCCESS, data })
    })
    .catch((error) => {
      dispatch({ type: USER_DATA_FAILED, error: errorHandler(error) })
    })
}

export const loginAction = (body) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING })
  fetch(`${endpoint}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, 'Ошибка пароля/логина'))
    .then(({ user }) => {
      window.localStorage.setItem('token', user.token)
      dispatch({ type: LOGIN_SUCCESS, user: user.data })
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILED, error: errorHandler(error) })
    })
}

export const signupAction = (body) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING })
  fetch(`${endpoint}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, 'Такой пользователь уже существует'))
    .then(({ user }) => {
      window.localStorage.setItem('token', user.token)
      dispatch({ type: SIGNUP_SUCCESS, user: user.data })
    })
    .catch((error) => {
      dispatch({ type: SIGNUP_FAILED, error: errorHandler(error) })
    })
}

export const userLogOut = () => ({
  type: USER_LOGOUT,
})
