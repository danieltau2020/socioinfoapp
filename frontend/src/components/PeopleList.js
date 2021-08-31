import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import GlobalFilter from '../components/GlobalFilter'
import VillageDropDown from '../components/VillageDropDown'

const PeopleList = ({ cmcaPersons, regions, villageSelected }) => {
  const dataSet = sessionStorage.getItem('dataSetPeople')
    ? JSON.parse(sessionStorage.getItem('dataSetPeople'))
    : ''

  const tableColumns = [
    { Header: 'Id', accessor: '_id' },
    { Header: 'Village', accessor: 'villageName' },
    { Header: 'DW', accessor: 'dwelling' },
    { Header: 'HH', accessor: 'household' },
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'Sex', accessor: 'gender' },
    { Header: 'Relationship', accessor: 'relationship' }
  ]
  const columns = useMemo(() => tableColumns, [])
  const data = useMemo(() => cmcaPersons, [cmcaPersons])

  const personTable = useTable(
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
  } = personTable

  const { globalFilter, pageIndex, pageSize } = state

  return (
    <Container>
      <Row>
        <Col sm>
          <h4>
            <i className='fas fa-users'></i> People
          </h4>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col sm>
          <h4>{`CMCA ${dataSet} Dataset`}</h4>
        </Col>
      </Row>

      {loadingPerson || loadingRegion ? (
        <Loader />
      ) : errorPerson || errorRegion ? (
        <Message variant='danger'>{`${errorPerson} ${errorRegion}`}</Message>
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
              Page {pageIndex + 1} of {pageOptions.length}
            </Col>
            <Col sm='3' md='2' className='mt-1'>
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
            <Col sm='6' md='4' className='mt-1'>
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

export default PeopleList
