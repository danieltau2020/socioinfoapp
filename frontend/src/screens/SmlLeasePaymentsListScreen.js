import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import SmlLeasePaymentList from '../components/SmlLeasePaymentList'
import { getSmlLeasePayments } from '../actions/smlLeasePaymentsActions'
import { getSmlVillages } from '../actions/regionActions'
import { SML_LEASE_PAYMENTS_RESET } from '../constants/smlLeasePaymentsConstants'

const SmlLeasePaymentsListScreen = ({ match }) => {
  const dispatch = useDispatch()

  const regionType = 'SML'
  const defaultVillage = '101'

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const regionList = useSelector((state) => state.regionList)
  const { loading: loadingRegion, error: errorRegions, regions } = regionList

  const smlLeasePaymentsList = useSelector(
    (state) => state.smlLeasePaymentsList
  )
  const {
    loading: loadingSmlLeasePayments,
    error: errorSmlLeasePayments,
    smlLeasePayments
  } = smlLeasePaymentsList

  useEffect(() => {
    dispatch(getSmlVillages())
    dispatch(
      getSmlLeasePayments(match.params.year, '101', match.params.pmtBatch)
    )
  }, [dispatch, match])

  // Filters
  const villageSelected = (e) => {
    dispatch(
      getSmlLeasePayments(
        match.params.year,
        e.target.value,
        match.params.pmtBatch
      )
    )
    dispatch({ type: SML_LEASE_PAYMENTS_RESET })
  }

  if (errorRegions || errorSmlLeasePayments) {
    return null
  }

  let hiddenColumns = []

  if (userInfo.role === 'cr') {
    hiddenColumns = ['_id', 'totalAmount']
  } else if (userInfo.role === 'sea') {
    hiddenColumns = ['_id']
  } else {
    hiddenColumns = ['_id', 'totalAmount']
  }

  return (
    <Container>
      {loadingRegion || loadingSmlLeasePayments ? (
        <Loader />
      ) : (
        <SmlLeasePaymentList
          payments={smlLeasePayments}
          villages={regions}
          villageSelected={villageSelected}
          year={match.params.year}
          pmtBatch={match.params.pmtBatch}
          defaultVillage={defaultVillage}
          hiddenColumns={hiddenColumns}
        />
      )}
    </Container>
  )
}

export default SmlLeasePaymentsListScreen
