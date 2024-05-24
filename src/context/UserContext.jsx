import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => { 
    
    const [user, setUser] = useState({
        login: false,
        nombre: '',
        token: ''
    });

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

 }
 
 export default UserProvider

 export const useUserContext = () => useContext(UserContext)
