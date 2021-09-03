import axios from 'axios'
import {
  MV_KEY_STATS_REQUEST,
  MV_KEY_STATS_SUCCESS,
  MV_KEY_STATS_FAIL
} from '../constants/mvKeyStatsConstants.js'

export const getMvKeyStats = () => async (dispatch) => {
  try {
    dispatch({
      type: MV_KEY_STATS_REQUEST
    })

    const { data } = await axios.get('/api/mv/keystats')

    dispatch({
      type: MV_KEY_STATS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MV_KEY_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
