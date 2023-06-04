import React, { createContext, useState } from 'react'
export const globalState = createContext()

function context ({ children }) {
    
    const [showSideBar, setShowSideBar] = useState(true)
    const [active, setActive] = useState('senam')

    return ( 
        <globalState.Provider value={{ showSideBar, setShowSideBar, setActive, active }}>
            {children}
        </globalState.Provider>
    )
}

export default context