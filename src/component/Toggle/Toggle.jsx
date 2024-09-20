import React, { useState } from 'react'

const ToggleContext = React.createContext()
const Toggle = ({ children }) => {
    const [on, setOn] = useState(false)

    const toggle = () => {
        setOn(prev => !prev)
    }
    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default Toggle;
export { ToggleContext };
