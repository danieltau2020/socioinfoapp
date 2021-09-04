import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import PeopleList from '../components/PeopleList'
import { setAlert } from '../actions/alertActions'
import { getAllMvPersons } from '../actions/mvPersonActions'
import { getRegionVillage } from '../actions/regionActions'
import { MV_PERSON_LIST_RESET } from '../constants/mvPersonConstants'

const MvPersonListScreen = ({ match }) => {
  const dispatch = useDispatch()

  const regionType = 'Mine Villages'
  const defaultVillage = '101'

  const regionList = useSelector((state) => state.regionList)
  const { loading: loadingRegion, error: errorRegion, regions } = regionList

  const mvPersonList = useSelector((state) => state.mvPersonList)
  const { loading: loadingPerson, error: errorPerson, mvPersons } = mvPersonList

  useEffect(() => {
    dispatch(getRegionVillage('1'))
    dispatch(getAllMvPersons('101', match.params.year))
  }, [dispatch, match])

  // Filters
  const villageSelected = (e) => {
    dispatch(getAllMvPersons(e.target.value, match.params.year))
    dispatch({ type: MV_PERSON_LIST_RESET })
  }

  const setError = () => {
    dispatch(setAlert(errorRegion, 'danger'))
    dispatch(setAlert(errorPerson, 'danger'))
  }

  return (
    <Container>
      {(errorRegion || errorPerson) && setError()}

      {loadingPerson || loadingRegion ? (
        <Loader />
      ) : (
        <PeopleList
          persons={mvPersons}
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

export default MvPersonListScreen
