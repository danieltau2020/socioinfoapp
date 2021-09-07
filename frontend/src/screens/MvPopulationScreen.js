import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import MvPopulationStats from '../components/MvPopulationStats'
import {
  getMvPopulation2020,
  getMvPopulation2021
} from '../actions/mvPopulationActions'

const MvPopulationScreen = () => {
  const dispatch = useDispatch()

  const mvPopulation2020List = useSelector(
    (state) => state.mvPopulation2020List
  )

  const mvPopulation2021List = useSelector(
    (state) => state.mvPopulation2021List
  )

  const {
    loading: loadingMvPopulation2020,
    error: errorMvPopulation2020,
    mvPopulation2020
  } = mvPopulation2020List

  const {
    loading: loadingMvPopulation2021,
    error: errorMvPopulation2021,
    mvPopulation2021
  } = mvPopulation2021List

  useEffect(() => {
    dispatch(getMvPopulation2020())
    dispatch(getMvPopulation2021())
  }, [dispatch])

  if (errorMvPopulation2020 || errorMvPopulation2021) {
    return null
  }

  return (
    <Container>
      <Row>
        <Col sm>
          <h4 className='h4-screen'>
            <i className='fas fa-chart-line'></i> Mine Villages Population
            Summary
          </h4>
        </Col>
      </Row>

      {loadingMvPopulation2020 ? (
        <Loader />
      ) : (
        <MvPopulationStats mvPopulation={mvPopulation2020} year={'2020'} />
      )}

      {loadingMvPopulation2021 ? (
        <Loader />
      ) : (
        <MvPopulationStats mvPopulation={mvPopulation2021} year={'2021'} />
      )}
    </Container>
  )
}

export default MvPopulationScreen
