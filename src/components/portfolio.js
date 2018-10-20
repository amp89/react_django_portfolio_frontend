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
                <div key={p.id}>
                    Title <div>{p.title}</div><div>{p.id}</div>
                    Code <div>{p.code_link}</div>
                    Blog Post <div>{p.blog_link}</div>
                    Created <div>{p.datetime}</div>
                    Image <div>{p.image}</div>
                    Link <div>{p.link}</div>
                    {/* <div>{p.short_description}</div> */}
                    Description <div>{p.long_description}</div>
                </div>

            )
        })
    }

    render(){
        return(
            <div>
                Portfolio
                {this.renderProjects()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {projects:state.projects}
}


export default connect(mapStateToProps, {getProjects})(Portfolio)