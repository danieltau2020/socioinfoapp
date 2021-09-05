import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import CmcaRegionPopulationStats from '../components/CmcaRegionPopulationStats'
import {
  getCmcaRegionPopulation2017,
  getCmcaRegionPopulation2021
} from '../actions/cmcaRegionPopulationActions'

const CmcaRegionPopulationScreen = () => {
  const dispatch = useDispatch()

  const cmcaRegionPopulation2017List = useSelector(
    (state) => state.cmcaRegionPopulation2017List
  )

  const cmcaRegionPopulation2021List = useSelector(
    (state) => state.cmcaRegionPopulation2021List
  )

  const { loading: loadingCmcaRegionPopulation2017, cmcaRegionPopulation2017 } =
    cmcaRegionPopulation2017List

  const { loading: loadingCmcaRegionPopulation2021, cmcaRegionPopulation2021 } =
    cmcaRegionPopulation2021List

  useEffect(() => {
    dispatch(getCmcaRegionPopulation2017())
    dispatch(getCmcaRegionPopulation2021())
  }, [dispatch])

  return (
    <Container>
      <Row>
        <Col sm>
          <h4 className='h4-screen'>
            <i className='fas fa-chart-line'></i> CMCA Region Population Summary
          </h4>
        </Col>
      </Row>
      {loadingCmcaRegionPopulation2017 ? (
        <Loader />
      ) : (
        <CmcaRegionPopulationStats
          cmcaRegionPopulation={cmcaRegionPopulation2017}
          year={'2017'}
        />
      )}
      {loadingCmcaRegionPopulation2021 ? (
        <Loader />
      ) : (
        <CmcaRegionPopulationStats
          cmcaRegionPopulation={cmcaRegionPopulation2021}
          year={'2021'}
        />
      )}
    </Container>
  )
}

export default CmcaRegionPopulationScreen
