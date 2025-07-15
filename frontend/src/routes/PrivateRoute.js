import {Navigate} from "react-router-dom"
import {useAuth} from "../auth/AuthContext"


const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useAuth

    if(!isAuthenticated){
        return <Navigate to="/logn" />
    }

    return children
}


export default PrivateRoute