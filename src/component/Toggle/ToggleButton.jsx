import React from 'react'
import { ToggleContext } from './Toggle'

const ToggleButton = ({ children }) => {
    const { toggle } = React.useContext(ToggleContext)
    console.log('Toggle Button log');
    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}

export default ToggleButton
