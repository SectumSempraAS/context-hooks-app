import React, { useContext} from 'react';
import {Themes} from "../contexts/Themes";
import {AuthContext} from "../contexts/AuthContext";

const NavigationBar = () => {
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const {isLightTheme, lightProps, darkProps}
        = useContext(Themes);
    const chosenTheme = isLightTheme ? lightProps : darkProps;
    return(
        <nav style={{color : chosenTheme.textColor,
            background : chosenTheme.componentColor }}>
            <h1>Context-hooks-app</h1>
            <p>Learn how to use context-hooks together for
                state management.</p>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged In' : 'Logged Out'}
            </div>
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavigationBar;