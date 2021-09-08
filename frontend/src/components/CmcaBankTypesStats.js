import React, { useMemo } from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { useTable } from 'react-table'

const CmcaBankTypesStats = ({ cmcaBankTypes, year }) => {
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
        Header: 'BSP',
        accessor: 'bsp',
        Cell: ({ cell: { value } }) => {
          return value.toLocaleString()
        }
      },
      {
        Header: 'Westpac',
        accessor: 'westpac',
        Cell: ({ cell: { value } }) => {
          return value.toLocaleString()
        }
      },
      {
        Header: 'ANZ',
        accessor: 'anz',
        Cell: ({ cell: { value } }) => {
          return value.toLocaleString()
        }
      },
      {
        Header: 'No Account',
        accessor: 'noAccount',
        Cell: ({ cell: { value } }) => {
          return value.toLocaleString()
        }
      },
      {
        Header: 'Not Active',
        accessor: 'notActive',
        Cell: ({ cell: { value } }) => {
          return value === 'NA' ? value : parseFloat(value).toLocaleString()
        }
      },
      {
        Header: 'Active',
        accessor: 'activeAccount',
        Cell: ({ cell: { value } }) => {
          return value === 'NA' ? value : parseFloat(value).toLocaleString()
        }
      },
      {
        Header: 'Total',
        accessor: 'total',
        Cell: ({ cell: { value } }) => {
          return value.toLocaleString()
        }
      }
    ],
    []
  )

  const data = useMemo(() => cmcaBankTypes, [cmcaBankTypes])

  const cmcaBankTypesTable = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: ['_id']
    }
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    cmcaBankTypesTable
  return (
    <>
      <Row className='mt-3'>
        <Col sm>
          <h4 className='h4-screen'>{`${year} Dataset`}</h4>
        </Col>
      </Row>
      <Row className='mt-1'>
        <Col sm>
          <p className='p-screen'>{`Total Bank Accounts: ${cmcaBankTypes
            .reduce((totalPop, pop) => totalPop + pop.total, 0)
            .toLocaleString()} (inclusive - No Accounts, Not Active: [dormant, closed, other account problems] )`}</p>
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

export default CmcaBankTypesStats
