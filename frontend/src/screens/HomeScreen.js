import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import CmcaKeyStats from '../components/CmcaKeyStats'
import MvKeyStats from '../components/MvKeyStats'
import { setAlert } from '../actions/alertActions'
import { getCmcaKeyStats } from '../actions/cmcaKeyStatsActions'
import { getMvKeyStats } from '../actions/mvKeyStatsActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const cmcaKeyStatList = useSelector((state) => state.cmcaKeyStatList)
  const {
    loading: loadingCmcaKeyStats,
    cmcaKeyStats,
    error: errorCmcaKeyStats
  } = cmcaKeyStatList

  const mvKeyStatList = useSelector((state) => state.mvKeyStatList)
  const {
    loading: loadingMvKeyStats,
    mvKeyStats,
    error: errorMvKeyStats
  } = mvKeyStatList

  useEffect(() => {
    dispatch(getCmcaKeyStats())
    dispatch(getMvKeyStats())
  }, [dispatch])

  const setErrorCmcaStats = () => {
    dispatch(setAlert(errorCmcaKeyStats, 'danger'))
  }

  const setErrorMvStats = () => {
    dispatch(setAlert(errorMvKeyStats, 'danger'))
  }

  return (
    <Container>
      <Row className='justify-content-center text-center'>
        <Col sm='12' md='6'>
          <h2 className='title-label'>CMCA KEY FIGURES</h2>
        </Col>
      </Row>
      {errorCmcaKeyStats && setErrorCmcaStats()}
      {loadingCmcaKeyStats ? (
        <Loader />
      ) : (
        <CmcaKeyStats cmcaKeyStats={cmcaKeyStats} />
      )}
      <Row className='justify-content-center text-center'>
        <Col sm='12' md='6'>
          <h2 className='title-label'>MINE VILLAGES KEY FIGURES</h2>
        </Col>
      </Row>
      {errorMvKeyStats && setErrorMvStats()}
      {loadingMvKeyStats ? <Loader /> : <MvKeyStats mvKeyStats={mvKeyStats} />}
    </Container>
  )
}

export default HomeScreen
