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

  return (
    <header>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
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
                  <NavDropdown
                    title={
                      <span>
                        <i className='fas fa-users'></i> People
                      </span>
                    }
                    id='peoplemenu'
                    renderMenuOnMount={true}
                  >
                    <LinkContainer to={`/people/cmca/${'2017'}/dataset`}>
                      <NavDropdown.Item>CMCA 2017 Dataset</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={`/people/cmca/${'2021'}/dataset`}>
                      <NavDropdown.Item>CMCA 2021 Dataset</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={`/people/mv/${'2017'}/dataset`}>
                      <NavDropdown.Item>
                        Mine Villages 2017 Dataset
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={`/people/mv/${'2021'}/dataset`}>
                      <NavDropdown.Item>
                        Mine Villages 2021 Dataset
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
                    renderMenuOnMount={true}
                  >
                    <LinkContainer to={`/bankaccount/cmca/${'2017'}/dataset`}>
                      <NavDropdown.Item>CMCA 2017 Dataset</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={`/bankaccount/cmca/${'2021'}/dataset`}>
                      <NavDropdown.Item>CMCA 2021 Dataset</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={`/bankaccount/mv/${'2017'}/dataset`}>
                      <NavDropdown.Item>
                        Mine Villages 2017 Dataset
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={`/bankaccount/mv/${'2021'}/dataset`}>
                      <NavDropdown.Item>
                        Mine Villages 2021 Dataset
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span>
                        <i className='fas fa-chart-line'></i> Statistics
                      </span>
                    }
                    id='statisticsmenu'
                    renderMenuOnMount={true}
                  >
                    <LinkContainer to='/statistics/population/cmca'>
                      <NavDropdown.Item>CMCA Population Stats</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/statistics/population/mv'>
                      <NavDropdown.Item>
                        Mine Villages Population Stats
                      </NavDropdown.Item>
                    </LinkContainer>
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
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
