import axios from 'axios'
import {
  MV_PERSON_LIST_REQUEST,
  MV_PERSON_LIST_SUCCESS,
  MV_PERSON_LIST_FAIL
} from '../constants/mvPersonConstants'
import { setAlert } from './alertActions'

export const getAllMvPersons =
  (villageCode = '', year) =>
  async (dispatch) => {
    try {
      dispatch({
        type: MV_PERSON_LIST_REQUEST
      })

      const { data } = await axios.get(
        `/api/person/mv?villageCode=${villageCode}&year=${year}`
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
