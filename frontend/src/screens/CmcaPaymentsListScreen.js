import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import PaymentList from '../components/PaymentList'
import { getCmcaPayments } from '../actions/cmcaPaymentsActions'
import { getRegionVillage } from '../actions/regionActions'
import { CMCA_PAYMENTS_RESET } from '../constants/cmcaPaymentsConstants'

const CmcaPaymentsListScreen = ({ match }) => {
  const dispatch = useDispatch()

  const regionType = 'CMCA'
  const defaultVillage = '201'

  const regionList = useSelector((state) => state.regionList)
  const { loading: loadingRegion, error: errorRegions, regions } = regionList

  const cmcaPaymentsList = useSelector((state) => state.cmcaPaymentsList)
  const {
    loading: loadingCmcaPayments,
    error: errorCmcaPayments,
    cmcaPayments
  } = cmcaPaymentsList

  useEffect(() => {
    dispatch(getRegionVillage())
    dispatch(getCmcaPayments('201', match.params.pmtBatch))
  }, [dispatch, match])

  // Filters
  const villageSelected = (e) => {
    dispatch(getCmcaPayments(e.target.value, match.params.pmtBatch))
    dispatch({ type: CMCA_PAYMENTS_RESET })
  }

  if (errorRegions || errorCmcaPayments) {
    return null
  }

  return (
    <Container>
      {loadingRegion || loadingCmcaPayments ? (
        <Loader />
      ) : (
        <PaymentList
          payments={cmcaPayments}
          regions={regions}
          villageSelected={villageSelected}
          regionType={regionType}
          year={match.params.year}
          pmtBatch={match.params.pmtBatch}
          defaultVillage={defaultVillage}
        />
      )}
    </Container>
  )
}

export default CmcaPaymentsListScreen
