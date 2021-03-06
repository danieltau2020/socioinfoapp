import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import CmcaKeyStats from '../components/CmcaKeyStats'
import MvKeyStats from '../components/MvKeyStats'
import { getCmcaKeyStats } from '../actions/cmcaKeyStatsActions'
import { getMvKeyStats } from '../actions/mvKeyStatsActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const cmcaKeyStatList = useSelector((state) => state.cmcaKeyStatList)
  const {
    loading: loadingCmcaKeyStats,
    error: errorCmcaKeyStats,
    cmcaKeyStats
  } = cmcaKeyStatList

  const mvKeyStatList = useSelector((state) => state.mvKeyStatList)
  const {
    loading: loadingMvKeyStats,
    error: errorMvKeyStats,
    mvKeyStats
  } = mvKeyStatList

  useEffect(() => {
    dispatch(getCmcaKeyStats())
    dispatch(getMvKeyStats())
  }, [dispatch])

  if (errorCmcaKeyStats || errorMvKeyStats) {
    return null
  }

  return (
    <Container>
      <Row className='justify-content-center text-center'>
        <Col xs='12' sm='12' md='9'>
          <h2 className='title-label'>CMCA KEY FIGURES</h2>
        </Col>
      </Row>
      {loadingCmcaKeyStats ? (
        <Loader />
      ) : (
        <CmcaKeyStats cmcaKeyStats={cmcaKeyStats} />
      )}

      <Row className='justify-content-center text-center'>
        <Col xs='12' sm='12' md='9'>
          <h2 className='title-label'>MINE VILLAGES KEY FIGURES</h2>
        </Col>
      </Row>
      {loadingMvKeyStats ? <Loader /> : <MvKeyStats mvKeyStats={mvKeyStats} />}
    </Container>
  )
}

export default HomeScreen
