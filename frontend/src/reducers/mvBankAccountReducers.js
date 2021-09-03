import {
  MV_BANK_ACCOUNT_LIST_REQUEST,
  MV_BANK_ACCOUNT_LIST_SUCCESS,
  MV_BANK_ACCOUNT_LIST_FAIL,
  MV_BANK_ACCOUNT_LIST_RESET
} from '../constants/mvBankAccountConstants'

export const mvBankAccountListReducer = (
  state = { loading: false, mvBankAccounts: [] },
  action
) => {
  switch (action.type) {
    case MV_BANK_ACCOUNT_LIST_REQUEST:
      return {
        loading: true,
        mvBankAccounts: []
      }
    case MV_BANK_ACCOUNT_LIST_SUCCESS:
      return {
        loading: false,
        mvBankAccounts: action.payload
      }
    case MV_BANK_ACCOUNT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case MV_BANK_ACCOUNT_LIST_RESET:
      return {
        mvBankAccounts: []
      }
    default:
      return state
  }
}
