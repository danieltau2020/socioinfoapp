import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import MvPopulationStats from '../components/MvPopulationStats'
import {
  getMvPopulation2017,
  getMvPopulation2021
} from '../actions/mvPopulationActions'

const MvPopulationScreen = () => {
  const dispatch = useDispatch()

  const mvPopulation2017List = useSelector(
    (state) => state.mvPopulation2017List
  )

  const mvPopulation2021List = useSelector(
    (state) => state.mvPopulation2021List
  )

  const { loading: loadingMvPopulation2017, mvPopulation2017 } =
    mvPopulation2017List

  const { loading: loadingMvPopulation2021, mvPopulation2021 } =
    mvPopulation2021List

  useEffect(() => {
    dispatch(getMvPopulation2017())
    dispatch(getMvPopulation2021())
  }, [dispatch])

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

      {loadingMvPopulation2017 ? (
        <Loader />
      ) : (
        <MvPopulationStats mvPopulation={mvPopulation2017} year={'2017'} />
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
