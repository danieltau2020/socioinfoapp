import axios from 'axios'
import {
  MV_POPULATION_2020_LIST_REQUEST,
  MV_POPULATION_2020_LIST_SUCCESS,
  MV_POPULATION_2020_LIST_FAIL,
  MV_POPULATION_2021_LIST_REQUEST,
  MV_POPULATION_2021_LIST_SUCCESS,
  MV_POPULATION_2021_LIST_FAIL
} from '../constants/mvPopulationConstants'
import { setAlert } from './alertActions'

export const getMvPopulation2020 = () => async (dispatch) => {
  try {
    dispatch({
      type: MV_POPULATION_2020_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/population/mv/2020')

    dispatch({
      type: MV_POPULATION_2020_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: MV_POPULATION_2020_LIST_FAIL,
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

    const { data } = await axios.get('/api/statistics/population/mv/2021')

    dispatch({
      type: MV_POPULATION_2021_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: MV_POPULATION_2021_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
