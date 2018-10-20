import React, {Component} from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { getProjects } from "../actions";
import {connect} from "react-redux";

class Portfolio extends Component{

    componentDidMount(){
        console.log("mounted");
        this.props.getProjects();
    }

    renderProjects(){
        return _.map(this.props.projects, p => {
            console.log("render p: ", p);
            return(
                // <div key={p.title}> {/* hacky stupid solution for key, don't actually do this in real things.*/}
                //     STUFF:{p.short_description}
                // </div>
                <div>{p.id}</div>
            )
        })
    }

    render(){
        return(
            <div>
                I AM A PORTFOLIO
                {this.renderProjects()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {projects:state.projects}
}


export default connect(mapStateToProps, {getProjects})(Portfolio)