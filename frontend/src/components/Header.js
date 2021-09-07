import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Container,
  Row,
  Col
} from 'react-bootstrap'
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

  return (
    <header>
      <Navbar collapseOnSelect expand='lg' className='mx-5'>
        <>
          {userInfo ? (
            <LinkContainer to='/home'>
              <Navbar.Brand>SInfo</Navbar.Brand>
            </LinkContainer>
          ) : (
            <LinkContainer to='/'>
              <Navbar.Brand>SInfo</Navbar.Brand>
            </LinkContainer>
          )}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto align-items-center text-center'>
              {userInfo ? (
                <>
                  <LinkContainer to='/home'>
                    <Nav.Link>
                      <i className='fas fa-home'></i> Home
                    </Nav.Link>
                  </LinkContainer>
                  <NavDropdown
                    title={
                      <span>
                        <i className='fas fa-users'></i> Population
                      </span>
                    }
                    id='basic-nav-dropdown'
                    renderMenuOnMount={true}
                  >
                    <Container className='dropdownNav'>
                      <Row>
                        <Col sm='12' md='12' className='text-left'>
                          <Dropdown.Header>CMCA</Dropdown.Header>
                          <LinkContainer to={`/people/cmca/${'2017'}/dataset`}>
                            <NavDropdown.Item>
                              CMCA 2017 Population
                            </NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to={`/people/cmca/${'2021'}/dataset`}>
                            <NavDropdown.Item>
                              CMCA 2021 Population
                            </NavDropdown.Item>
                          </LinkContainer>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col sm='12' md='12' className='text-left'>
                          <Dropdown.Header>Mine Villages</Dropdown.Header>
                          <LinkContainer to={`/people/mv/${'2017'}/dataset`}>
                            <NavDropdown.Item>
                              Mine Villages 2017 Population
                            </NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to={`/people/mv/${'2021'}/dataset`}>
                            <NavDropdown.Item>
                              Mine Villages 2021 Population
                            </NavDropdown.Item>
                          </LinkContainer>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className='fas fa-coins'></i> Bank Accounts
                      </span>
                    }
                    id='basic-nav-dropdown'
                    renderMenuOnMount={true}
                  >
                    <Container className='dropdownNav'>
                      <Row>
                        <Col sm='12' md='12' className='text-left'>
                          <Dropdown.Header>CMCA</Dropdown.Header>
                          <LinkContainer
                            to={`/bankaccount/cmca/${'2017'}/dataset`}
                          >
                            <NavDropdown.Item>
                              CMCA 2017 Bank Accounts
                            </NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer
                            to={`/bankaccount/cmca/${'2021'}/dataset`}
                          >
                            <NavDropdown.Item>
                              CMCA 2021 Bank Accounts
                            </NavDropdown.Item>
                          </LinkContainer>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col sm='12' md='12' className='text-left'>
                          <Dropdown.Header>Mine Villages</Dropdown.Header>
                          <LinkContainer
                            to={`/bankaccount/mv/${'2017'}/dataset`}
                          >
                            <NavDropdown.Item>
                              Mine Villages 2017 Bank Accounts
                            </NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer
                            to={`/bankaccount/mv/${'2021'}/dataset`}
                          >
                            <NavDropdown.Item>
                              Mine Villages 2021 Bank Accounts
                            </NavDropdown.Item>
                          </LinkContainer>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className='fas fa-chart-line'></i> Statistics
                      </span>
                    }
                    id='basic-nav-dropdown'
                    renderMenuOnMount={true}
                  >
                    <Container className='dropdownNav'>
                      <Row>
                        <Col sm='12' md='12' className='text-left'>
                          <Dropdown.Header>CMCA</Dropdown.Header>
                          <LinkContainer to='/statistics/population/cmca'>
                            <NavDropdown.Item>CMCA Population</NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/statistics/bankaccounts/cmca'>
                            <NavDropdown.Item>
                              CMCA Bank Accounts
                            </NavDropdown.Item>
                          </LinkContainer>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col sm='12' md='12' className='text-left'>
                          <Dropdown.Header>Mine Villages</Dropdown.Header>
                          <LinkContainer to='/statistics/population/mv'>
                            <NavDropdown.Item>
                              Mine Villages Population
                            </NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/statistics/bankaccounts/mv'>
                            <NavDropdown.Item>
                              Mine Villages Bank Accounts
                            </NavDropdown.Item>
                          </LinkContainer>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className='fas fa-money-check-alt'></i> Payments
                      </span>
                    }
                    id='basic-nav-dropdown'
                    renderMenuOnMount={true}
                  >
                    <Container className='dropdownNav'>
                      <Row>
                        <Col sm='12' md='12' className='text-left'>
                          <Dropdown.Header>CMCA 2021</Dropdown.Header>
                          <LinkContainer to={`/payments/cmca/${'2021'}/${'1'}`}>
                            <NavDropdown.Item>Batch 1</NavDropdown.Item>
                          </LinkContainer>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col sm='12' md='12' className='text-left'>
                          <Dropdown.Header>Mine Villages 2021</Dropdown.Header>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown>
                  <LinkContainer to='#' className='ms-5'>
                    <Nav.Link onClick={logoutHandler}>
                      <i className='fas fa-sign-out-alt'></i> Sign Out
                    </Nav.Link>
                  </LinkContainer>
                  <Navbar.Text className='mb-0'>
                    Welcome! {userInfo.name}
                  </Navbar.Text>
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
        </>
      </Navbar>
    </header>
  )
}

export default Header
