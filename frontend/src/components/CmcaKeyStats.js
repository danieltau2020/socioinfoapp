import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CmcaKeyStats = ({
  cmcaKeyStats,
  setDataSet2017People,
  setDataSet2021People,
  setDataSet2017BankAccount,
  setDataSet2021BankAccount
}) => {
  return (
    <>
      <Row className='justify-content-center text-center'>
        {cmcaKeyStats.map((stats) => {
          if (stats.year === '2017') {
            return (
              <Col sm='12' md='3'>
                <Link
                  to='/people/2017/dataset'
                  className='btn'
                  onClick={() => setDataSet2017People()}
                >
                  <Card className='text-center align-items-center'>
                    <Card.Body>
                      <h1 className='card-h1'>
                        <i className='fas fa-users'></i>
                      </h1>
                      <Card.Title>Population</Card.Title>
                      <Card.Text className='m-0'>
                        {stats.peopleCount.toLocaleString()}
                      </Card.Text>
                      <Card.Text>Census 2017</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          }
        })}
        {cmcaKeyStats.map((stats) => {
          if (stats.year === '2021') {
            return (
              <Col sm='12' md='3'>
                <Link
                  to='/people/2021/dataset'
                  className='btn'
                  onClick={() => setDataSet2021People()}
                >
                  <Card className='text-center align-items-center'>
                    <Card.Body>
                      <h1 className='card-h1'>
                        <i className='fas fa-users'></i>
                      </h1>
                      <Card.Title>Population</Card.Title>
                      <Card.Text className='m-0'>
                        {stats.peopleCount.toLocaleString()}
                      </Card.Text>
                      <Card.Text>Census 2021</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          }
        })}
      </Row>
      <Row className='justify-content-center text-center'>
        {cmcaKeyStats.map((stats) => {
          if (stats.year === '2017') {
            return (
              <Col sm='12' md='3'>
                <Link
                  to='/bankaccount/2017/dataset'
                  className='btn'
                  onClick={() => setDataSet2017BankAccount()}
                >
                  <Card className='text-center align-items-center'>
                    <Card.Body>
                      <h1 className='card-h1'>
                        <i className='fas fa-money-check-alt'></i>
                      </h1>
                      <Card.Title>Bank Accounts</Card.Title>
                      <Card.Text className='m-0'>
                        {stats.bankAccountCount.toLocaleString()}
                      </Card.Text>
                      <Card.Text>Census 2017</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          }
        })}
        {cmcaKeyStats.map((stats) => {
          if (stats.year === '2021') {
            return (
              <Col sm='12' md='3'>
                <Link
                  to='/bankaccount/2021/dataset'
                  className='btn'
                  onClick={() => setDataSet2021BankAccount()}
                >
                  <Card className='text-center align-items-center'>
                    <Card.Body>
                      <h1 className='card-h1'>
                        <i className='fas fa-money-check-alt'></i>
                      </h1>
                      <Card.Title>Bank Accounts</Card.Title>
                      <Card.Text className='m-0'>
                        {stats.bankAccountCount.toLocaleString()}
                      </Card.Text>
                      <Card.Text>Census 2021</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          }
        })}
      </Row>
    </>
  )
}

export default CmcaKeyStats
