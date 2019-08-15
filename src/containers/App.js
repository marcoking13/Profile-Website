import React from 'react';
import "./../css/style.css";

import Navbar from "./../components/nav_bar.js";
import Error from "./../components/error.js";
import HomePage from "./home_page.js";
import AppCurrent from "./../components/app_current_component.js";
import AppPage from "./app_page.js";
import AboutPage from "./about_page";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url:"home"
    }

    this.changeURL = this.changeURL.bind(this);
  }

  changeURL(url){
    this.setState({url:url})
  }
  render(){
    if(this.state.url == "home"){
        return <HomePage changeURL = {this.changeURL}/>
      }
    
    else if(this.state.url == "about"){
        return <AboutPage changeURL = {this.changeURL}/>
      }
    else if(this.state.url == "apps"){
        return <AppPage changeURL = {this.changeURL}/>;
      }else{
        return <HomePage changeURL = {this.changeURL}/>
      }
}
}

export default App;
