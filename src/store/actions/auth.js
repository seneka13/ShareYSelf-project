const endpoint = 'http://localhost:5432'

// функция проверят успешно ли отправился запрос
const checkResponse = (response, errText) => {
  if (!response.ok) throw new Error(errText)
  return response.json()
}
// функция вытаскивает из объекта ошибки строку
const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const getData = () => (dispatch) => {
  dispatch({ type: 'DATA_LOADING' })
  fetch(`${endpoint}/data`, {
    method: 'GET',
    headers: {
      'X-Auth': localStorage.getItem('token'),
    },
  })
    .then((response) => checkResponse(response, 'Ошибка загрузки'))
    .then(({ text }) => {
      dispatch({ type: 'DATA_SUCCESS', text })
    })
    .catch((error) => {
      dispatch({ type: 'DATA_FAILED', error: errorHandler(error) })
    })
}

export const loginAction = (body) => (dispatch) => {
  dispatch({ type: 'LOGIN_LOADING' })
  fetch(`${endpoint}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, 'Ошибка пароля/логина'))
    .then(({ user }) => {
      window.localStorage.setItem('token', user.token)
      dispatch({ type: 'LOGIN_SUCCESS' })
    })
    .catch((error) => {
      dispatch({ type: 'LOGIN_FAILED', error: errorHandler(error) })
    })
}

export const signinAction = (body) => (dispatch) => {
  dispatch({ type: 'SIGNUP_LOADING' })
  fetch(`${endpoint}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, 'Ошибка пароля/логина'))
    .then(({ user }) => {
      window.localStorage.setItem('token', user.token)
      dispatch({ type: 'SIGNUP_SUCCESS' })
    })
    .catch((error) => {
      dispatch({ type: 'SIGNUP_FAILED', error: errorHandler(error) })
    })
}
