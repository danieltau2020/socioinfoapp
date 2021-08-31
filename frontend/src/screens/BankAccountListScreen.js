import React, { useEffect, useMemo } from 'react'
import { Row, Col, Button, Form, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import Loader from '../components/Loader'
import GlobalFilter from '../components/GlobalFilter'
import VillageDropDown from '../components/VillageDropDown'
import { getCmcaBankAccounts } from '../actions/cmcaBankAccountActions'
import { getRegionVillage } from '../actions/regionActions'
import { setAlert } from '../actions/alertActions'
import { CMCA_BANK_ACCOUNT_LIST_RESET } from '../constants/cmcaBankAccountConstants'

const BankAccountListScreen = () => {
  const dispatch = useDispatch()

  const dataSet = sessionStorage.getItem('dataSetBankAccount')
    ? JSON.parse(sessionStorage.getItem('dataSetBankAccount'))
    : ''

  const regionList = useSelector((state) => state.regionList)
  const { loading: loadingRegion, error: errorRegion, regions } = regionList

  const cmcaBankAccountList = useSelector((state) => state.cmcaBankAccountList)
  const {
    loading: loadingBankAccount,
    error: errorBankAccount,
    cmcaBankAccounts
  } = cmcaBankAccountList

  const tableColumns = [
    { Header: 'Id', accessor: '_id' },
    { Header: 'Village', accessor: 'villageName' },
    { Header: 'DW', accessor: 'dwelling' },
    { Header: 'HH', accessor: 'household' },
    { Header: 'Account Name', accessor: 'accountName' },
    { Header: 'Account Number', accessor: 'accountNumber' },
    { Header: 'Bank', accessor: 'bank' }
  ]
  const columns = useMemo(() => tableColumns, [])
  const data = useMemo(() => cmcaBankAccounts, [cmcaBankAccounts])

  const bankAccountTable = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ['_id']
      }
    },
    useGlobalFilter,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter
  } = bankAccountTable

  const { globalFilter, pageIndex, pageSize } = state

  useEffect(() => {
    dispatch(getRegionVillage())
    dispatch(getCmcaBankAccounts('101'))
  }, [dispatch, dataSet])

  // Filters
  const villageSelected = (e) => {
    dispatch(getCmcaBankAccounts(e.target.value))
    dispatch({ type: CMCA_BANK_ACCOUNT_LIST_RESET })
  }

  const setError = () => {
    dispatch(setAlert(errorRegion, 'danger'))
    dispatch(setAlert(errorBankAccount, 'danger'))
    return
  }

  return (
    <Container>
      <Row>
        <Col sm>
          <h4>
            <i className='fas fa-money-check-alt'></i> Bank Account
          </h4>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col sm>
          <h4>CMCA {`${dataSet} Dataset`}</h4>
        </Col>
      </Row>

      {errorRegion || (errorBankAccount && setError())}

      {loadingBankAccount || loadingRegion ? (
        <Loader />
      ) : (
        <>
          <Row className='row-cols-2'>
            <Col sm='6'>
              <div>Filter by villages</div>
            </Col>
            <Col sm='6' className='text-end'>
              {data.length < 1 ? (
                'Loading...'
              ) : rows.length < 1 ? (
                'No records found...'
              ) : (
                <div>{`${rows.length.toLocaleString()} Record(s)`}</div>
              )}
            </Col>
          </Row>
          <Row className='justify-content-between mt-1'>
            <Col sm='3' md='3' className='d-grid'>
              <VillageDropDown
                regions={regions}
                villageSelectedHandler={villageSelected}
              />
            </Col>
            <Col sm='3' md='4' className='mt-1'>
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </Col>
          </Row>
          <div className='table-responsive mt-4'>
            <table
              className='table table-sm table-bordered table-striped table-hover'
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <Row className='row-cols justify-content-center text-center align-items-center mt-1 mb-4'>
            <Col sm='3' md='2' className='text-center mt-1'>
              <div>
                Page {pageIndex + 1} of {pageOptions.length}
              </div>
            </Col>
            <Col sm='3' md='2' className='text-center mt-1'>
              <Form.Control
                className='form-select me-1'
                as='select'
                variant='light'
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col sm='3' md='2' className='mt-1'>
              <Form.Control
                type='number'
                defaultValue={pageIndex + 1}
                min='1'
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0
                  gotoPage(pageNumber)
                }}
              />
            </Col>
            <Col sm='3' md='5' className='mt-1'>
              <Button
                variant='light'
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {'<<'}
              </Button>

              <Button
                variant='light'
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </Button>
              <Button
                variant='light'
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </Button>
              <Button
                variant='light'
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {'>>'}
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default BankAccountListScreen
