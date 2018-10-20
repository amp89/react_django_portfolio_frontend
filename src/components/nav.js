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
        if(this.props.loggedIn){
            return(
                <div>
                    <div><Link to="/">{this.props.siteInfo.site_title}</Link></div>
                    <div>by <Link to="/">{this.props.siteInfo.site_author}</Link></div>
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
                    <div><Link to="/">{this.props.siteInfo.site_title}</Link></div>
                    <div>by <Link to="/">{this.props.siteInfo.site_author}</Link></div>
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