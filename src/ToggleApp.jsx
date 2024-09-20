import React from 'react'
import './ToggleCss.css'
import { Star, Toggle, ToggleButton, ToggleOff, ToggleOn } from './component/Toggle'
const ToggleApp = () => {
    return (
        <div className='flex justify-center'>
            <Toggle>
                <ToggleButton>
                    <ToggleOn> this is toggle on </ToggleOn>
                    <ToggleOff> this is toggle Off </ToggleOff>
                    <Star />
                </ToggleButton>
            </Toggle>
        </div>
    )
}

export default ToggleApp
