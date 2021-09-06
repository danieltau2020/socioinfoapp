import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import CmcaBankTypesStats from '../components/CmcaBankTypesStats'
import {
  getCmcaBankTypes2017,
  getCmcaBankTypes2021
} from '../actions/cmcaBankTypesActions'

const CmcaBankTypesScreen = () => {
  const dispatch = useDispatch()

  const cmcaBankTypes2017List = useSelector(
    (state) => state.cmcaBankTypes2017List
  )

  const cmcaBankTypes2021List = useSelector(
    (state) => state.cmcaBankTypes2021List
  )

  const {
    loading: loadingCmcaBankTypes2017,
    error: errorCmcaBankTypes2017,
    cmcaBankTypes2017
  } = cmcaBankTypes2017List

  const {
    loading: loadingCmcaBankTypes2021,
    error: errorCmcaBankTypes2021,
    cmcaBankTypes2021
  } = cmcaBankTypes2021List

  useEffect(() => {
    dispatch(getCmcaBankTypes2017())
    dispatch(getCmcaBankTypes2021())
  }, [dispatch])

  if (errorCmcaBankTypes2017 || errorCmcaBankTypes2021) {
    return null
  }

  return (
    <Container>
      <Row>
        <Col sm>
          <h4 className='h4-screen'>
            <i className='fas fa-chart-line'></i> CMCA Bank Accounts Summary
          </h4>
        </Col>
      </Row>
      {loadingCmcaBankTypes2017 ? (
        <Loader />
      ) : (
        <CmcaBankTypesStats cmcaBankTypes={cmcaBankTypes2017} year={'2017'} />
      )}
      {loadingCmcaBankTypes2021 ? (
        <Loader />
      ) : (
        <CmcaBankTypesStats cmcaBankTypes={cmcaBankTypes2021} year={'2021'} />
      )}
    </Container>
  )
}

export default CmcaBankTypesScreen
