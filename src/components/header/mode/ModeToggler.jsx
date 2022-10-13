import React from "react";
import "./modetoggler.css"
import {useTheme} from "../../utilities/ThemeContext.jsx"

export default function ModeToggler() {
    const { theme, toggleTheme } = useTheme();  
    return (
        <div className="mode">
            <div className="mode-toggler" onClick={toggleTheme}>
                <span className="mode-toggler-circle"></span>
            </div>
            {theme === "dark" ?
                <i class="uil uil-moon mode-dark-icon"></i> :
                <i class="uil uil-sun mode-light-icon"></i>
            }
        </div>
        
    )
}