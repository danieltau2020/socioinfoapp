import axios from 'axios'
import {
  MV_KEY_STATS_REQUEST,
  MV_KEY_STATS_SUCCESS,
  MV_KEY_STATS_FAIL
} from '../constants/mvKeyStatsConstants.js'
import { setAlert } from './alertActions.js'

export const getMvKeyStats = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MV_KEY_STATS_REQUEST
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

    const { data } = await axios.get('/api/mv/keystats', config)

    dispatch({
      type: MV_KEY_STATS_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: MV_KEY_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
