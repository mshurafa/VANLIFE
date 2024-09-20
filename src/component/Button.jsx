
// const Button = ({children,style,...rest}) => {
//   return (
//     <button style={style} type="button" {...rest}>
//         {children}
//     </button>
//   )
// }

// export default Button
import React from "react"
import { MenuContext } from "./Menu/Menu"

export default function Button() {
    const {toggle} = React.useContext(MenuContext)
    return (
        <button className="dark-theme" onClick={toggle}>
            Switch Theme
        </button>
    )
}
