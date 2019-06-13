import React from 'react';
import "./../css/style.css";
import Navbar from "./../components/nav_bar.js";
import Showcase from "./../components/showcase.js";
import LanguageBox from "./language_box";
import AppContainer from "./app_container.js";
import HobbyContainer from "./hobby_container_main";
import ResumeButtons from "./../components/resume_buttons";
import ContactBox from "./../components/contact_box";

class HomePage extends React.Component {
  render(){
    return (
      <div className="App animator">

          <div className="codeBackground purpBorder" style={{background:"url('images/mosaic.png')"}}>
              <Navbar changeURL = {this.props.changeURL}/>
              <Showcase changeURL = {this.props.changeURL} />
          </div>

          <div className="purpBorder">
              <LanguageBox />
          </div>

          <div className="purpBorder">
              <ResumeButtons />
          </div>

          <div className="purpBorder">
              <AppContainer changeURL={this.props.changeURL} />
          </div>

          <div className="purpBorder ">
              <HobbyContainer />
          </div>

          <div className="prupB">
              <ContactBox />
          </div>

        </div>


  );
}
}

export default HomePage;
