import axios from 'axios'
import {
  REGION_LIST_REQUEST,
  REGION_LIST_SUCCESS,
  REGION_LIST_FAIL
} from '../constants/regionConstants'
import { setAlert } from './alertActions'

export const getRegionVillage =
  (regionCode = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: REGION_LIST_REQUEST
      })

      const { data } = await axios.get(`/api/region?regionCode=${regionCode}`)

      dispatch({
        type: REGION_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: REGION_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
