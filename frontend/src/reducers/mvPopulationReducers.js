import {
  MV_POPULATION_2020_LIST_REQUEST,
  MV_POPULATION_2020_LIST_SUCCESS,
  MV_POPULATION_2020_LIST_FAIL,
  MV_POPULATION_2020_LIST_RESET,
  MV_POPULATION_2021_LIST_REQUEST,
  MV_POPULATION_2021_LIST_SUCCESS,
  MV_POPULATION_2021_LIST_FAIL,
  MV_POPULATION_2021_LIST_RESET
} from '../constants/mvPopulationConstants'

export const mvPopulation2020ListReducer = (
  state = { loading: false, mvPopulation2020: [] },
  action
) => {
  switch (action.type) {
    case MV_POPULATION_2020_LIST_REQUEST:
      return {
        loading: true,
        mvPopulation2020: []
      }
    case MV_POPULATION_2020_LIST_SUCCESS:
      return {
        loading: false,
        mvPopulation2020: action.payload
      }
    case MV_POPULATION_2020_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case MV_POPULATION_2020_LIST_RESET:
      return {
        mvPopulation2020: []
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
