import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { Form } from 'react-bootstrap'

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, 0.3)

  return (
    <Form.Control
      type='text'
      value={value || ''}
      placeholder='Search...'
      onChange={(e) => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
    />
  )
}

export default GlobalFilter
