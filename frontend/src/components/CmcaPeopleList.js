import React, { useMemo } from 'react'
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap'
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useRowSelect
} from 'react-table'
import { useHistory } from 'react-router-dom'
import GlobalFilter from './GlobalFilter'
import VillageDropDown from './VillageDropDown'

const CmcaPeopleList = ({
  persons,
  regions,
  villageSelected,
  regionType,
  year,
  defaultVillage
}) => {
  const history = useHistory()

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: '_id'
      },
      {
        Header: '#',
        id: 'row',
        Cell: ({ row }) => {
          return row.index + 1
        }
      },
      { Header: 'Village', accessor: 'villageName' },
      { Header: 'DW', accessor: 'dwelling' },
      { Header: 'HH', accessor: 'household' },
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Sex', accessor: 'gender' },
      { Header: 'Relationship', accessor: 'relationship' }
    ],
    []
  )
  const data = useMemo(() => persons, [persons])

  const personTable = useTable(
    {
      // autoResetSelectedRows: false,
      columns,
      data,
      initialState: {
        hiddenColumns: ['_id']
      }
    },
    useGlobalFilter,
    usePagination,
    useRowSelect
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    toggleAllRowsSelected,
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

  const handleRowClick = (row) => {
    const { regionCode, villageCode, dwelling, household } = row.original
    history.push(
      `/familylist/cmca/${year}/${regionCode}/${villageCode}/${dwelling}/${household}`
    )
  }

  return (
    <Container>
      <Row>
        <Col sm>
          <h4 className='h4-screen'>
            <i className='fas fa-users'></i> People
          </h4>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col sm>
          <h4 className='h4-screen'>{`${regionType} ${year} Dataset`}</h4>
        </Col>
      </Row>
      <Row className='row-cols-2'>
        <Col sm='6' md='6'>
          <p className='p-screen'>Filter by villages</p>
        </Col>
        <Col sm='6' md='6' className='text-end'>
          <p className='p-screen'>
            {data.length < 1
              ? 'Loading...'
              : rows.length < 1
              ? 'Nil records...'
              : rows.length.toLocaleString() + ' Record(s)'}
          </p>
        </Col>
      </Row>
      <Row className='justify-content-between mt-1 col-screen-filter-search'>
        <Col sm='3' md='3' className='d-grid'>
          <VillageDropDown
            regions={regions}
            villageSelectedHandler={villageSelected}
            defaultVillage={defaultVillage}
          />
        </Col>
        <Col sm='3' md='3' className='mt-1'>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Col>
      </Row>
      <Table
        responsive
        striped
        hover
        size='sm'
        className='mt-3 selectable'
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
              <tr
                {...row.getRowProps({
                  style: {
                    backgroundColor: row.isSelected ? '#ffd1b3' : ''
                  },
                  onClick: (e) => {
                    toggleAllRowsSelected(false)
                    row.toggleRowSelected()
                    handleRowClick(row)
                  }
                })}
              >
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

export default CmcaPeopleList
