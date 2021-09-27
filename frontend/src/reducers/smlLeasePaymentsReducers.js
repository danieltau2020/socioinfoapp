import {
  SML_LEASE_PAYMENTS_REQUEST,
  SML_LEASE_PAYMENTS_SUCCESS,
  SML_LEASE_PAYMENTS_FAIL,
  SML_LEASE_PAYMENTS_RESET
} from '../constants/smlLeasePaymentsConstants'

export const smlLeasePaymentsReducer = (
  state = { loading: false, smlLeasePayments: [] },
  action
) => {
  switch (action.type) {
    case SML_LEASE_PAYMENTS_REQUEST:
      return {
        loading: true,
        smlLeasePayments: []
      }
    case SML_LEASE_PAYMENTS_SUCCESS:
      return {
        loading: false,
        smlLeasePayments: action.payload
      }
    case SML_LEASE_PAYMENTS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case SML_LEASE_PAYMENTS_RESET:
      return {
        smlLeasePayments: []
      }
    default:
      return state
  }
}
