import {
  CMCA_BANK_ACCOUNT_LIST_REQUEST,
  CMCA_BANK_ACCOUNT_LIST_SUCCESS,
  CMCA_BANK_ACCOUNT_LIST_FAIL,
  CMCA_BANK_ACCOUNT_LIST_RESET
} from '../constants/cmcaBankAccountConstants'

export const cmcaBankAccountListReducer = (
  state = { loading: false, cmcaBankAccounts: [] },
  action
) => {
  switch (action.type) {
    case CMCA_BANK_ACCOUNT_LIST_REQUEST:
      return {
        loading: true,
        cmcaBankAccounts: []
      }
    case CMCA_BANK_ACCOUNT_LIST_SUCCESS:
      return {
        loading: false,
        cmcaBankAccounts: action.payload
      }
    case CMCA_BANK_ACCOUNT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CMCA_BANK_ACCOUNT_LIST_RESET:
      return {
        cmcaBankAccounts: []
      }
    default:
      return state
  }
}
