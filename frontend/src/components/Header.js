import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/')
  }

  const setDataSet2017People = () => {
    sessionStorage.setItem('dataSetPeople', '2017')
  }
  const setDataSet2021People = () => {
    sessionStorage.setItem('dataSetPeople', '2021')
  }
  const setDataSet2017BankAccount = () => {
    sessionStorage.setItem('dataSetBankAccount', '2017')
  }
  const setDataSet2021BankAccount = () => {
    sessionStorage.setItem('dataSetBankAccount', '2021')
  }

  return (
    <header>
      <Navbar collapseOnSelect expand='sm'>
        <Container>
          {userInfo ? (
            <LinkContainer to='/home'>
              <Navbar.Brand>CRSD</Navbar.Brand>
            </LinkContainer>
          ) : (
            <LinkContainer to='/'>
              <Navbar.Brand>CRSD</Navbar.Brand>
            </LinkContainer>
          )}
          <Navbar.Toggle
            aria-controls='responsive-navbar-nav'
            className='navbar-dark'
          />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='d-flex justify-content-center ms-auto align-items-center'>
              {userInfo ? (
                <>
                  <NavDropdown
                    title={
                      <span>
                        <i className='fas fa-users'></i> People
                      </span>
                    }
                    id='peoplemenu'
                  >
                    <LinkContainer to='/people/2017/dataset'>
                      <NavDropdown.Item onClick={() => setDataSet2017People()}>
                        CMCA 2017 Data Set
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/people/2021/dataset'>
                      <NavDropdown.Item onClick={() => setDataSet2021People()}>
                        CMCA 2021 Data Set
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className='fas fa-money-check-alt'></i> Bank Account
                      </span>
                    }
                    id='bankaccountmenu'
                  >
                    <LinkContainer to='/bankaccount/2017/dataset'>
                      <NavDropdown.Item
                        onClick={() => setDataSet2017BankAccount()}
                      >
                        CMCA 2017 Data Set
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/bankaccount/2021/dataset'>
                      <NavDropdown.Item
                        onClick={() => setDataSet2021BankAccount()}
                      >
                        CMCA 2021 Data Set
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  {/* <LinkContainer to='/about'>
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer> */}
                  <LinkContainer to='#' className='ms-5 nav-welcome'>
                    <Nav.Link onClick={logoutHandler}>Sign Out</Nav.Link>
                  </LinkContainer>
                  <p className='mb-0 ms-5 nav-welcome'>
                    Welcome! {userInfo.name}
                  </p>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
