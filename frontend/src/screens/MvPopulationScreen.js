import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { setAlert } from '../actions/alertActions'
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

  const {
    loading: loadingMvPopulation2017,
    error: errorMvPopulation2017,
    mvPopulation2017
  } = mvPopulation2017List

  const {
    loading: loadingMvPopulation2021,
    error: errorMvPopulation2021,
    mvPopulation2021
  } = mvPopulation2021List

  useEffect(() => {
    dispatch(getMvPopulation2017())
    dispatch(getMvPopulation2021())
  }, [dispatch])

  const setErrorMv2017 = () => {
    dispatch(setAlert(errorMvPopulation2017, 'danger'))
  }

  const setErrorMv2021 = () => {
    dispatch(setAlert(errorMvPopulation2021, 'danger'))
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
      {errorMvPopulation2017 && setErrorMv2017()}

      {loadingMvPopulation2017 ? (
        <Loader />
      ) : (
        <MvPopulationStats mvPopulation={mvPopulation2017} year={'2017'} />
      )}

      {errorMvPopulation2021 && setErrorMv2021()}
      {loadingMvPopulation2021 ? (
        <Loader />
      ) : (
        <MvPopulationStats mvPopulation={mvPopulation2021} year={'2021'} />
      )}
    </Container>
  )
}

export default MvPopulationScreen
