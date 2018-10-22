import React, {Component} from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";


class Home extends Component{
    render(){
        return(
            <div className="container">
                <h1 className="text-center " style={{marginTop:20}}>{this.props.siteInfo.site_title}</h1>
                <div className="row d-flex align-items-center" style={{width:"80%", margin:"auto", marginTop:20}}>
                    <div className="col-sm-4">
                    <img src={this.props.siteInfo.photo_1_link} alt="400x400photo1" style={{width:"100%","border-radius": "50%"}}/>
                    </div>
                    
                    <div className="col-sm-4 .d-sm-none .d-md-block 	.d-none .d-sm-block ">
                    <img src={this.props.siteInfo.photo_2_link} alt="400x400photo2" style={{width:"100%","border-radius": "50%"}}/>
                    </div>
                    <div className="col-sm-4 .d-sm-none .d-md-block 	.d-none .d-sm-block">
                    <img src={this.props.siteInfo.photo_3_link} alt="400x400photo3" style={{width:"100%","border-radius": "50%"}}/>
                    </div>

                </div>
                
                <div dangerouslySetInnerHTML={{__html: this.props.siteInfo.about}}/>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return {siteInfo:state.siteInfo}
}


export default connect(mapStateToProps)(Home)

// export default Home;