import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  alertReducer,
  alertConnectionErrorReducer
} from './reducers/alertReducers'
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
  mvPopulation2020ListReducer,
  mvPopulation2021ListReducer
} from './reducers/mvPopulationReducers'
import {
  cmcaBankTypes2017ListReducer,
  cmcaBankTypes2021ListReducer
} from './reducers/cmcaBankTypesReducers'
import {
  mvBankTypes2020ListReducer,
  mvBankTypes2021ListReducer
} from './reducers/mvBankTypesReducers'
import { cmcaPaymentsReducer } from './reducers/cmcaPaymentsReducers'
import { cmcaFamilyListReducer } from './reducers/cmcaFamilyListReducers'
import { mvFamilyListReducer } from './reducers/mvFamilyListReducers'
import { cmcaPaymentsCashAllocation2021Reducer } from './reducers/cmcaPaymentsCashAllocationReducers'
import { smlLeasePaymentsReducer } from './reducers/smlLeasePaymentsReducers'

const reducer = combineReducers({
  alerts: alertReducer,
  alertConnection: alertConnectionErrorReducer,
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
  mvPopulation2020List: mvPopulation2020ListReducer,
  mvPopulation2021List: mvPopulation2021ListReducer,
  cmcaBankTypes2017List: cmcaBankTypes2017ListReducer,
  cmcaBankTypes2021List: cmcaBankTypes2021ListReducer,
  mvBankTypes2020List: mvBankTypes2020ListReducer,
  mvBankTypes2021List: mvBankTypes2021ListReducer,
  cmcaPaymentsList: cmcaPaymentsReducer,
  cmcaFamilyList: cmcaFamilyListReducer,
  mvFamilyList: mvFamilyListReducer,
  cmcaPaymentsCashAllocation2021List: cmcaPaymentsCashAllocation2021Reducer,
  smlLeasePaymentsList: smlLeasePaymentsReducer
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
