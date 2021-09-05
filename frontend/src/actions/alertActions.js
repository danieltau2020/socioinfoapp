import { v4 as uuid } from 'uuid'
import {
  SET_ALERT,
  REMOVE_ALERT,
  SET_CONNECTION_ERROR_ALERT,
  REMOVE_CONNECTION_ERROR_ALERT
} from '../constants/alertConstants'

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid()

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  })

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 1500)
}

export const setConnectionErrorAlert = (msg, alertType, id) => (dispatch) => {
  dispatch({
    type: SET_CONNECTION_ERROR_ALERT,
    payload: { msg, alertType, id }
  })
}

export const removeConnectionErrorAlert = () => (dispatch) => {
  dispatch({
    type: REMOVE_CONNECTION_ERROR_ALERT,
    payload: '1'
  })
}
