import { Navigate} from 'react-router-dom';

const PrivateRoute = () => {
  return (
        <Navigate to="/my-courses" />
  )
}

export default PrivateRoute