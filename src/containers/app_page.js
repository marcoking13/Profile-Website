import React from 'react';

import Apps from "./../config/myApps.js";

import Navbar from "./../components/Navbar/nav_bar.js";
import AllApps from "./../components/App/all_apps_component";
import AppCurrent from "./../components/CurrentApp/app_current_component";

import "./../css/app.css";


class AppPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentApp:false,
      loading:false,
      apps:Apps
      
    }

    this.loader = this.loader.bind(this);
    this.setApp = this.setApp.bind(this);
    this.resetState = this.resetState.bind(this);

    window.scrollTo(0,0);

  }

  resetState(){
    this.setState({currentApp:false});
  }

  loader(){
    this.setState({loading:true})
  }

  setApp(app){
    this.setState({currentApp:app});
  }

  render(){
    var background = `url(${this.state.currentApp.background})`;


     if(this.state.currentApp){
      return <AppCurrent loader = {this.loader} resetState={this.resetState} changeURL = {this.props.changeURL} currentApp = {this.state.currentApp}  background = {background}/>
    }
    else{
      return <AllApps setApp = {this.setApp} resetState={this.resetState} changeURL = {this.props.changeURL} changeURL = {this.props.changeURL} apps = {this.state.apps} />
    }

  }

}

export default AppPage;
