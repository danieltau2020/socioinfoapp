import axios from 'axios'
import {
  CMCA_PAYMENTS_REQUEST,
  CMCA_PAYMENTS_SUCCESS,
  CMCA_PAYMENTS_FAIL
} from '../constants/cmcaPaymentsConstants.js'
import { setAlert } from './alertActions.js'

export const getCmcaPayments =
  (year, villageCode = '', pmtBatch) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: CMCA_PAYMENTS_REQUEST
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
        `/api/payments/cmca/${year}?pmtBatch=${pmtBatch}&&villCode=${villageCode}`,
        config
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
