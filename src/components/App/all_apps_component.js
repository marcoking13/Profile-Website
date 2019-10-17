import React from "react";
import Navbar from "./../Navbar/nav_bar";
import MobileNav from "./../Navbar/mobile_nav_bar.js";
import AppMobileBox from "./Mobile/app_mobile_box";
import AppDesktopBox from "./Desktop/app_desktop_box";

//------------------------DONE-------------------------------

class AllApps extends React.Component {

  render(){

      if(window.innerWidth <= 590){

        return(

          <div className="container-fluid pb100px"style={{background:"url('images/mosaic.png')"}}>
            <MobileNav changeURL= {this.props.changeURL} />
            <AppMobileBox setApp = {this.props.setApp} apps = {this.props.apps} />
          </div>

        );

      }

      else{

        return (

          <div className="container-fluid pad100px"style={{background:"url('images/mosaic.png')"}}>

            <div className=" bb">
              <Navbar changeURL = {this.props.changeURL}/>
            </div>

              <AppDesktopBox setApp = {this.props.setApp} apps = {this.props.apps} />

          </div>
      );

    }

  }

}



export  default AllApps;
