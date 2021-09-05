import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Footer from '../components/Footer'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import CmcaPersonListScreen from '../screens/CmcaPersonListScreen'
import CmcaBankAccountListScreen from '../screens/CmcaBankAccountListScreen'
import MvPersonListScreen from '../screens/MvPersonListScreen'
import MvBankAccountListScreen from '../screens/MvBankAccountListScreen'
import CmcaRegionPopulationScreen from '../screens/CmcaRegionPopulationScreen'
import MvPopulationScreen from '../screens/MvPopulationScreen'
import NotFound from '../components/NotFound'
import AlertMsg from '../components/AlertMsg'
import AlertConnectionMsg from '../components/AlertConnectionMsg'

const Routes = () => {
  return (
    <>
      <AlertConnectionMsg />
      <AlertMsg />
      <main className='content-wrap'>
        <Switch>
          <PrivateRoute exact path='/home' component={HomeScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <PrivateRoute
            exact
            path='/people/cmca/:year/dataset'
            component={CmcaPersonListScreen}
          />
          <PrivateRoute
            exact
            path='/bankaccount/cmca/:year/dataset'
            component={CmcaBankAccountListScreen}
          />
          <PrivateRoute
            exact
            path='/people/mv/:year/dataset'
            component={MvPersonListScreen}
          />
          <PrivateRoute
            exact
            path='/bankaccount/mv/:year/dataset'
            component={MvBankAccountListScreen}
          />
          <PrivateRoute
            exact
            path='/statistics/population/cmca'
            component={CmcaRegionPopulationScreen}
          />
          <PrivateRoute
            exact
            path='/statistics/population/mv'
            component={MvPopulationScreen}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default Routes
