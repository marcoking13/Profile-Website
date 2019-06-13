import React from "react";

import Navbar from "./nav_bar";
class AllApps extends React.Component{
  renderAllApps(){
    return this.props.apps.map((app)=>{
      var background = `url(${app.background})`;

      return(
        <div className="col-1 appBox" onClick = {()=>{
          this.props.setApp(app);
        }}>
          <div className="appBackground"style={{background:background}}>
            <img className={"appLogo " + app.className} src={app.image}/>
          </div>
          <h2 className="appNamer">{app.name}</h2>
        </div>
      )
    })
  }
  render(){

    return(
      <div className="container-fluid"style={{background:"url('images/mosaic.png')"}}>
        <div className=" bb">
          <Navbar changeURL = {this.props.changeURL}/>
        </div>
        <div className="appContainer">
            <h2 className="appTitle">My Apps</h2>

              <div className="row">
                  {this.renderAllApps()}
              </div>

        </div>
    </div>
  );
  }
}


export default AllApps;
