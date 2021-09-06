import axios from 'axios'
import {
  CMCA_REGION_POPULATION_2017_LIST_REQUEST,
  CMCA_REGION_POPULATION_2017_LIST_SUCCESS,
  CMCA_REGION_POPULATION_2017_LIST_FAIL,
  CMCA_REGION_POPULATION_2021_LIST_REQUEST,
  CMCA_REGION_POPULATION_2021_LIST_SUCCESS,
  CMCA_REGION_POPULATION_2021_LIST_FAIL
} from '../constants/cmcaRegionPopulationConstants'
import { setAlert } from '../actions/alertActions'

export const getCmcaRegionPopulation2017 = () => async (dispatch) => {
  try {
    dispatch({
      type: CMCA_REGION_POPULATION_2017_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/population/cmca/2017')

    dispatch({
      type: CMCA_REGION_POPULATION_2017_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: CMCA_REGION_POPULATION_2017_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const getCmcaRegionPopulation2021 = () => async (dispatch) => {
  try {
    dispatch({
      type: CMCA_REGION_POPULATION_2021_LIST_REQUEST
    })

    const { data } = await axios.get('/api/statistics/population/cmca/2021')

    dispatch({
      type: CMCA_REGION_POPULATION_2021_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    if (error) {
      dispatch(setAlert(error.response.data.message, 'danger'))
    }

    dispatch({
      type: CMCA_REGION_POPULATION_2021_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
