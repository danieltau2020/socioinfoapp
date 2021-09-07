import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import CmcaFamilyList from '../components/CmcaFamilyList'
import { getCmcaFamilyList } from '../actions/cmcaFamilyListActions'

const CmcaFamilyListScreen = ({ match }) => {
  const dispatch = useDispatch()

  const regionType = 'CMCA'

  const cmcaFamilyList = useSelector((state) => state.cmcaFamilyList)
  const {
    loading: loadingCmcaFamilyList,
    error: errorCmcaFamilyList,
    cmcaFamily
  } = cmcaFamilyList

  useEffect(() => {
    dispatch(
      getCmcaFamilyList(
        match.params.year,
        match.params.regCode,
        match.params.villCode,
        match.params.dwelling,
        match.params.household
      )
    )
  }, [dispatch, match])

  if (errorCmcaFamilyList) {
    return null
  }

  return (
    <Container>
      {loadingCmcaFamilyList ? (
        <Loader />
      ) : cmcaFamily != null && cmcaFamily.familyList != null ? (
        <CmcaFamilyList
          regionType={regionType}
          year={match.params.year}
          cmcaFamily={cmcaFamily}
        />
      ) : null}
    </Container>
  )
}

export default CmcaFamilyListScreen
