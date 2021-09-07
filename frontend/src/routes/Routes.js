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
import CmcaBankTypesScreen from '../screens/CmcaBankTypesScreen'
import MvBankTypesScreen from '../screens/MvBankTypesScreen'
import CmcaPaymentsListScreen from '../screens/CmcaPaymentsListScreen'
import CmcaFamilyListScreen from '../screens/CmcaFamilyListScreen'
import MvFamilyListScreen from '../screens/MvFamilyListScreen'
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
          <PrivateRoute
            exact
            path='/statistics/bankaccounts/cmca'
            component={CmcaBankTypesScreen}
          />
          <PrivateRoute
            exact
            path='/statistics/bankaccounts/mv'
            component={MvBankTypesScreen}
          />
          <PrivateRoute
            exact
            path='/payments/cmca/:year/:pmtBatch'
            component={CmcaPaymentsListScreen}
          />
          <PrivateRoute
            exact
            path='/familylist/cmca/:year/:regCode/:villCode/:dwelling/:household'
            component={CmcaFamilyListScreen}
          />
          <PrivateRoute
            exact
            path='/familylist/mv/:year/:regCode/:villCode/:dwelling/:household'
            component={MvFamilyListScreen}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default Routes
