import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const AlertMsg = () => {
  const alerts = useSelector((state) => state.alerts)

  return (
    alerts !== null &&
    alerts.map((alert) => (
      <Alert className='text-center' key={alert.id} variant={alert.alertType}>
        {alert.msg}
      </Alert>
    ))
  )
}

export default AlertMsg
