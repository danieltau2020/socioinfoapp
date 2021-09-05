import axios from 'axios'
import {
  CMCA_BANK_ACCOUNT_LIST_REQUEST,
  CMCA_BANK_ACCOUNT_LIST_SUCCESS,
  CMCA_BANK_ACCOUNT_LIST_FAIL
} from '../constants/cmcaBankAccountConstants'
import { setAlert } from './alertActions'

export const getCmcaBankAccounts =
  (villageCode = '', year) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CMCA_BANK_ACCOUNT_LIST_REQUEST
      })

      const { data } = await axios.get(
        `/api/bankaccount/cmca?villageCode=${villageCode}&year=${year}`
      )

      dispatch({
        type: CMCA_BANK_ACCOUNT_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: CMCA_BANK_ACCOUNT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
