import {
  CMCA_PAYMENTS_REQUEST,
  CMCA_PAYMENTS_SUCCESS,
  CMCA_PAYMENTS_FAIL,
  CMCA_PAYMENTS_RESET
} from '../constants/cmcaPaymentsConstants'

export const cmcaPaymentsReducer = (
  state = { loading: false, cmcaPayments: [] },
  action
) => {
  switch (action.type) {
    case CMCA_PAYMENTS_REQUEST:
      return {
        loading: true,
        cmcaPayments: []
      }
    case CMCA_PAYMENTS_SUCCESS:
      return {
        loading: false,
        cmcaPayments: action.payload
      }
    case CMCA_PAYMENTS_FAIL:
      return {
        loading: false,
        cmcaPayments: [],
        error: action.payload
      }
    case CMCA_PAYMENTS_RESET:
      return {
        cmcaPayments: []
      }
    default:
      return state
  }
}
