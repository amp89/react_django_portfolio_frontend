import React, {Component} from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import {connect} from "react-redux";

class MessageErrorList extends Component{

    renderErrors(){
        return _.map(this.props.result, p => {
            return(

                <div>{p}</div>
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
        result:state.contact.result
    }
}


export default connect(mapStateToProps, {})(MessageErrorList)