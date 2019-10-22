import React from "react";
import AppSample from "./app_sample";

import SampleApps from "./../../../config/sampleApps.js";

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

    });

  }

  render(){

    return(
      <div className="container-fluid">

        <div className="row">

          <div className="col-3"/>
            {this.renderApps()}
          <div className="col-2"/>

        </div>

          <br />

            <div className="row">
              <div className="col-4"/>

              <div className="col-4">
                <br />
                <button className="button ui w100 black" onClick = {()=>{this.props.changeURL("apps")}} > See More </button>
              </div>

            </div>

      </div>
    );

  }

}

export default AppContainer;
