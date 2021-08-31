import {
  REGION_LIST_REQUEST,
  REGION_LIST_SUCCESS,
  REGION_LIST_FAIL
} from '../constants/regionConstants'

export const regionListReducer = (state = { regions: [] }, action) => {
  switch (action.type) {
    case REGION_LIST_REQUEST:
      return {
        loading: true,
        regions: []
      }
    case REGION_LIST_SUCCESS:
      return {
        loading: false,
        regions: action.payload
      }
    case REGION_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
