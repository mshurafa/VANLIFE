
import { Menu, MenuButton, MenuDropdown, MenuItem } from "./component/Menu"
import "./MenuCss.css"
import React from 'react'
const ThemeContext = React.createContext()
export default function MenuApp() {
    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
    return (
        <>
            <Menu>
                <MenuButton>Sportsss</MenuButton>
                <MenuDropdown>
                    {sports.map((sport, key) => (
                        <div key={key}>
                            <MenuItem>{sport}</MenuItem>
                        </div>
                    ))}
                </MenuDropdown>
            </Menu>
            {/* <ThemeContext.Provider value='Dark'>
     <div className="container dark-theme">
                <Header />
                <Button />
    </div>
    </ThemeContext.Provider> */}
        </>
    )
}

export { ThemeContext }
