import {
  MV_BANK_TYPES_2020_LIST_REQUEST,
  MV_BANK_TYPES_2020_LIST_SUCCESS,
  MV_BANK_TYPES_2020_LIST_FAIL,
  MV_BANK_TYPES_2020_LIST_RESET,
  MV_BANK_TYPES_2021_LIST_REQUEST,
  MV_BANK_TYPES_2021_LIST_SUCCESS,
  MV_BANK_TYPES_2021_LIST_FAIL,
  MV_BANK_TYPES_2021_LIST_RESET
} from '../constants/mvBankTypesConstants'

export const mvBankTypes2020ListReducer = (
  state = { loading: false, mvBankTypes2020: [] },
  action
) => {
  switch (action.type) {
    case MV_BANK_TYPES_2020_LIST_REQUEST:
      return {
        loading: true,
        mvBankTypes2020: []
      }
    case MV_BANK_TYPES_2020_LIST_SUCCESS:
      return {
        loading: false,
        mvBankTypes2020: action.payload
      }
    case MV_BANK_TYPES_2020_LIST_FAIL:
      return {
        loading: false,
        mvBankTypes: [],
        error: action.payload
      }
    case MV_BANK_TYPES_2020_LIST_RESET:
      return {
        mvBankTypes2020: []
      }
    default:
      return state
  }
}

export const mvBankTypes2021ListReducer = (
  state = { loading: false, mvBankTypes2021: [] },
  action
) => {
  switch (action.type) {
    case MV_BANK_TYPES_2021_LIST_REQUEST:
      return {
        loading: true,
        mvBankTypes2021: []
      }
    case MV_BANK_TYPES_2021_LIST_SUCCESS:
      return {
        loading: false,
        mvBankTypes2021: action.payload
      }
    case MV_BANK_TYPES_2021_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case MV_BANK_TYPES_2021_LIST_RESET:
      return {
        mvBankTypes2021: []
      }
    default:
      return state
  }
}
