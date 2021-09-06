import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import MvBankTypesStats from '../components/MvBankTypesStats'
import {
  getMvBankTypes2017,
  getMvBankTypes2021
} from '../actions/mvBankTypesActions'

const MvBankTypesScreen = () => {
  const dispatch = useDispatch()

  const mvBankTypes2017List = useSelector((state) => state.mvBankTypes2017List)

  const mvBankTypes2021List = useSelector((state) => state.mvBankTypes2021List)

  const {
    loading: loadingMvBankTypes2017,
    error: errorMvBankTypes2017,
    mvBankTypes2017
  } = mvBankTypes2017List

  const {
    loading: loadingMvBankTypes2021,
    error: errorMvBankTypes2021,
    mvBankTypes2021
  } = mvBankTypes2021List

  useEffect(() => {
    dispatch(getMvBankTypes2017())
    dispatch(getMvBankTypes2021())
  }, [dispatch])

  if (errorMvBankTypes2017 || errorMvBankTypes2021) {
    return null
  }

  return (
    <Container>
      <Row>
        <Col sm>
          <h4 className='h4-screen'>
            <i className='fas fa-chart-line'></i> Mine Villages Bank Accounts
            Summary
          </h4>
        </Col>
      </Row>
      {loadingMvBankTypes2017 ? (
        <Loader />
      ) : (
        <MvBankTypesStats mvBankTypes={mvBankTypes2017} year={'2017'} />
      )}
      {loadingMvBankTypes2021 ? (
        <Loader />
      ) : (
        <MvBankTypesStats mvBankTypes={mvBankTypes2021} year={'2021'} />
      )}
    </Container>
  )
}

export default MvBankTypesScreen
