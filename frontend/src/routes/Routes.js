import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Footer from '../components/Footer'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import PersonListScreen from '../screens/PersonListScreen'
import BankAccountListScreen from '../screens/BankAccountListScreen'
import NotFound from '../components/NotFound'
import AlertMsg from '../components/AlertMsg'

const Routes = () => {
  return (
    <>
      <AlertMsg />
      <main className='content-wrap'>
        <Switch>
          <PrivateRoute exact path='/home' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <PrivateRoute
            exact
            path='/people/2017/dataset'
            component={PersonListScreen}
          />
          <PrivateRoute
            exact
            path='/people/2021/dataset'
            component={PersonListScreen}
          />
          <PrivateRoute
            exact
            path='/bankaccount/2017/dataset'
            component={BankAccountListScreen}
          />
          <PrivateRoute
            exact
            path='/bankaccount/2021/dataset'
            component={BankAccountListScreen}
          />
          <PrivateRoute component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default Routes
