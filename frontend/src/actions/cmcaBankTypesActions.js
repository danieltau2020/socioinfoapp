import axios from 'axios'
import {
  CMCA_BANK_TYPES_2017_LIST_REQUEST,
  CMCA_BANK_TYPES_2017_LIST_SUCCESS,
  CMCA_BANK_TYPES_2017_LIST_FAIL,
  CMCA_BANK_TYPES_2021_LIST_REQUEST,
  CMCA_BANK_TYPES_2021_LIST_SUCCESS,
  CMCA_BANK_TYPES_2021_LIST_FAIL
} from '../constants/cmcaBankTypesConstants'
import { setAlert } from './alertActions'

export const getCmcaBankTypes2017 = () => async (dispatch) => {
  try {
    dispatch({
      type: CMCA_BANK_TYPES_2017_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/bankaccounts/cmca/2017')

    dispatch({
      type: CMCA_BANK_TYPES_2017_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: CMCA_BANK_TYPES_2017_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const getCmcaBankTypes2021 = () => async (dispatch) => {
  try {
    dispatch({
      type: CMCA_BANK_TYPES_2021_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/bankaccounts/cmca/2021')

    dispatch({
      type: CMCA_BANK_TYPES_2021_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: CMCA_BANK_TYPES_2021_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
