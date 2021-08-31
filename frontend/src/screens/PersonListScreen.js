import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import PeopleList from '../components/PeopleList'
import { setAlert } from '../actions/alertActions'
import { getAllCmcaPersons } from '../actions/cmcaPersonActions'
import { getRegionVillage } from '../actions/regionActions'
import { CMCA_PERSON_LIST_RESET } from '../constants/cmcaPersonConstants'

const PersonListScreen = () => {
  const dispatch = useDispatch()

  const dataSet = sessionStorage.getItem('dataSetPeople')
    ? JSON.parse(sessionStorage.getItem('dataSetPeople'))
    : ''

  const regionList = useSelector((state) => state.regionList)
  const { loading: loadingRegion, error: errorRegion, regions } = regionList

  const cmcaPersonList = useSelector((state) => state.cmcaPersonList)
  const {
    loading: loadingPerson,
    error: errorPerson,
    cmcaPersons
  } = cmcaPersonList

  useEffect(() => {
    dispatch(getRegionVillage())
    dispatch(getAllCmcaPersons('101'))
  }, [dispatch, dataSet])

  // Filters
  const villageSelected = (e) => {
    dispatch(getAllCmcaPersons(e.target.value))
    dispatch({ type: CMCA_PERSON_LIST_RESET })
  }

  const setError = () => {
    dispatch(setAlert(errorRegion, 'danger'))
    dispatch(setAlert(errorPerson, 'danger'))
    return
  }

  return (
    <Container>
      {errorRegion || (errorPerson && setError())}

      {loadingPerson || loadingRegion ? (
        <Loader />
      ) : (
        <PeopleList
          cmcaPersons={cmcaPersons}
          regions={regions}
          villageSelected={villageSelected}
        />
      )}
    </Container>
  )
}

export default PersonListScreen
