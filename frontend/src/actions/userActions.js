import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from '../constants/userConstants'
import { CMCA_PERSON_LIST_RESET } from '../constants/cmcaPersonConstants'

export const login = (userName, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/api/user/login',
      { userName, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    sessionStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    sessionStorage.removeItem('userInfo')
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const logout = () => async (dispatch) => {
  await axios.get('/api/user/logout')

  sessionStorage.removeItem('userInfo')
  sessionStorage.removeItem('dataSetPeopleYear')
  sessionStorage.removeItem('userSetBankAccount')

  dispatch({
    type: USER_LOGOUT
  })
  dispatch({
    type: CMCA_PERSON_LIST_RESET
  })
}
