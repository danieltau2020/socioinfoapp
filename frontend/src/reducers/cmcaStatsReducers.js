import {
  CMCA_KEY_STATS_REQUEST,
  CMCA_KEY_STATS_SUCCESS,
  CMCA_KEY_STATS_FAIL
} from '../constants/cmcaStatsConstants'

export const cmcaStatsReducer = (
  state = { loading: false, cmcaKeyStats: [] },
  action
) => {
  switch (action.type) {
    case CMCA_KEY_STATS_REQUEST:
      return {
        loading: true,
        cmcaKeyStats: []
      }
    case CMCA_KEY_STATS_SUCCESS:
      return {
        loading: false,
        cmcaKeyStats: action.payload
      }
    case CMCA_KEY_STATS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
