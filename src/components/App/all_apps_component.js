import React from "react";
import Navbar from "./../Navbar/nav_bar";
import MobileNav from "./../Navbar/mobile_nav_bar.js";
import AppMobileBox from "./Mobile/app_mobile_box";
import AppDesktopBox from "./Desktop/app_desktop_box";
import Footnote from "./../Footer/footnote.js";
import FootnoteMobile from "./../Footer/footnote_mobile.js";

//------------------------DONE-------------------------------

class AllApps extends React.Component {

  render(){

    var background = `url("images/purps.png")`;

      if(window.innerWidth <= 590){

        return(
          <div className="container-fluid "style={{background:background}}>
            <MobileNav changeURL= {this.props.changeURL} />
            <AppMobileBox setApp = {this.props.setApp} apps = {this.props.apps} />
            <FootnoteMobile />
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
          <Footnote />
        </div>
      );

    }

  }

}



export  default AllApps;
