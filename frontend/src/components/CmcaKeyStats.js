import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CmcaKeyStats = ({ cmcaKeyStats }) => {
  return (
    <>
      <Row className='justify-content-center'>
        {cmcaKeyStats
          .filter((stats) => stats.year === '2017')
          .map((stats) => (
            <Col key={stats._id} xs='5' sm='4' md='3' className='px-0 mx-0'>
              <Link to={`/people/cmca/${'2017'}/dataset`} className='btn'>
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
          ))}
        {cmcaKeyStats
          .filter((stats) => stats.year === '2021')
          .map((stats) => (
            <Col key={stats._id} xs='5' sm='4' md='3' className='px-0 mx-0'>
              <Link to={`/people/cmca/${'2021'}/dataset`} className='btn'>
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
          ))}
      </Row>
      <Row className='justify-content-center'>
        {cmcaKeyStats
          .filter((stats) => stats.year === '2017')
          .map((stats) => (
            <Col key={stats._id} xs='5' sm='4' md='3' className='px-0 mx-0'>
              <Link to={`/bankaccount/cmca/${'2017'}/dataset`} className='btn'>
                <Card className='text-center align-items-center'>
                  <Card.Body>
                    <h1 className='card-h1'>
                      <i className='fas fa-coins'></i>
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
          ))}
        {cmcaKeyStats
          .filter((stats) => stats.year === '2021')
          .map((stats) => (
            <Col key={stats._id} xs='5' sm='4' md='3' className='px-0 mx-0'>
              <Link to={`/bankaccount/cmca/${'2021'}/dataset`} className='btn'>
                <Card className='text-center align-items-center'>
                  <Card.Body>
                    <h1 className='card-h1'>
                      <i className='fas fa-coins'></i>
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
          ))}
      </Row>
    </>
  )
}

export default CmcaKeyStats
