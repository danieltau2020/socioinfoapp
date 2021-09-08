import React, { useMemo } from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { useTable } from 'react-table'

const CmcaPaymentsCashAllocation = ({ cmcaPaymentsCashAllocation, year }) => {
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
      { Header: 'Region', accessor: 'regionName' },
      {
        Header: 'Cash Allocation (PGK)',
        accessor: 'cashAllocation',
        Cell: ({ cell: { value } }) => {
          return value.toLocaleString(undefined, { minimumFractionDigits: 2 })
        }
      },
      {
        Header: 'Total Population',
        accessor: 'totalPopulation',
        Cell: ({ cell: { value } }) => {
          return value.toLocaleString()
        }
      },
      {
        Header: 'Amount Per Capita (PGK)',
        accessor: 'amountPerCapita',
        Cell: ({ cell: { value } }) => {
          return value.toLocaleString(undefined, { minimumFractionDigits: 2 })
        }
      }
    ],
    []
  )

  const data = useMemo(
    () => cmcaPaymentsCashAllocation,
    [cmcaPaymentsCashAllocation]
  )

  const cmcaPaymentsCashAllocationTable = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: ['_id']
    }
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    cmcaPaymentsCashAllocationTable
  return (
    <>
      <Row className='mt-5'>
        <Col sm>
          <h4 className='h4-screen'>{`${year} Cash Allocations Per CMCA Region`}</h4>
        </Col>
      </Row>
      <Row className='mt-1'>
        <Col sm>
          <p className='p-screen'>{`Total Cash Allocation (PGK): ${cmcaPaymentsCashAllocation
            .reduce(
              (cashAllocation, amt) => cashAllocation + amt.cashAllocation,
              0
            )
            .toLocaleString(undefined, { minimumFractionDigits: 2 })}`}</p>
        </Col>
      </Row>
      <Table
        responsive
        striped
        hover
        size='sm'
        className='mt-1'
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
          {rows.map((row) => {
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
    </>
  )
}

export default CmcaPaymentsCashAllocation
