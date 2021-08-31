import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import CmcaKeyStats from '../components/CmcaKeyStats'
import { setAlert } from '../actions/alertActions'
import { getCmcaKeyStats } from '../actions/cmcaStatsActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const cmcaKeyStatList = useSelector((state) => state.cmcaKeyStatList)
  const {
    loading: loadingCmcaKeyStats,
    cmcaKeyStats,
    error: errorCmcaKeyStats
  } = cmcaKeyStatList

  useEffect(() => {
    dispatch(getCmcaKeyStats())
  }, [dispatch])

  const setError = () => {
    dispatch(setAlert(errorCmcaKeyStats, 'danger'))
  }

  const setDataSet2017People = () => {
    sessionStorage.setItem('dataSetPeople', '2017')
  }
  const setDataSet2021People = () => {
    sessionStorage.setItem('dataSetPeople', '2021')
  }
  const setDataSet2017BankAccount = () => {
    sessionStorage.setItem('dataSetBankAccount', '2017')
  }
  const setDataSet2021BankAccount = () => {
    sessionStorage.setItem('dataSetBankAccount', '2021')
  }

  if (errorCmcaKeyStats) return setError()

  return (
    <Container>
      <Row className='justify-content-center text-center'>
        <Col sm='12' md='6'>
          <h2 className='bg-orange text-light sm-title'>CMCA KEY STATISTICS</h2>
        </Col>
      </Row>
      {loadingCmcaKeyStats ? (
        <Loader />
      ) : (
        <CmcaKeyStats
          cmcaKeyStats={cmcaKeyStats}
          setDataSet2017People={setDataSet2017People}
          setDataSet2021People={setDataSet2021People}
          setDataSet2017BankAccount={setDataSet2017BankAccount}
          setDataSet2021BankAccount={setDataSet2021BankAccount}
        />
      )}
      <Row className='justify-content-center text-center'>
        <Col sm='12' md='6'>
          <h2 className='bg-orange text-light sm-title'>
            MINE VILLAGES KEY STATISTICS
          </h2>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen
