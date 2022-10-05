import { useState } from "react"
import { Usercontext } from "./userContext"

const user = {
    id: 123,
    name: 'fernando herrera',
    email: 'herrera@gmail.com',
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
        <Usercontext.Provider value={{user, setUser}}>
            {children}
        </Usercontext.Provider>
    )
}
