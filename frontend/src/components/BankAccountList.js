import React, { useMemo } from 'react'
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import GlobalFilter from '../components/GlobalFilter'
import VillageDropDown from '../components/VillageDropDown'

const BankAccountList = ({
  bankAccounts,
  regions,
  villageSelected,
  regionType,
  year,
  defaultVillage
}) => {
  const columns = useMemo(
    () => [
      { Header: 'Id', accessor: '_id' },
      { Header: 'Village', accessor: 'villageName' },
      { Header: 'DW', accessor: 'dwelling' },
      { Header: 'HH', accessor: 'household' },
      { Header: 'Account Name', accessor: 'accountName' },
      { Header: 'Account Number', accessor: 'accountNumber' },
      { Header: 'Bank', accessor: 'bank' }
    ],
    []
  )
  const data = useMemo(() => bankAccounts, [bankAccounts])

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
          <h4>{`${regionType} ${year} Dataset`}</h4>
        </Col>
      </Row>
      <Row className='row-cols-2'>
        <Col sm='6'>
          <p>Filter by villages</p>
        </Col>
        <Col sm='6' className='text-end'>
          <p>
            {data.length < 1 ? (
              'Loading...'
            ) : rows.length < 1 ? (
              'No records...'
            ) : (
              <div>{`${rows.length.toLocaleString()} Record(s)`}</div>
            )}
          </p>
        </Col>
      </Row>
      <Row className='justify-content-between mt-1'>
        <Col sm='3' md='3' className='d-grid'>
          <VillageDropDown
            regions={regions}
            villageSelectedHandler={villageSelected}
            defaultVillage={defaultVillage}
          />
        </Col>
        <Col sm='3' md='4' className='mt-1'>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Col>
      </Row>
      <Table
        responsive
        striped
        hover
        size='sm'
        className='mt-4'
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Row className='row-cols justify-content-center text-center align-items-center mt-1 mb-4'>
        <Col sm='3' md='2' className='text-center mt-1'>
          <p className='p-screen m-0'>
            Page {pageIndex + 1} of {pageOptions.length}
          </p>
        </Col>
        <Col sm='3' md='2' className='text-center mt-1'>
          <Form.Control
            className='form-select me-1'
            as='select'
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
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
          />
        </Col>
        <Col sm='3' md='5' className='mt-1'>
          <Button
            className='btn-paginate'
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </Button>

          <Button
            className='btn-paginate'
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          <Button
            className='btn-paginate'
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </Button>
          <Button
            className='btn-paginate'
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default BankAccountList
