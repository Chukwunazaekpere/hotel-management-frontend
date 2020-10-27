import React from "react";

class AuthState extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            authState: false
        }
    }

    isAuthenticated(){
        return this.state.authState;
    }

    
    changeAuthState(status){
        this.setState({ authState: status });
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default new AuthState();