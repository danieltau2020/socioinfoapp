import { SET_ALERT, REMOVE_ALERT } from '../constants/alertConstants'

export const alertReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT:
      return [...state, action.payload]
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload)

    default:
      return state
  }
}
