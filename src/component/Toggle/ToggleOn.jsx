import React from 'react'
import { ToggleContext } from './Toggle'

const ToggleOn = ({ children }) => {
    const { on } = React.useContext(ToggleContext)
    return (
        <>
            {on ? children : null}
        </>
    )
}

export default ToggleOn
