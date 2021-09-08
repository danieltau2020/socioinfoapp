import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import CmcaPaymentsCashAllocation from '../components/CmcaPaymentsCashAllocation'
import { getCmcaPaymentsCashAllocation2021 } from '../actions/cmcaPaymentsCashAllocationActions'

const CmcaPaymentsCashAllocationScreen = ({ match }) => {
  const dispatch = useDispatch()

  const cmcaPaymentsCashAllocation2021List = useSelector(
    (state) => state.cmcaPaymentsCashAllocation2021List
  )

  const {
    loading: loadingCmcaPaymentsCashAllocation2021,
    error: errorCmcaPaymentsCashAllocation2021,
    cmcaPaymentsCashAllocation2021
  } = cmcaPaymentsCashAllocation2021List

  useEffect(() => {
    dispatch(getCmcaPaymentsCashAllocation2021(match.params.year))
  }, [dispatch, match])

  if (errorCmcaPaymentsCashAllocation2021) {
    return null
  }

  return (
    <Container>
      <Row>
        <Col sm>
          <h4 className='h4-screen'>
            <i className='fas fa-money-check-alt'></i> CMCA Payments Cash
            Allocation Summary
          </h4>
        </Col>
      </Row>
      {loadingCmcaPaymentsCashAllocation2021 ? (
        <Loader />
      ) : (
        <CmcaPaymentsCashAllocation
          cmcaPaymentsCashAllocation={cmcaPaymentsCashAllocation2021}
          year={match.params.year}
        />
      )}
    </Container>
  )
}

export default CmcaPaymentsCashAllocationScreen
