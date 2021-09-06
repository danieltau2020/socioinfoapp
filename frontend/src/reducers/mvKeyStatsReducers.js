import {
  MV_KEY_STATS_REQUEST,
  MV_KEY_STATS_SUCCESS,
  MV_KEY_STATS_FAIL
} from '../constants/mvKeyStatsConstants'

export const mvKeyStatsReducer = (
  state = { loading: false, mvKeyStats: [] },
  action
) => {
  switch (action.type) {
    case MV_KEY_STATS_REQUEST:
      return {
        loading: true,
        mvKeyStats: []
      }
    case MV_KEY_STATS_SUCCESS:
      return {
        loading: false,
        mvKeyStats: action.payload
      }
    case MV_KEY_STATS_FAIL:
      return {
        loading: false,
        mvKeyStats: [],
        error: action.payload
      }
    default:
      return state
  }
}
