import React, {Component} from "react";
import { Link } from "react-router-dom";

class Nav extends Component{
    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/connect">Connect</Link>
                <Link to="/auth">Log In</Link>
                <hr />
            </div>
        )
    }
}

export default Nav;