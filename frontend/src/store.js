import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { alertReducer } from './reducers/alertReducers'
import { userLoginReducer } from './reducers/userReducers'
import { cmcaPersonListReducer } from './reducers/cmcaPersonReducers'
import { cmcaBankAccountListReducer } from './reducers/cmcaBankAccountReducers'
import { regionListReducer } from './reducers/regionReducers'
import { cmcaStatsReducer } from './reducers/cmcaStatsReducers'

const reducer = combineReducers({
  alerts: alertReducer,
  userLogin: userLoginReducer,
  cmcaPersonList: cmcaPersonListReducer,
  cmcaBankAccountList: cmcaBankAccountListReducer,
  regionList: regionListReducer,
  cmcaKeyStatList: cmcaStatsReducer
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
