import React from "react";
import Navbar from "./../Navbar/nav_bar";
import NavbarMobile from "./../Navbar/mobile_nav_bar";
import CurrentDesktop from "./desktop_current_app.js";
import CurrentMobile from "./mobile_current_app.js";

class AppCurrent extends React.Component {
  constructor(props){
    super(props);
    this.renderLanguages = this.renderLanguages.bind(this);
    this.renderDiff = this.renderDiff.bind(this);

    window.scrollTo(0,0);
  }
  renderLanguages(){

      var langs = [];
      var i =0;
        for(var i =0;i<this.props.currentApp.languages.length -1;i++){
        langs.push(
          <div className="languagesL">
            <img className="languageLC" src={this.props.currentApp.languages[i].image} />
            <p className="lll">{this.props.currentApp.languages[i].name}</p>

          </div>
        )
    }
    return langs;
  }
  renderDiff(){
    var boxes=[];
    for(var i=0;i<this.props.currentApp.difficulty;i++){
      boxes.push(<div className={"diffSeg  diff"+i}/>)
    }
    return boxes;
  }
  render(){

      if(window.innerWidth >= 590){
        return (
          <div className="animator" style={{background:this.props.background,paddingBottom:"10%",backgroundSize:"cover"}}>
          <div className="navbarAppC">
              <Navbar resetState = {this.props.resetState} changeURL={this.props.changeURL}/>
            </div>
              <CurrentDesktop resetState = {this.props.resetState} renderDiff = {this.renderDiff} renderLanguages = {this.renderLanguages} currentApp = {this.props.currentApp} loader = {this.props.loader}/>
          </div>
      )
    }else{
        return (
          <div className="container-fluid"style={{background:this.props.background,paddingBottom:"900px",backgroundSize:"cover"}}>
            <NavbarMobile resetState = {this.props.resetState} changeURL = {this.props.changeURL} />
            <CurrentMobile resetState = {this.props.resetState} renderDiff = {this.renderDiff} renderLanguages = {this.renderLanguages} currentApp = {this.props.currentApp} loader = {this.props.loader}/>
          </div>

        )
      }
    }
  }




export default AppCurrent;
