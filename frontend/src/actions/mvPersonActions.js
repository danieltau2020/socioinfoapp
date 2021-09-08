import axios from 'axios'
import {
  MV_PERSON_LIST_REQUEST,
  MV_PERSON_LIST_SUCCESS,
  MV_PERSON_LIST_FAIL
} from '../constants/mvPersonConstants'
import { setAlert } from './alertActions'

export const getAllMvPersons =
  (villageCode = '', year) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: MV_PERSON_LIST_REQUEST
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
        `/api/person/mv?villageCode=${villageCode}&year=${year}`,
        config
      )

      dispatch({
        type: MV_PERSON_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: MV_PERSON_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
