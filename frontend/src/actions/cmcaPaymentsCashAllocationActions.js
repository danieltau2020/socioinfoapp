import axios from 'axios'
import {
  CMCA_PAYMENTS_CASH_ALLOCATION_2021_REQUEST,
  CMCA_PAYMENTS_CASH_ALLOCATION_2021_SUCCESS,
  CMCA_PAYMENTS_CASH_ALLOCATION_2021_FAIL
} from '../constants/cmcaPaymentsCashAllocationConstants.js'
import { setAlert } from './alertActions.js'

export const getCmcaPaymentsCashAllocation2021 =
  (year) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CMCA_PAYMENTS_CASH_ALLOCATION_2021_REQUEST
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
        `/api/cashallocation/cmca/${year}`,
        config
      )

      dispatch({
        type: CMCA_PAYMENTS_CASH_ALLOCATION_2021_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: CMCA_PAYMENTS_CASH_ALLOCATION_2021_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
