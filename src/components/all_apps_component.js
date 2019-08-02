import React from "react";
import Navbar from "./nav_bar";
import MobileNav from "./mobile_nav_bar.js";
import AppMobileBox from "./app_mobile_box";
import AppDesktopBox from "./app_desktop_box";
class AllApps extends React.Component {


  render(){
      if(window.innerWidth <= 590){
        return(
          <div className="container-fluid pad1090"style={{background:"url('images/mosaic.png')"}}>
            <MobileNav changeURL= {this.props.changeURL} />
            <AppMobileBox setApp = {this.props.setApp} apps = {this.props.apps} />
          </div>
        )
      }else{
      return (
        <div className="container-fluid pad100"style={{background:"url('images/mosaic.png')"}}>
          <div className=" bb">
            <Navbar changeURL = {this.props.changeURL}/>
          </div>
            <AppDesktopBox setApp = {this.props.setApp} apps = {this.props.apps} />
        </div>
      )
    }
  }
}



export  default AllApps;
