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

export const getMvPopulation2020 = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MV_POPULATION_2020_LIST_REQUEST
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

    const { data } = await axios.get(
      '/api/statistics/population/mv/2020',
      config
    )

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

export const getMvPopulation2021 = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MV_POPULATION_2021_LIST_REQUEST
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

    const { data } = await axios.get(
      '/api/statistics/population/mv/2021',
      config
    )

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
