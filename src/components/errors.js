import React, {Component} from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import {connect} from "react-redux";

class ErrorList extends Component{

    renderErrors(){

        return _.map(this.props.result, p => {

            return(

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
    return {
        result:state.login.result
    }
}


export default connect(mapStateToProps, {})(ErrorList)