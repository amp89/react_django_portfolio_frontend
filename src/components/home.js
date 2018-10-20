import React, {Component} from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";


class Home extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to {this.props.siteInfo.site_title}, by {this.props.siteInfo.site_author}</h1>
                
                <img src={this.props.photo_1_link} alt="photo1"/>
                <img src={this.props.photo_2_link} alt="photo2" />
                <img src={this.props.photo_3_link} alt="photo3"/>
                <div dangerouslySetInnerHTML={{__html: this.props.siteInfo.about}} />
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return {siteInfo:state.siteInfo}
}


export default connect(mapStateToProps)(Home)

// export default Home;