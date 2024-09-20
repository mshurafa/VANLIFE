import React from "react";
import { MenuContext } from "./Menu";

export default function MenuDropdown({ children }) {

    const {open} = React.useContext(MenuContext)
    console.log(open);
    return MenuContext ? (
        <div className="menu-dropdown">
            {open && children}
        </div>
    ) : null
}
