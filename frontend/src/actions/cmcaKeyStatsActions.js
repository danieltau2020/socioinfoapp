import axios from 'axios'
import {
  CMCA_KEY_STATS_REQUEST,
  CMCA_KEY_STATS_SUCCESS,
  CMCA_KEY_STATS_FAIL
} from '../constants/cmcaKeyStatsConstants.js'
import { setAlert } from './alertActions.js'

export const getCmcaKeyStats = () => async (dispatch) => {
  try {
    dispatch({
      type: CMCA_KEY_STATS_REQUEST
    })
    const { data } = await axios.get('/api/cmca/keystats')

    dispatch({
      type: CMCA_KEY_STATS_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: CMCA_KEY_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
