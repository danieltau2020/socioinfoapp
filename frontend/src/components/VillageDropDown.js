import React from 'react'
import { Form } from 'react-bootstrap'

const VillageDropDown = ({
  regions,
  villageSelectedHandler,
  defaultVillage
}) => {
  return (
    <Form.Control
      className='form-select'
      as='select'
      variant='light'
      style={{ width: 'auto' }}
      onChange={(e) => villageSelectedHandler(e)}
      defaultValue={defaultVillage}
    >
      <option value=''>--All--</option>
      {regions.map((region) => (
        <optgroup key={region._id} label={region.regionName}>
          {region.villages.map((village) => (
            <option key={village._id} value={village.villageCode}>
              {village.villageName}
            </option>
          ))}
        </optgroup>
      ))}
    </Form.Control>
  )
}

export default VillageDropDown
