import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import CmcaPeopleList from '../components/CmcaPeopleList'
import { getAllCmcaPersons } from '../actions/cmcaPersonActions'
import { getRegionVillage } from '../actions/regionActions'
import { CMCA_PERSON_LIST_RESET } from '../constants/cmcaPersonConstants'

const CmcaPersonListScreen = ({ match }) => {
  const dispatch = useDispatch()

  const regionType = 'CMCA'
  const defaultVillage = '201'

  const regionList = useSelector((state) => state.regionList)
  const { loading: loadingRegion, error: errorRegions, regions } = regionList

  const cmcaPersonList = useSelector((state) => state.cmcaPersonList)
  const {
    loading: loadingPerson,
    error: errorCmcaPersons,
    cmcaPersons
  } = cmcaPersonList

  useEffect(() => {
    dispatch(getRegionVillage())
    dispatch(getAllCmcaPersons('201', match.params.year))
  }, [dispatch, match])

  // Filters
  const villageSelected = (e) => {
    dispatch(getAllCmcaPersons(e.target.value, match.params.year))
    dispatch({ type: CMCA_PERSON_LIST_RESET })
  }

  if (errorRegions || errorCmcaPersons) {
    return null
  }

  return (
    <Container>
      {loadingPerson || loadingRegion ? (
        <Loader />
      ) : (
        <CmcaPeopleList
          persons={cmcaPersons}
          regions={regions}
          villageSelected={villageSelected}
          regionType={regionType}
          year={match.params.year}
          defaultVillage={defaultVillage}
        />
      )}
    </Container>
  )
}

export default CmcaPersonListScreen
