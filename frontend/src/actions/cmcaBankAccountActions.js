import axios from 'axios'
import {
  CMCA_BANK_ACCOUNT_LIST_REQUEST,
  CMCA_BANK_ACCOUNT_LIST_SUCCESS,
  CMCA_BANK_ACCOUNT_LIST_FAIL
} from '../constants/cmcaBankAccountConstants'
import { setAlert } from './alertActions'

export const getCmcaBankAccounts =
  (villageCode = '', year) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: CMCA_BANK_ACCOUNT_LIST_REQUEST
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
        `/api/bankaccount/cmca?villageCode=${villageCode}&year=${year}`,
        config
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
