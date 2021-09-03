import axios from 'axios'
import {
  CMCA_BANK_ACCOUNT_LIST_REQUEST,
  CMCA_BANK_ACCOUNT_LIST_SUCCESS,
  CMCA_BANK_ACCOUNT_LIST_FAIL
} from '../constants/cmcaBankAccountConstants'

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
      dispatch({
        type: CMCA_BANK_ACCOUNT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
