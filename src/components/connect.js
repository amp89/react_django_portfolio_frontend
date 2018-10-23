import React, {Component} from "react";
import { Link } from "react-router-dom";
import {getContact} from "../actions";
import {sendMessage} from "../actions";
import {resetMessage} from "../actions";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import MessageErrorList from "./message_errors"
import { Redirect } from 'react-router-dom'

class Connect extends Component{

    componentDidMount(){

        this.props.getContact(this.props.login.at)
    }

    sendMessage(values){
        this.props.sendMessage(values)
    }

    renderRedirect = (status) => {

        if (this.props.loggedIn) {

          return <Redirect to='/' />
        }
      }

    resetMessage(){
        this.props.resetMessage()

    }

    render(){
            
        return(<div className="text-center">
            <h4>
                Blog: <a target="_blank" href={this.props.contactInfo.blog}>{this.props.contactInfo.blog}</a>
            </h4>
            <h4>
                Email: {this.props.login.loggedIn ?  <a  href={"mailto:" + this.props.contactInfo.email}>{this.props.contactInfo.email}</a> : <Link to="/auth">Login to see</Link>}
            </h4>
            <h4>
                Github: <a target="_blank"  href={this.props.contactInfo.github}>{this.props.contactInfo.github}</a>
            </h4>
            <h4>
                Linkedin: <a target="_blank" href={this.props.contactInfo.linkedin}>Linkedin</a>
            </h4>
            <h4>
                Phone: {this.props.login.loggedIn ?<a href={"tel:" + this.props.contactInfo.phone}>{this.props.contactInfo.phone}</a>: <Link to="/auth">Login to see</Link>}
            </h4>
            <form className="form-signin" onSubmit={this.props.handleSubmit(this.sendMessage.bind(this))}>

                <div>
                    <div>
                        <label 
                                for="subject"
                        >Subject:</label>
                        
                        {this.props.login.loggedIn == true ? 
                            <Field style={{width:"80%"}} component="input" label="subject" name="subject" required autoFocus/>
                            : 
                            <div>
                                <div><Link to="/auth">Login to write messages</Link></div>
                                <Field style={{width:"80%"}} component="input" label="subject" name="subject"  disabled/>
                            </div>
                            }
                        
                    </div>
                    <div>
                        <label 
                                for="body"
                        >Body:</label>
                        {this.props.login.loggedIn == true ? 
                        <Field style={{width:"80%",height:300}} component="textarea" label="body" name="body" required/>
                        :
                        <div>
                        <div><Field style={{width:"80%",height:300}} component="textarea" label="body" name="body" disabled /></div>
                        <div><Link to="/auth">Login to write messages</Link></div>
                        </div>
                        }
                        {this.props.contactInfo.result && this.props.contactInfo.result.length > 0 && this.props.contactInfo.result[0] == "Message Sent" ? 
                        <div>{this.props.contactInfo.result[0]} Thank you! <a href="#" onClick={this.resetMessage.bind(this)}>Send another.</a></div>
                        : 
                        <div><button className="btn btn-lg btn-primary" type="submit">Send</button></div>
                    }
                    
                </div>
                </div>
                
                
                
            </form>
            <MessageErrorList />
        </div>)

            
        
    }
}

function validate(values){
    const errors = {}
    return errors;
}

function mapStateToProps(state){
    return {
        contactInfo:state.contact,
        login:state.login,
    }
}


export default reduxForm({validate,form:"ConnectForm"})(connect(mapStateToProps,{sendMessage:sendMessage,getContact:getContact,resetMessage:resetMessage})(Connect));
