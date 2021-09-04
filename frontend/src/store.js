import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { alertReducer } from './reducers/alertReducers'
import { userLoginReducer } from './reducers/userReducers'
import { cmcaPersonListReducer } from './reducers/cmcaPersonReducers'
import { cmcaBankAccountListReducer } from './reducers/cmcaBankAccountReducers'
import { mvPersonListReducer } from './reducers/mvPersonReducers'
import { mvBankAccountListReducer } from './reducers/mvBankAccountReducers'
import { regionListReducer } from './reducers/regionReducers'
import { cmcaKeyStatsReducer } from './reducers/cmcaKeyStatsReducers'
import { mvKeyStatsReducer } from './reducers/mvKeyStatsReducers'
import {
  cmcaRegionPopulation2017ListReducer,
  cmcaRegionPopulation2021ListReducer
} from './reducers/cmcaRegionPopulationReducers'
import {
  mvPopulation2017ListReducer,
  mvPopulation2021ListReducer
} from './reducers/mvPopulationReducers'

const reducer = combineReducers({
  alerts: alertReducer,
  userLogin: userLoginReducer,
  cmcaPersonList: cmcaPersonListReducer,
  cmcaBankAccountList: cmcaBankAccountListReducer,
  mvPersonList: mvPersonListReducer,
  mvBankAccountList: mvBankAccountListReducer,
  regionList: regionListReducer,
  cmcaKeyStatList: cmcaKeyStatsReducer,
  mvKeyStatList: mvKeyStatsReducer,
  cmcaRegionPopulation2017List: cmcaRegionPopulation2017ListReducer,
  cmcaRegionPopulation2021List: cmcaRegionPopulation2021ListReducer,
  mvPopulation2017List: mvPopulation2017ListReducer,
  mvPopulation2021List: mvPopulation2021ListReducer
})

const userInfoFromStorage = sessionStorage.getItem('userInfo')
  ? JSON.parse(sessionStorage.getItem('userInfo'))
  : null

const initialState = { userLogin: { userInfo: userInfoFromStorage } }

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
