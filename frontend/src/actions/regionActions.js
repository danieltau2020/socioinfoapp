import axios from 'axios'
import {
  REGION_LIST_REQUEST,
  REGION_LIST_SUCCESS,
  REGION_LIST_FAIL
} from '../constants/regionConstants'
import { setAlert } from './alertActions'

export const getRegionVillage =
  (regionCode = '') =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: REGION_LIST_REQUEST
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
        `/api/region?regionCode=${regionCode}`,
        config
      )

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
