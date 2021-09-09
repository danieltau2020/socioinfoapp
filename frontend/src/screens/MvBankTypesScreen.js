import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import MvBankTypesStats from '../components/MvBankTypesStats'
import {
  getMvBankTypes2020,
  getMvBankTypes2021
} from '../actions/mvBankTypesActions'

const MvBankTypesScreen = () => {
  const dispatch = useDispatch()

  const mvBankTypes2020List = useSelector((state) => state.mvBankTypes2020List)

  const mvBankTypes2021List = useSelector((state) => state.mvBankTypes2021List)

  const {
    loading: loadingMvBankTypes2020,
    error: errorMvBankTypes2020,
    mvBankTypes2020
  } = mvBankTypes2020List

  const {
    loading: loadingMvBankTypes2021,
    error: errorMvBankTypes2021,
    mvBankTypes2021
  } = mvBankTypes2021List

  useEffect(() => {
    dispatch(getMvBankTypes2020())
    dispatch(getMvBankTypes2021())
  }, [dispatch])

  if (errorMvBankTypes2020 || errorMvBankTypes2021) {
    return null
  }

  return (
    <Container>
      <Row>
        {!loadingMvBankTypes2020 || !loadingMvBankTypes2021 ? (
          <Col sm>
            <h4 className='h4-screen'>
              <i className='fas fa-chart-line'></i> Mine Villages Bank Accounts
              Summary
            </h4>
          </Col>
        ) : null}
      </Row>
      {loadingMvBankTypes2020 ? (
        <Loader />
      ) : (
        <MvBankTypesStats mvBankTypes={mvBankTypes2020} year={'2020'} />
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
