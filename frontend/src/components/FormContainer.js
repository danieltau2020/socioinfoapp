import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-center mb-5'>
        <Col md={3} sm={8}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
