import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';


function PrivateRoute({children}) {
  const location = useLocation()
  console.log(location)
  const {user,loading} = useContext(AuthContext)
  if(loading){
   return <div className='max-w-7xl mx-auto flex items-center justify-center py-52'><span className="loading loading-dots loading-lg "></span></div>
  }
  if(user){
    return children;
  }
  return <Navigate to={`/signin`} state={location?.pathname}></Navigate>
}

export default PrivateRoute