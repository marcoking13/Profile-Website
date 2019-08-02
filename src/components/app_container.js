import React from "react";
import AppSample from "./../components/app_sample";
import SampleApps from "./../config/sampleApps.js";

class AppContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      samples: SampleApps
    }
  }

  renderApps(){
    var i =1;
    return this.state.samples.map((app)=>{

      return <AppSample  app = {app}/>

    })
  }

  render(){

    return(
      <div>
        <h2 className="appTitle bcc">My Apps</h2>
        <div className="row appContainer">

          <div className="col-3"/>
            {this.renderApps()}
          <div className="col-2"/>

        </div>
        <button className="appButton" onClick = {()=>{this.props.changeURL("apps")}}> See More</button>
      </div>
    )
  }
}

export default AppContainer;
