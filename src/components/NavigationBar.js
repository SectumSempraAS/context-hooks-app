import React, {Component} from 'react';
import {Themes} from "../contexts/Themes";

class NavigationBar extends Component {
    render(){
        return(
            <Themes.Consumer>{(context) => {
                const {isLightTheme, lightProps, darkProps}
                    = context;
                const chosenTheme = isLightTheme ? lightProps : darkProps;
                return(<nav style={{color : chosenTheme.textColor,
                    background : chosenTheme.componentColor }}>
                    <h1>Context-hooks-app</h1>
                    <p>Learn how to use context-hooks together for
                        state management.</p>
                    <ul>
                        <li>Home</li>
                        <li>Books</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                )
            }}</Themes.Consumer>
        );
    }
}

export default NavigationBar;