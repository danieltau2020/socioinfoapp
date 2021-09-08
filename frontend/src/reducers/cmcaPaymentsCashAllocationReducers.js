import {
  CMCA_PAYMENTS_CASH_ALLOCATION_2021_REQUEST,
  CMCA_PAYMENTS_CASH_ALLOCATION_2021_SUCCESS,
  CMCA_PAYMENTS_CASH_ALLOCATION_2021_FAIL
} from '../constants/cmcaPaymentsCashAllocationConstants'

export const cmcaPaymentsCashAllocation2021Reducer = (
  state = { loading: false, cmcaPaymentsCashAllocation2021: [] },
  action
) => {
  switch (action.type) {
    case CMCA_PAYMENTS_CASH_ALLOCATION_2021_REQUEST:
      return {
        loading: true,
        cmcaPaymentsCashAllocation2021: []
      }
    case CMCA_PAYMENTS_CASH_ALLOCATION_2021_SUCCESS:
      return {
        loading: false,
        cmcaPaymentsCashAllocation2021: action.payload
      }
    case CMCA_PAYMENTS_CASH_ALLOCATION_2021_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
