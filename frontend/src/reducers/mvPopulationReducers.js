import {
  MV_POPULATION_2017_LIST_REQUEST,
  MV_POPULATION_2017_LIST_SUCCESS,
  MV_POPULATION_2017_LIST_FAIL,
  MV_POPULATION_2017_LIST_RESET,
  MV_POPULATION_2021_LIST_REQUEST,
  MV_POPULATION_2021_LIST_SUCCESS,
  MV_POPULATION_2021_LIST_FAIL,
  MV_POPULATION_2021_LIST_RESET
} from '../constants/mvPopulationConstants'

export const mvPopulation2017ListReducer = (
  state = { loading: false, mvPopulation2017: [] },
  action
) => {
  switch (action.type) {
    case MV_POPULATION_2017_LIST_REQUEST:
      return {
        loading: true,
        mvPopulation2017: []
      }
    case MV_POPULATION_2017_LIST_SUCCESS:
      return {
        loading: false,
        mvPopulation2017: action.payload
      }
    case MV_POPULATION_2017_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case MV_POPULATION_2017_LIST_RESET:
      return {
        mvPopulation2017: []
      }
    default:
      return state
  }
}

export const mvPopulation2021ListReducer = (
  state = { loading: false, mvPopulation2021: [] },
  action
) => {
  switch (action.type) {
    case MV_POPULATION_2021_LIST_REQUEST:
      return {
        loading: true,
        mvPopulation2021: []
      }
    case MV_POPULATION_2021_LIST_SUCCESS:
      return {
        loading: false,
        mvPopulation2021: action.payload
      }
    case MV_POPULATION_2021_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case MV_POPULATION_2021_LIST_RESET:
      return {
        mvPopulation2021: []
      }
    default:
      return state
  }
}
