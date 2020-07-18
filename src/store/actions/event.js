import {
  GET_EVENT_LOADING,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAILED,

  CREATE_EVENT_LOADING,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILED,
  EVENT_SUCCESS_RESET,

  DELETE_EVENT_LOADING,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILED,

  EDIT_EVENT_LOADING,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAILED,
} from '../constants'

const endpoint = 'https://polar-brook-40910.herokuapp.com'

// функция проверят успешно ли отправился запрос
const checkResponse = (response, errText) => {
  if (!response.ok) throw new Error(errText)
  return response.json()
}
// функция вытаскивает из объекта ошибки строку
const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const getEvents = () => (dispatch) => {
  dispatch({ type: GET_EVENT_LOADING })
  fetch(`${endpoint}/get-events`)
    .then((response) => checkResponse(response, 'Ошибка загрузки событий'))
    .then((data) => {
      dispatch({ type: GET_EVENT_SUCCESS, data })
    })
    .catch((error) => {
      dispatch({ type: GET_EVENT_FAILED, error: errorHandler(error) })
    })
}

export const createEvent = (body) => (dispatch) => {
  dispatch({ type: CREATE_EVENT_LOADING })
  fetch(`${endpoint}/create-event`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, 'Заполните форму'))
    .then(() => {
      dispatch({ type: CREATE_EVENT_SUCCESS })
    })
    .catch((error) => {
      dispatch({ type: CREATE_EVENT_FAILED, error: errorHandler(error) })
    })
}

export const deleteEvent = (id) => (dispatch) => {
  dispatch({ type: DELETE_EVENT_LOADING })
  fetch(`${endpoint}/delete-event/${id}`, {
    method: 'DELETE',
  })
    .then((response) => checkResponse(response, 'Удаление невозможно'))
    .then(() => {
      dispatch({ type: DELETE_EVENT_SUCCESS })
    })
    .catch((error) => {
      dispatch({ type: DELETE_EVENT_FAILED, error: errorHandler(error) })
    })
}

export const editEvent = (id, body) => (dispatch) => {
  dispatch({ type: EDIT_EVENT_LOADING })
  fetch(`${endpoint}/edit-event/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, 'Изменение невозможно'))
    .then(() => {
      dispatch({ type: EDIT_EVENT_SUCCESS })
    })
    .catch((error) => {
      dispatch({ type: EDIT_EVENT_FAILED, error: errorHandler(error) })
    })
}

export const succesReset = () => ({
  type: EVENT_SUCCESS_RESET,
})
