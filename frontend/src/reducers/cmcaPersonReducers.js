import {
  CMCA_PERSON_LIST_REQUEST,
  CMCA_PERSON_LIST_SUCCESS,
  CMCA_PERSON_LIST_FAIL,
  CMCA_PERSON_LIST_RESET
} from '../constants/cmcaPersonConstants'

export const cmcaPersonListReducer = (
  state = { loading: false, cmcaPersons: [] },
  action
) => {
  switch (action.type) {
    case CMCA_PERSON_LIST_REQUEST:
      return {
        loading: true,
        cmcaPersons: []
      }
    case CMCA_PERSON_LIST_SUCCESS:
      return {
        loading: false,
        cmcaPersons: action.payload
      }
    case CMCA_PERSON_LIST_FAIL:
      return {
        loading: false,
        cmcaPersons: [],
        error: action.payload
      }
    case CMCA_PERSON_LIST_RESET:
      return {
        cmcaPersons: []
      }
    default:
      return state
  }
}
