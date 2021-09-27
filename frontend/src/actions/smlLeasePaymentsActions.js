import axios from 'axios'
import {
  SML_LEASE_PAYMENTS_REQUEST,
  SML_LEASE_PAYMENTS_SUCCESS,
  SML_LEASE_PAYMENTS_FAIL
} from '../constants/smlLeasePaymentsConstants.js'
import { setAlert } from './alertActions.js'

export const getSmlLeasePayments =
  (year, villageCode = '', pmtBatch) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: SML_LEASE_PAYMENTS_REQUEST
      })

      const {
        userLogin: { userInfo }
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.get(
        `/api/payments/sml/${year}?pmtBatch=${pmtBatch}&&villCode=${villageCode}`,
        config
      )

      dispatch({
        type: SML_LEASE_PAYMENTS_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: SML_LEASE_PAYMENTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
