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
        console.log("connect mounted - getting stuff")
        this.props.getContact(this.props.login.at)
    }

    sendMessage(values){
        this.props.sendMessage(values)
    }

    renderRedirect = (status) => {
        console.log("redir checK: ", this.props.loggedIn)
        // console.log("redir checK: ", state.loggedIn)
        console.log("redir checK stat: ", status)
        if (this.props.loggedIn) {
            console.log("redir")
          return <Redirect to='/' />
        }else{
            console.log('no redir')
        }
      }

    resetMessage(){
        this.props.resetMessage()
        console.log("R: ", this.props.contactInfo.result)
    }

    render(){
            //workaround
            
            // console.log("LOGGED IN ORRRRRRRRR.... ", this.props.login.loggedIn)
            // if(this.props.login.loggedIn == true){
                console.log("what: ", this.props.contactInfo)
                console.log("login: ",  this.props.login)
                return(<div className="text-center">
                    <h4>
                        Blog: <a target="_blank" href={this.props.contactInfo.blog}>{this.props.contactInfo.blog}</a>
                    </h4>
                    <h4>
                        Email: <a  href={"mailto:" + this.props.contactInfo.email}>{this.props.contactInfo.email}</a>
                    </h4>
                    <h4>
                        Github: <a target="_blank"  href={this.props.contactInfo.github}>{this.props.contactInfo.github}</a>
                    </h4>
                    <h4>
                        Linkedin: <a target="_blank" href={this.props.contactInfo.linkedin}>Linkedin</a>
                    </h4>
                    <h4>
                        Phone: <a href={"tel:" + this.props.contactInfo.phone}>{this.props.contactInfo.phone}</a>
                    </h4>
                    <form className="form-signin" onSubmit={this.props.handleSubmit(this.sendMessage.bind(this))}>
                        {/* U: <Field component="input" type="text" label="usr" name="usr" /> */}
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
                                {console.log("C: ", this.props.contactInfo)}
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
            // }else{
            //     return(<div>
                    
            //         Blog: {this.props.contactInfo.blog}
            //         Email: You have to <Link to="/auth">Login</Link> to see this :)
            //         Github: {this.props.contactInfo.github}
            //         Linkedin: {this.props.contactInfo.linkedin}
            //         Phone: You have to <Link to="/auth">Login</Link> to see this :)
            //         <form onSubmit={this.props.handleSubmit(this.sendMessage.bind(this))}>
            //             {/* U: <Field component="input" type="text" label="usr" name="usr" /> */}
            //                 <h1>You have to <Link to="/auth">login</Link> before sending me a message :)</h1>
            //                 u: <Field component="input" label="subject" name="subject" disabled={!this.props.login.loggedIn}/>
            //                 f: <Field component="textarea" label="body" name="body" disabled={!this.props.login.loggedIn}/>
            //                 <button type="submit">Send!</button>
                        
                        
            //         </form>
            //         
            //     </div>)
            // }
            
        
    }
}

function validate(values){
    const errors = {}
    return errors;
}

function mapStateToProps(state){
    console.log("contact... state: ", state)
    return {
        contactInfo:state.contact,
        login:state.login,
    }
}


export default reduxForm({validate,form:"ConnectForm"})(connect(mapStateToProps,{sendMessage:sendMessage,getContact:getContact,resetMessage:resetMessage})(Connect));
