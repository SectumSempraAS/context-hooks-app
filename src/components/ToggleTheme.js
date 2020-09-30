import React, {useContext} from 'react';
import {Themes} from "../contexts/Themes";

const ToggleTheme = () => {
    const {toggleTheme} = useContext(Themes)
    return(
        <button type='radio'
                onClick={toggleTheme}>
            DARK MODE
        </button>
    )
}
export default ToggleTheme;