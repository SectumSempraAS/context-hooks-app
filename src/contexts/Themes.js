import React, { createContext, Component } from "react";

export const Themes = createContext();

class ThemesProvider extends Component {
    constructor() {
        super();
        this.state = {
            isLightTheme : true,
            lightProps : { textColor : '#555', componentColor :'#ddd',
                background: '#eee'},
            darkProps : { textColor : '#ddd', componentColor :'#333',
                background: '#555'},
        }
    }

    toggleTheme = () => {
        this.setState( prevState => {
                return {isLightTheme: !prevState.isLightTheme}
            })
    }

    render() {
        return(
            <Themes.Provider value={{...this.state,
                toggleTheme : this.toggleTheme}}>
                {this.props.children}
            </Themes.Provider>
        );
    }
}

export default ThemesProvider;