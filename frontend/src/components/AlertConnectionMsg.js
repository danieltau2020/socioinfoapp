import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const AlertConnectionMsg = () => {
  const alertConnection = useSelector((state) => state.alertConnection)

  return (
    alertConnection !== null &&
    alertConnection.map((alert) => (
      <Alert className='text-center' key={alert.id} variant={alert.alertType}>
        {alert.msg}
      </Alert>
    ))
  )
}

export default AlertConnectionMsg
