import {
  CMCA_BANK_TYPES_2017_LIST_REQUEST,
  CMCA_BANK_TYPES_2017_LIST_SUCCESS,
  CMCA_BANK_TYPES_2017_LIST_FAIL,
  CMCA_BANK_TYPES_2017_LIST_RESET,
  CMCA_BANK_TYPES_2021_LIST_REQUEST,
  CMCA_BANK_TYPES_2021_LIST_SUCCESS,
  CMCA_BANK_TYPES_2021_LIST_FAIL,
  CMCA_BANK_TYPES_2021_LIST_RESET
} from '../constants/cmcaBankTypesConstants'

export const cmcaBankTypes2017ListReducer = (
  state = { loading: false, cmcaBankTypes2017: [] },
  action
) => {
  switch (action.type) {
    case CMCA_BANK_TYPES_2017_LIST_REQUEST:
      return {
        loading: true,
        cmcaBankTypes2017: []
      }
    case CMCA_BANK_TYPES_2017_LIST_SUCCESS:
      return {
        loading: false,
        cmcaBankTypes2017: action.payload
      }
    case CMCA_BANK_TYPES_2017_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CMCA_BANK_TYPES_2017_LIST_RESET:
      return {
        cmcaBankTypes2017: []
      }
    default:
      return state
  }
}

export const cmcaBankTypes2021ListReducer = (
  state = { loading: false, cmcaBankTypes2021: [] },
  action
) => {
  switch (action.type) {
    case CMCA_BANK_TYPES_2021_LIST_REQUEST:
      return {
        loading: true,
        cmcaBankTypes2021: []
      }
    case CMCA_BANK_TYPES_2021_LIST_SUCCESS:
      return {
        loading: false,
        cmcaBankTypes2021: action.payload
      }
    case CMCA_BANK_TYPES_2021_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CMCA_BANK_TYPES_2021_LIST_RESET:
      return {
        cmcaBankTypes2021: []
      }
    default:
      return state
  }
}
