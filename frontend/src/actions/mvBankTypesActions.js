import axios from 'axios'
import {
  MV_BANK_TYPES_2020_LIST_REQUEST,
  MV_BANK_TYPES_2020_LIST_SUCCESS,
  MV_BANK_TYPES_2020_LIST_FAIL,
  MV_BANK_TYPES_2021_LIST_REQUEST,
  MV_BANK_TYPES_2021_LIST_SUCCESS,
  MV_BANK_TYPES_2021_LIST_FAIL
} from '../constants/mvBankTypesConstants'
import { setAlert } from './alertActions'

export const getMvBankTypes2020 = () => async (dispatch) => {
  try {
    dispatch({
      type: MV_BANK_TYPES_2020_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/bankaccounts/mv/2020')

    dispatch({
      type: MV_BANK_TYPES_2020_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: MV_BANK_TYPES_2020_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const getMvBankTypes2021 = () => async (dispatch) => {
  try {
    dispatch({
      type: MV_BANK_TYPES_2021_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/bankaccounts/mv/2021')

    dispatch({
      type: MV_BANK_TYPES_2021_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: MV_BANK_TYPES_2021_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
