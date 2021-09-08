import React, { useMemo } from 'react'
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import GlobalFilter from './GlobalFilter'

const CmcaFamilyList = ({
  regionType,
  year,
  cmcaFamily: {
    familyList,
    pmtBatch: { pmtBatch },
    regionName: { regionName },
    villageName: { villageName },
    familyAccount: { accountName, accountNumber, bank, accountStatus }
  }
}) => {
  const columns = useMemo(
    () => [
      { Header: 'Id', accessor: '_id' },
      {
        Header: '#',
        id: 'row',
        Cell: ({ row }) => {
          return row.index + 1
        }
      },
      { Header: 'Year', accessor: 'year' },
      { Header: 'Village', accessor: 'villageName' },
      { Header: 'DW', accessor: 'dwelling' },
      { Header: 'HH', accessor: 'household' },
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Sex', accessor: 'gender' },
      { Header: 'Relationship', accessor: 'relationship' },
      { Header: 'Age Group', accessor: 'ageGroup' },
      {
        Header: 'DOB',
        accessor: 'dob'
      }
    ],
    []
  )
  const data = useMemo(() => familyList, [familyList])

  const familyListTable = useTable(
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
  } = familyListTable

  const { globalFilter, pageIndex, pageSize } = state

  return (
    <Container>
      <Row>
        <Col sm>
          <h4 className='h4-screen'>
            <i className='fas fa-users'></i>{' '}
            {`Family Details ${regionType} ${year}`}
          </h4>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm='6' md='6'>
          <p className='p-screen m-0'>
            <strong>Region: </strong>
            {regionName}
          </p>
          <p className='p-screen m-0'>
            <strong>Village: </strong>
            {villageName}
          </p>
          <p className='p-screen m-0'>
            <strong>Family Size: </strong>
            {familyList.length.toLocaleString()}
          </p>
          <p className='p-screen m-0'>
            <strong>Account Name: </strong>
            {accountName}
          </p>
          <p className='p-screen m-0'>
            <strong>Account Number: </strong>
            {accountNumber}
          </p>
          <p className='p-screen m-0'>
            <strong>Bank: </strong>
            {bank}
          </p>
          <p className='p-screen m-0'>
            <strong>Account Status: </strong>
            {accountStatus}
          </p>
          <p className='p-screen m-0'>
            <strong>Payment(s): </strong>
            {!pmtBatch ? 'NA' : `Batch ${pmtBatch}`}
          </p>
        </Col>
      </Row>
      <Row className='justify-content-end mt-1 col-screen-filter-search'>
        <Col sm='3' md='3' className='mt-1'>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Col>
      </Row>
      <Table
        responsive
        striped
        hover
        size='sm'
        {...getTableProps()}
        className='mt-3'
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
      <Row className='justify-content-center text-center align-items-center mb-3 tbl-paginate-controls'>
        <Col xs='6' sm='6' md='3' className='text-center mt-1'>
          <p className='p-screen m-0'>
            Page {pageIndex + 1} of {pageOptions.length}
          </p>
        </Col>
        <Col xs='6' sm='6' md='3' className='mt-1'>
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
        <Col xs='6' sm='6' md='3' className='mt-1'>
          <Form.Control
            type='number'
            defaultValue={pageIndex + 1}
            min='1'
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            className='tbl-go-to-page'
          />
        </Col>
        <Col xs='6' sm='6' md='3' className='mt-1'>
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

export default CmcaFamilyList
