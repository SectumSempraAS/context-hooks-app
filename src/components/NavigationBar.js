import React, {Component} from 'react';
import {Themes} from "../contexts/Themes";

class NavigationBar extends Component {
    static contextType = Themes;
    render(){
        console.log(this.context);
        const {isLightTheme, lightProps, darkProps}
                                            = this.context;
        const chosenTheme = isLightTheme ? lightProps : darkProps;
        return(
            <nav style={{color : chosenTheme.textColor,
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
        );
    }
}

export default NavigationBar;