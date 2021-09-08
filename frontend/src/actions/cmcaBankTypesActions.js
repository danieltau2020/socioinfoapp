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

export const getCmcaBankTypes2017 = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CMCA_BANK_TYPES_2017_LIST_REQUEST
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
      '/api/statistics/bankaccounts/cmca/2017',
      config
    )

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

export const getCmcaBankTypes2021 = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CMCA_BANK_TYPES_2021_LIST_REQUEST
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
      '/api/statistics/bankaccounts/cmca/2021',
      config
    )

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
