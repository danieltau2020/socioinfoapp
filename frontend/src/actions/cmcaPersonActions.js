import axios from 'axios'
import {
  CMCA_PERSON_LIST_REQUEST,
  CMCA_PERSON_LIST_SUCCESS,
  CMCA_PERSON_LIST_FAIL
} from '../constants/cmcaPersonConstants'
import { setAlert } from './alertActions'

export const getAllCmcaPersons =
  (villageCode = '', year) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CMCA_PERSON_LIST_REQUEST
      })

      const { data } = await axios.get(
        `/api/person/cmca?villageCode=${villageCode}&year=${year}`
      )

      dispatch({
        type: CMCA_PERSON_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: CMCA_PERSON_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
