import {
  MV_PERSON_LIST_REQUEST,
  MV_PERSON_LIST_SUCCESS,
  MV_PERSON_LIST_FAIL,
  MV_PERSON_LIST_RESET
} from '../constants/mvPersonConstants'

export const mvPersonListReducer = (
  state = { loading: false, mvPersons: [] },
  action
) => {
  switch (action.type) {
    case MV_PERSON_LIST_REQUEST:
      return {
        loading: true,
        mvPersons: []
      }
    case MV_PERSON_LIST_SUCCESS:
      return {
        loading: false,
        mvPersons: action.payload
      }
    case MV_PERSON_LIST_FAIL:
      return {
        loading: false,
        mvPersons: [],
        error: action.payload
      }
    case MV_PERSON_LIST_RESET:
      return {
        mvPersons: []
      }
    default:
      return state
  }
}
