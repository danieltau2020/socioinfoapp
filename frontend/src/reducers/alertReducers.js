import {
  SET_ALERT,
  REMOVE_ALERT,
  SET_CONNECTION_ERROR_ALERT,
  REMOVE_CONNECTION_ERROR_ALERT
} from '../constants/alertConstants'

export const alertReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload)
    default:
      return state
  }
}

export const alertConnectionErrorReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case SET_CONNECTION_ERROR_ALERT:
      return [...state, payload]
    case REMOVE_CONNECTION_ERROR_ALERT:
      return state.filter((alert) => alert.id !== payload)
    default:
      return state
  }
}
