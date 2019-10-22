import React from "react";
import Navbar from "./../Navbar/nav_bar";
import MobileNav from "./../Navbar/mobile_nav_bar.js";
import AppMobileBox from "./Mobile/app_mobile_box";
import AppDesktopBox from "./Desktop/app_desktop_box";

//------------------------DONE-------------------------------

class AllApps extends React.Component {

  render(){

    var background = `url("images/purps.png")`;

      if(window.innerWidth <= 590){

        return(
          <div className="container-fluid pb100px"style={{background:background}}>
            <MobileNav changeURL= {this.props.changeURL} />
            <AppMobileBox setApp = {this.props.setApp} apps = {this.props.apps} />
          </div>
        );

      }

      else{

        return (
          <div className="container-fluid">

            <Navbar changeURL = {this.props.changeURL}/>

          <div className="pad100px"style={{background:background}}>
              <br />
              <AppDesktopBox setApp = {this.props.setApp} apps = {this.props.apps} />
          </div>

        </div>
      );

    }

  }

}



export  default AllApps;
