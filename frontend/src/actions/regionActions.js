import axios from 'axios'
import {
  REGION_LIST_REQUEST,
  REGION_LIST_SUCCESS,
  REGION_LIST_FAIL
} from '../constants/regionConstants'

export const getRegionVillage = () => async (dispatch) => {
  try {
    dispatch({
      type: REGION_LIST_REQUEST
    })

    const { data } = await axios.get('/api/region')

    dispatch({
      type: REGION_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: REGION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
