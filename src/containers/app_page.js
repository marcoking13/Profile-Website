import React from 'react';
import "./../css/app.css";
import Navbar from "./../components/nav_bar.js";
import Showcase from "./../components/showcase.js";


import AppLoading from "./../components/app_loader_component";
import Apps from "./../config/myApps.js";
import AllApps from "./../components/all_apps_component";
import AppCurrent from "./../components/app_current_component";


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
    if(this.state.loading){
      return <AppLoading loader = {this.loader} resetState={this.resetState} changeURL = {this.props.changeURL} currentApp = {this.state.currentApp} background = {background} />
    }
    else if(this.state.currentApp){
      return <AppCurrent loader = {this.loader} resetState={this.resetState} changeURL = {this.props.changeURL} currentApp = {this.state.currentApp}  background = {background}/>
    }
    else{
      return <AllApps setApp = {this.setApp} resetState={this.resetState}changeURL = {this.props.changeURL} changeURL = {this.props.changeURL} apps = {this.state.apps} />
    }

  }


}

export default AppPage;
