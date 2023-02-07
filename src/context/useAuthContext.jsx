import { useContext } from "react"
import { authContext } from "./AuthContextProvider"


const useAuthContext = (props) => {

  const contextValue = useContext(authContext)

  return contextValue
}

export default useAuthContext