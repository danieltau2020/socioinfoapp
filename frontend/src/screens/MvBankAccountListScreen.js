import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { getMvBankAccounts } from '../actions/mvBankAccountActions'
import { getRegionVillage } from '../actions/regionActions'
import BankAccountList from '../components/BankAccountList'
import { setAlert } from '../actions/alertActions'
import { MV_BANK_ACCOUNT_LIST_RESET } from '../constants/mvBankAccountConstants'

const MvBankAccountListScreen = ({ match }) => {
  const dispatch = useDispatch()

  const regionType = 'Mine Villages'
  const defaultVillage = '101'

  const regionList = useSelector((state) => state.regionList)
  const { loading: loadingRegion, error: errorRegion, regions } = regionList

  const mvBankAccountList = useSelector((state) => state.mvBankAccountList)
  const {
    loading: loadingBankAccount,
    error: errorBankAccount,
    mvBankAccounts
  } = mvBankAccountList

  useEffect(() => {
    dispatch(getRegionVillage('1'))
    dispatch(getMvBankAccounts('101', match.params.year))
  }, [dispatch, match])

  // Filters
  const villageSelected = (e) => {
    dispatch(getMvBankAccounts(e.target.value, match.params.year))
    dispatch({ type: MV_BANK_ACCOUNT_LIST_RESET })
  }

  const setError = () => {
    dispatch(setAlert(errorRegion, 'danger'))
    dispatch(setAlert(errorBankAccount, 'danger'))
  }

  return (
    <Container>
      {(errorRegion || errorBankAccount) && setError()}
      {loadingBankAccount || loadingRegion ? (
        <Loader />
      ) : (
        <BankAccountList
          bankAccounts={mvBankAccounts}
          regions={regions}
          villageSelected={villageSelected}
          regionType={regionType}
          year={match.params.year}
          defaultVillage={defaultVillage}
        />
      )}
    </Container>
  )
}

export default MvBankAccountListScreen
