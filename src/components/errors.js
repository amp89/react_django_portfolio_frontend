import React, {Component} from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import {connect} from "react-redux";

class ErrorList extends Component{

    renderErrors(){
        console.log("redner errs.")
        return _.map(this.props.result, p => {
            console.log("render p: ", p);
            return(
                // <div key={p.title}> {/* hacky stupid solution for key, don't actually do this in real things.*/}
                //     STUFF:{p.short_description}
                // </div>
                <h3 className="text-center">{p}</h3>
            )
        })
    }

    render(){
        return(
            <div>
                {this.renderErrors()}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("ERR: all state: ", state)
    return {
        result:state.login.result
    }
}


export default connect(mapStateToProps, {})(ErrorList)