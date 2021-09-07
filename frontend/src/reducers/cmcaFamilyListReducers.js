import {
  CMCA_FAMILY_LIST_REQUEST,
  CMCA_FAMILY_LIST_SUCCESS,
  CMCA_FAMILY_LIST_FAIL
} from '../constants/cmcaFamilyListConstants'

export const cmcaFamilyListReducer = (
  state = { loading: false, cmcaFamily: {} },
  action
) => {
  switch (action.type) {
    case CMCA_FAMILY_LIST_REQUEST:
      return {
        loading: true,
        cmcaFamily: {}
      }
    case CMCA_FAMILY_LIST_SUCCESS:
      return {
        loading: false,
        cmcaFamily: action.payload
      }
    case CMCA_FAMILY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
