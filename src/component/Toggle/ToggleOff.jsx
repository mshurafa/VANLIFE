import React from 'react'
import { ToggleContext } from './Toggle'

const ToggleOff = ({ children }) => {
    const { on } = React.useContext(ToggleContext)
    return (
        <>
            {!on ? children : null}
        </>
    )
}

export default ToggleOff
