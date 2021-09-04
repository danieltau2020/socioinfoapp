import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { getCmcaBankAccounts } from '../actions/cmcaBankAccountActions'
import { getRegionVillage } from '../actions/regionActions'
import BankAccountList from '../components/BankAccountList'
import { setAlert } from '../actions/alertActions'
import { CMCA_BANK_ACCOUNT_LIST_RESET } from '../constants/cmcaBankAccountConstants'

const CmcaBankAccountListScreen = ({ match }) => {
  const dispatch = useDispatch()

  const regionType = 'CMCA'
  const defaultVillage = '201'

  const regionList = useSelector((state) => state.regionList)
  const { loading: loadingRegion, error: errorRegion, regions } = regionList

  const cmcaBankAccountList = useSelector((state) => state.cmcaBankAccountList)
  const {
    loading: loadingBankAccount,
    error: errorBankAccount,
    cmcaBankAccounts
  } = cmcaBankAccountList

  useEffect(() => {
    dispatch(getRegionVillage())
    dispatch(getCmcaBankAccounts('201', match.params.year))
  }, [dispatch, match])

  // Filters
  const villageSelected = (e) => {
    dispatch(getCmcaBankAccounts(e.target.value, match.params.year))
    dispatch({ type: CMCA_BANK_ACCOUNT_LIST_RESET })
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
          bankAccounts={cmcaBankAccounts}
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

export default CmcaBankAccountListScreen
