/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

export const ProtectedRouteForFarmer = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "farmer") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}