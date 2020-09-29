import React, { createContext, Component } from "react";

export const Themes = createContext();

class ThemesProvider extends Component {
    state = {
       isLightTheme : true,
       lightProps : { textColor : '#555', componentColor :'#ddd',
                background: '#eee'},
       darkProps : { textColor : '#ddd', componentColor :'#333',
            background: '#555'},
    }

    render() {
        return(
            <Themes.Provider value={{...this.state}}>
                {this.props.children}
            </Themes.Provider>
        );
    }
}

export default ThemesProvider;