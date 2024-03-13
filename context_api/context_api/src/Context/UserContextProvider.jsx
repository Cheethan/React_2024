import React, { useState } from 'react'
import x from './UserContext'

function UserContextProvider({children}) {

    const [user,setUser] = useState(null);

  return (
    <>
        <x.Provider value={{user,setUser}}>
            {children}
        </x.Provider>
    </>
  )
}

export default UserContextProvider
