import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingScreen from './screens/LandingScreen'
import Header from './components/Header'
import Routes from './routes/Routes'
const App = () => {
  return (
    <Router>
      <div className='main-container app-styleguide'>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingScreen} />
          {/* {!userInfo ? (
            <Route exact path='/' component={LandingScreen} />
          ) : (
            <Redirect to='/home' />
          )} */}
          <Route component={Routes} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
