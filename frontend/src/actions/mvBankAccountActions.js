import axios from 'axios'
import {
  MV_BANK_ACCOUNT_LIST_REQUEST,
  MV_BANK_ACCOUNT_LIST_SUCCESS,
  MV_BANK_ACCOUNT_LIST_FAIL
} from '../constants/mvBankAccountConstants'

export const getMvBankAccounts =
  (villageCode = '', year) =>
  async (dispatch) => {
    try {
      dispatch({
        type: MV_BANK_ACCOUNT_LIST_REQUEST
      })

      const { data } = await axios.get(
        `/api/bankaccount/mv?villageCode=${villageCode}&year=${year}`
      )

      dispatch({
        type: MV_BANK_ACCOUNT_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: MV_BANK_ACCOUNT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
