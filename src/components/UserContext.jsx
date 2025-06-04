import {createContext, useState} from 'react';

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [name, setName] = useState("Wea")

    const updateUser = (newName) => {
        setName(newName)
    }

    return (
        <UserContext.Provider value={{name, updateUser}}>
            {children}
        </UserContext.Provider>
    )
    
}

export {UserContext, UserProvider};