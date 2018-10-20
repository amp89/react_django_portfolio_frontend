import React, {Component} from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {getLogout} from "../actions";
class Nav extends Component{

    doLogout(){
        this.props.getLogout(this.props.at)
    }

    render(){
        if(this.props.loggedIn){
            return(
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/connect">Connect</Link>
                    {/* <Link to="/auth">Logout</Link> */}
                    <button onClick={this.doLogout.bind(this)}>Logout</button>
                    <hr />
                </div>
            )
        }else{
            return(
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/connect">Connect</Link>
                    <Link to="/auth">Login</Link>
                    
                    <hr />
                </div>
            )
        }

        
    }
}

function mapStateToProps(state){
    console.log("State of login: ", state.login.loggedIn)
    return {
        loggedIn:state.login.loggedIn,
        at:state.login.at,
    }
}

const mapDispatchToProps = {
    getLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

// export default Nav;