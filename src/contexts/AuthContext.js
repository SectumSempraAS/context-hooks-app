import React, {Component, createContext} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated : false,
    }
    toggleAuthentication = () => {
        this.setState( prevState => {
            return {isAuthenticated: !prevState.isAuthenticated}
        })
    }

    // Alternative way of writing this
    // toggleAuthentication = () => {
    //     this.setState(prevState => {
    //         return {isAuthenticated : !prevState.isAuthenticated}
    //     })
    // }

    render(){
        return(
            <AuthContext.Provider value={{...this.state,
                toggleAuth : this.toggleAuthentication}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;