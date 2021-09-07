import {
  CMCA_REGION_POPULATION_2017_LIST_REQUEST,
  CMCA_REGION_POPULATION_2017_LIST_SUCCESS,
  CMCA_REGION_POPULATION_2017_LIST_FAIL,
  CMCA_REGION_POPULATION_2017_LIST_RESET,
  CMCA_REGION_POPULATION_2021_LIST_REQUEST,
  CMCA_REGION_POPULATION_2021_LIST_SUCCESS,
  CMCA_REGION_POPULATION_2021_LIST_FAIL,
  CMCA_REGION_POPULATION_2021_LIST_RESET
} from '../constants/cmcaRegionPopulationConstants'

export const cmcaRegionPopulation2017ListReducer = (
  state = { loading: false, cmcaRegionPopulation2017: [] },
  action
) => {
  switch (action.type) {
    case CMCA_REGION_POPULATION_2017_LIST_REQUEST:
      return {
        loading: true,
        cmcaRegionPopulation2017: []
      }
    case CMCA_REGION_POPULATION_2017_LIST_SUCCESS:
      return {
        loading: false,
        cmcaRegionPopulation2017: action.payload
      }
    case CMCA_REGION_POPULATION_2017_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CMCA_REGION_POPULATION_2017_LIST_RESET:
      return {
        cmcaRegionPopulation2017: []
      }
    default:
      return state
  }
}

export const cmcaRegionPopulation2021ListReducer = (
  state = { loading: false, cmcaRegionPopulation2021: [] },
  action
) => {
  switch (action.type) {
    case CMCA_REGION_POPULATION_2021_LIST_REQUEST:
      return {
        loading: true,
        cmcaRegionPopulation2021: []
      }
    case CMCA_REGION_POPULATION_2021_LIST_SUCCESS:
      return {
        loading: false,
        cmcaRegionPopulation2021: action.payload
      }
    case CMCA_REGION_POPULATION_2021_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CMCA_REGION_POPULATION_2021_LIST_RESET:
      return {
        cmcaRegionPopulation2021: []
      }
    default:
      return state
  }
}
