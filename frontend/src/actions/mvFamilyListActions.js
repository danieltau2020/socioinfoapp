import axios from 'axios'
import {
  MV_FAMILY_LIST_REQUEST,
  MV_FAMILY_LIST_SUCCESS,
  MV_FAMILY_LIST_FAIL
} from '../constants/mvFamilyListConstants.js'
import { setAlert } from './alertActions.js'

export const getMvFamilyList =
  (year, regCode, villCode, dwelling, household) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: MV_FAMILY_LIST_REQUEST
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
        `/api/familylist/mv/${year}?regCode=${regCode}&&villCode=${villCode}&&dwelling=${dwelling}&&household=${household}`,
        config
      )

      dispatch({
        type: MV_FAMILY_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: MV_FAMILY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
