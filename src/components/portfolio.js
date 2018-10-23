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
        return(
            <div className="container">
            <h1 className="text-center">Portfolio</h1>
            <div className="row">
            {
            _.map(this.props.projects, p => {
                if(p.id != undefined){
                    return(
                        // <div key={p.title}> {/* hacky stupid solution for key, don't actually do this in real things.*/}
                        //     STUFF:{p.short_description}
                        // </div>
                        
                        <div id={p.id} className="col-xs-12 col-sm-12 col-md-4" key={p.id}>
                            <div className="card">
                                <a target="_blank" href={p.link}>
                                    <img className="card-img-top"  alt="1024x768" src={p.image} alt={p.title}></img>
                                </a>
                            </div>
                            <div className="card-body">
                                <a target="_blank" href={p.link}>
                                    <h5 className="card-title">{p.title}</h5>
                                </a>
                                <p className="card-text">{p.long_description}</p>
                                <a target="_blank" className="btn btn-primary" style={{margin:"2px"}} href={p.code_link}>View Code</a>
                                <a target="_blank" className="btn btn-primary" style={{margin:"2px"}}  href={p.blog_link}>View Blog Post</a>
                                <a target="_blank" className="btn btn-primary" style={{margin:"2px"}} href={p.link}>View Live</a>
                            </div>
    
    
                        </div>
    
                    )
                }
                
            })
            }
            </div>
        </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderProjects()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {projects:state.projects}
}


export default connect(mapStateToProps, {getProjects})(Portfolio)