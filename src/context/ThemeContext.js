import React, { useContext, useState } from "react"
import Themes from '../Themes.js';
/*eslint-disable */

const ThemeContext = React.createContext()
const ThemeContextUpdate = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    return useContext(ThemeContextUpdate)
}

export const ThemeProvider = ({children}) =>{
    const [SelectTheme, SetSelectTheme] = useState(0)
    const Theme = Themes[SelectTheme]

    return(
        <ThemeContext.Provider value={Theme}>
            <ThemeContextUpdate.Provider value={SetSelectTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}