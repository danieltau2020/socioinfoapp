import axios from 'axios'
import {
  MV_POPULATION_2017_LIST_REQUEST,
  MV_POPULATION_2017_LIST_SUCCESS,
  MV_POPULATION_2017_LIST_FAIL,
  MV_POPULATION_2021_LIST_REQUEST,
  MV_POPULATION_2021_LIST_SUCCESS,
  MV_POPULATION_2021_LIST_FAIL
} from '../constants/mvPopulationConstants'

export const getMvPopulation2017 = () => async (dispatch) => {
  try {
    dispatch({
      type: MV_POPULATION_2017_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/mv/2017')

    dispatch({
      type: MV_POPULATION_2017_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MV_POPULATION_2017_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const getMvPopulation2021 = () => async (dispatch) => {
  try {
    dispatch({
      type: MV_POPULATION_2021_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/mv/2021')

    dispatch({
      type: MV_POPULATION_2021_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: MV_POPULATION_2021_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
