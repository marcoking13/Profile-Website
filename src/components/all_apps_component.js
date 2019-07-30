import React from "react";
import Navbar from "./nav_bar";
import MobileNav from "./mobile_nav_bar.js";
class AllApps extends React.Component {

  renderAllApps(){
    return this.props.apps.map((app)=>{
      var background = `url(${app.background})`;

      return(
        <div className="col-1 appBox" onClick = {()=>{
          this.props.setApp(app);
        }}>
          <div className="appBackground"style={{background:background}}>
            <img className="appLogo" src={app.image}/>
          </div>
          <h2 className="appNamer">{app.name}</h2>
        </div>
      )
    })
  }
  renderAllAppsMobile(){
    return this.props.apps.map((app)=>{
      var background = `url(${app.background})`;

      return(
        <div className="appBoxM" onClick = {()=>{
          this.props.setApp(app);
        }}>
          <div className="appBackgroundM"style={{background:background}}>
            <img className={"appLogoM"} src={app.image}/>
          </div>
          <h2 className="appNamerM">{app.name}</h2>
        </div>
      )
    })
  }

  render(){
      if(window.innerWidth <= 590){
        return(
          <div className="container-fluid pad1090"style={{background:"url('images/mosaic.png')"}}>
            <MobileNav changeURL= {this.props.changeURL} />

            <div className="appContainer" >
                <h2 className="appTitle">My Apps</h2>

                  <div>
                      {this.renderAllAppsMobile()}

                  </div>
            </div>

          </div>
        )
      }else{
      return (
        <div className="container-fluid pad100"style={{background:"url('images/mosaic.png')"}}>
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
      )
    }
  }
}



export  default AllApps;
