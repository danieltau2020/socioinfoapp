import axios from 'axios'
import {
  CMCA_PAYMENTS_REQUEST,
  CMCA_PAYMENTS_SUCCESS,
  CMCA_PAYMENTS_FAIL
} from '../constants/cmcaPaymentsConstants.js'
import { setAlert } from './alertActions.js'

export const getCmcaPayments =
  (villageCode = '', pmtBatch) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CMCA_PAYMENTS_REQUEST
      })
      const { data } = await axios.get(
        `/api/payments/cmca/2021?pmtBatch=${pmtBatch}&&villCode=${villageCode}`
      )

      dispatch({
        type: CMCA_PAYMENTS_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: CMCA_PAYMENTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
