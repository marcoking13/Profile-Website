import React from "react";

import Credits from "./../config/credits.js";

import CreditBox from "./../components/Credits/credit_box.js";

import Navbar from "./../components/Navbar/nav_bar"
import NavbarMobile from "./../components/Navbar/mobile_nav_bar"

export default class CreditPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      credits:Credits
    }
    window.scrollTo(0,0);
  }
  renderBoxes(){
    return this.state.credits.map((credit)=>{
        return <CreditBox credit = {credit} />
    })
  }
  renderNavbar(){
    if(window.innerWidth <= 480){
      return <NavbarMobile changeURL = {this.props.changeURL} />
    }else{
        return <Navbar changeURL = {this.props.changeURL} />
    }
  }
  render(){
    return(
      <div className="container-fluid animator bb">
        {this.renderNavbar()}
        <br />
        <br />
        <br />
        <ul className="list-group">
            {this.renderBoxes()}
        </ul>

      </div>
    )
  }
}
