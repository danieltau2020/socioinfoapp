import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Cookies from 'js-cookie'
import People from '../components/People'

const DataSetScreen = () => {

    const peopleHandler = () =>{
        Cookies.set('')
    }

  return (
    <>
      <div className='jumbotron jumbotron-fluid d-flex align-items-end'>
        <Container>
          <h2 className='text-light'>Data Sets</h2>
          <Nav className='data-set'>
            <LinkContainer to='/dataset/people' onClick={() => peopleHandler()}>
              <Nav.Link className='text-light'>People</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/dataset/bankaccount'>
              <Nav.Link className='text-light'>Bank Account</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </div>
      <People />
    </>
  )
}

export default DataSetScreen
