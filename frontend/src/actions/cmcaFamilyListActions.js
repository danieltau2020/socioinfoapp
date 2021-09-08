import axios from 'axios'
import {
  CMCA_FAMILY_LIST_REQUEST,
  CMCA_FAMILY_LIST_SUCCESS,
  CMCA_FAMILY_LIST_FAIL
} from '../constants/cmcaFamilyListConstants.js'
import { setAlert } from './alertActions.js'

export const getCmcaFamilyList =
  (year, regCode, villCode, dwelling, household) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: CMCA_FAMILY_LIST_REQUEST
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
        `/api/familylist/cmca/${year}?regCode=${regCode}&&villCode=${villCode}&&dwelling=${dwelling}&&household=${household}`,
        config
      )

      dispatch({
        type: CMCA_FAMILY_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      if (error) {
        dispatch(setAlert(error.response.data.message, 'danger'))
      }

      dispatch({
        type: CMCA_FAMILY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
