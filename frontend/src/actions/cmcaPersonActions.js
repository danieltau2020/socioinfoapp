import axios from 'axios'
import {
  CMCA_PERSON_LIST_REQUEST,
  CMCA_PERSON_LIST_SUCCESS,
  CMCA_PERSON_LIST_FAIL
} from '../constants/cmcaPersonConstants'

export const getAllCmcaPersons =
  (villageCode = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: CMCA_PERSON_LIST_REQUEST
      })

      let dataSet = sessionStorage.getItem('dataSetPeople')
        ? JSON.parse(sessionStorage.getItem('dataSetPeople'))
        : ''

      const { data } = await axios.get(
        `/api/person/cmca?villageCode=${villageCode}&dataSet=${dataSet}`
      )

      dispatch({
        type: CMCA_PERSON_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: CMCA_PERSON_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
