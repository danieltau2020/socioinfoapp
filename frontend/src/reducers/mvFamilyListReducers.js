import {
  MV_FAMILY_LIST_REQUEST,
  MV_FAMILY_LIST_SUCCESS,
  MV_FAMILY_LIST_FAIL
} from '../constants/mvFamilyListConstants'

export const mvFamilyListReducer = (
  state = { loading: false, mvFamily: {} },
  action
) => {
  switch (action.type) {
    case MV_FAMILY_LIST_REQUEST:
      return {
        loading: true,
        mvFamily: {}
      }
    case MV_FAMILY_LIST_SUCCESS:
      return {
        loading: false,
        mvFamily: action.payload
      }
    case MV_FAMILY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
