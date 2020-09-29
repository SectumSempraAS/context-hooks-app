import React, {Component} from 'react';
import {Themes} from "../contexts/Themes";
import {AuthContext} from "../contexts/AuthContext";

class NavigationBar extends Component {
    render(){
        return(
            <AuthContext.Consumer>{ (authContext) => (
                <Themes.Consumer>{(themeContext) => {
                    const {isAuthenticated, toggleAuth} = authContext;
                    console.log(toggleAuth);
                    const {isLightTheme, lightProps, darkProps}
                        = themeContext;
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
                }}</Themes.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}

export default NavigationBar;