import React from 'react'
import { Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container>
      <div className='text-center my-5'>
        <h1 className='x-large text-warning'>
          <i className='fas fa-exclamation-triangle'> Not Found</i>
        </h1>
      </div>
    </Container>
  )
}

export default NotFound
