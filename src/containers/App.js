import React from 'react';

import "./../css/style.css";

import Navbar from "./../components/Navbar/nav_bar.js";
import HomePage from "./home_page.js";
import AppCurrent from "./../components/CurrentApp/app_current_component.js";
import AppPage from "./app_page.js";
import AboutPage from "./about_page";
import Footnote from "./../components/Footer/footnote";
import FootnoteMobile from "./../components/Footer/footnote_mobile";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      url:"home"
    }

    this.changeURL = this.changeURL.bind(this);

  }

  renderFooter(){
    if(window.innerWidth < 480){
      return <FootnoteMobile changeURL = {this.changeURL} />
    }else{
      return <Footnote changeURL = {this.changeURL} />
    }
  }

  changeURL(url){
    this.setState({url:url})
  }

  render(){

    if(this.state.url == "home"){
        return (
          <div >
            <HomePage changeURL = {this.changeURL}/>
            {this.renderFooter()}
          </div>
        )
      }

    else if(this.state.url == "about"){
        return (
          <div>
            <AboutPage changeURL = {this.changeURL}/>
            {this.renderFooter()}
          </div>
        )
      }

    else if(this.state.url == "apps"){
        return (
          <div>
            <AppPage changeURL = {this.changeURL}/>;
            {this.renderFooter()}
          </div>
        )
      }

    else{
        return (
            <div>
              <HomePage changeURL = {this.changeURL}/>
              {this.renderFooter()}
            </div>
          )
      }

    }

  }

export default App;
