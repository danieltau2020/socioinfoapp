import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import MvFamilyList from '../components/MvFamilyList'
import { getMvFamilyList } from '../actions/mvFamilyListActions'

const MvFamilyListScreen = ({ match }) => {
  const dispatch = useDispatch()

  const regionType = 'Mine Villages'

  const mvFamilyList = useSelector((state) => state.mvFamilyList)
  const {
    loading: loadingMvFamilyList,
    error: errorMvFamilyList,
    mvFamily
  } = mvFamilyList

  useEffect(() => {
    dispatch(
      getMvFamilyList(
        match.params.year,
        match.params.regCode,
        match.params.villCode,
        match.params.dwelling,
        match.params.household
      )
    )
  }, [dispatch, match])

  if (errorMvFamilyList) {
    return null
  }

  return (
    <Container>
      {loadingMvFamilyList ? (
        <Loader />
      ) : mvFamily != null && mvFamily.familyList != null ? (
        <MvFamilyList
          regionType={regionType}
          year={match.params.year}
          mvFamily={mvFamily}
        />
      ) : null}
    </Container>
  )
}

export default MvFamilyListScreen
