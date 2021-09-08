import axios from 'axios'
import {
  MV_BANK_ACCOUNT_LIST_REQUEST,
  MV_BANK_ACCOUNT_LIST_SUCCESS,
  MV_BANK_ACCOUNT_LIST_FAIL
} from '../constants/mvBankAccountConstants'
import { setAlert } from './alertActions'

export const getMvBankAccounts =
  (villageCode = '', year) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: MV_BANK_ACCOUNT_LIST_REQUEST
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
        `/api/bankaccount/mv?villageCode=${villageCode}&year=${year}`,
        config
      )

      dispatch({
        type: MV_BANK_ACCOUNT_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: MV_BANK_ACCOUNT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
