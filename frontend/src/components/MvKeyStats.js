import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MvKeyStats = ({ mvKeyStats }) => {
  return (
    <>
      <Row className='justify-content-center text-center'>
        {mvKeyStats
          .filter((stats) => stats.year === '2020')
          .map((stats) => (
            <Col key={stats._id} xs='5' sm='4' md='3'>
              <Link to={`/people/mv/${'2020'}/dataset`} className='btn'>
                <Card className='text-center align-items-center'>
                  <Card.Body>
                    <h1 className='card-h1'>
                      <i className='fas fa-users'></i>
                    </h1>
                    <Card.Title>Population</Card.Title>
                    <Card.Text className='m-0'>
                      {stats.peopleCount.toLocaleString()}
                    </Card.Text>
                    <Card.Text>Census 2020</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        {mvKeyStats
          .filter((stats) => stats.year === '2021')
          .map((stats) => (
            <Col key={stats._id} xs='5' sm='4' md='3'>
              <Link to={`/people/mv/${'2021'}/dataset`} className='btn'>
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
      <Row className='justify-content-center text-center'>
        {mvKeyStats
          .filter((stats) => stats.year === '2020')
          .map((stats) => (
            <Col key={stats._id} xs='5' sm='4' md='3'>
              <Link to={`/bankaccount/mv/${'2020'}/dataset`} className='btn'>
                <Card className='text-center align-items-center'>
                  <Card.Body>
                    <h1 className='card-h1'>
                      <i className='fas fa-coins'></i>
                    </h1>
                    <Card.Title>Bank Accounts</Card.Title>
                    <Card.Text className='m-0'>
                      {stats.bankAccountCount.toLocaleString()}
                    </Card.Text>
                    <Card.Text>Census 2020</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        {mvKeyStats
          .filter((stats) => stats.year === '2021')
          .map((stats) => (
            <Col key={stats._id} xs='5' sm='4' md='3'>
              <Link to={`/bankaccount/mv/${'2021'}/dataset`} className='btn'>
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

export default MvKeyStats
