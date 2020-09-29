import React, { Component } from 'react';
import {Themes} from "../contexts/Themes";

class ToggleTheme extends Component {
    static contextType = Themes;
    render(){
        console.log(this.context);
        return(
            <button type='radio'
                   onClick={this.context.toggleTheme}>
                DARK MODE
            </button>
        )
    }
}

export default ToggleTheme;