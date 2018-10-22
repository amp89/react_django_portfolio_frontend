import React, {Component} from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {getLogout} from "../actions";
import {fetchSiteInfo} from "../actions";
class Nav extends Component{

    doLogout(){
        this.props.getLogout(this.props.at)
    }

    componentDidMount(){
        console.log("mounted");
        this.props.fetchSiteInfo();
    }

    render(){
        // if(this.props.loggedIn){
            return(
                // <nav className="navbar navbar-expand-lg navbar-light bg-light">
                //     <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="nav justify-content-center " style={{fontSize:"2em",marginBottom:20}}>
                                {/* <li className="nav-item">
                                    <Link to="/">{this.props.siteInfo.site_title}</Link>   
                                </li> */}
                                {/* <li> | </li> */}
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li> | </li>
                                <li className="nav-item">
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li> | </li>
                                <li className="nav-item">
                                    <Link to="/connect">Connect</Link>
                                </li>
                                <li> | </li>
                                <li className="nav-item">
                                    {this.props.loggedIn === true ? <a href="#" onClick={this.doLogout.bind(this)}>Logout</a> : <Link to="/auth">Login</Link>}
                                </li>
                            </ul>
                //     </div>

                // </nav>
            )

        
    }
}

function mapStateToProps(state){
    console.log("site state: ", state.siteInfo)
    console.log("State of login: ", state.login.loggedIn)
    return {
        loggedIn:state.login.loggedIn,
        at:state.login.at,
        siteInfo:state.siteInfo,
    }
}

const mapDispatchToProps = {
    getLogout,
    fetchSiteInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

// export default Nav;