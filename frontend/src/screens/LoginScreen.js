import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { setAlert } from '../actions/alertActions'
import { USER_LOGIN_FAIL } from '../constants/userConstants'

const LoginScreen = ({ location, history }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/home'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(userName, password))
  }

  const setError = () => {
    dispatch(setAlert(error, 'danger'))
    dispatch({ type: USER_LOGIN_FAIL })
  }

  if (error) return setError()

  return (
    <Container className='d-flex align-items-center'>
      <FormContainer>
        {loading && <Loader />}
        <h2 className='text-center'>Sign In</h2>
        <Form onSubmit={submitHandler} className='mt-4'>
          <Form.Group controlId='userName'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter username'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='password' className='mt-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className='d-grid'>
            <Button type='submit' className='mt-3 btn-primary'>
              Sign In
            </Button>
          </div>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default LoginScreen
