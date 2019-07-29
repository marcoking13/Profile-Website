import React from 'react';
import "./../css/style.css";
import Navbar from "./../components/nav_bar.js";
import Showcase from "./../components/showcase.js";
import LanguageBox from "./language_box";
import AppContainer from "./app_container.js";
import HobbyContainer from "./hobby_container_main";

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

            <div className="row">
              <div className="col-6">
              <a href="http://github.com/marcoking13">  <button className="resumeButton git"><img className="gitLogo"src="images/github.png"/>My Github</button></a>
              </div>

              <div className="col-6">
                <a href="https://drive.google.com/file/d/0B3l-Tu2z5kHMM0ZzUFJxSTFWbGF5MHFpWDdqVENNYmVFZFBn/view?usp=sharing"><button className="resumeButton link"><img className="gitLogo"src="images/linkden.png"/>My Resume</button></a>
              </div>
            </div>
          </div>

          <div className="purpBorder">
            <AppContainer changeURL={this.props.changeURL} />
          </div>

          <div className="purpBorder ">
            <HobbyContainer />
          </div>

          <div className="prupB">
              <h6 className="cM">Contact Me </h6>
            <div className="contactBC">
              <button className="btn contactButtons"><img src="images/mail.png"className="insta"/>Marcokhodr16@gmail.com</button>
              <button className="btn contactButtons"><img src="images/phone.png"className="insta"/>480-822-0511</button>
              <button className="btn contactButtons"><img src="images/insta.png"className="insta"/>Instagram</button>
              <button className="btn contactButtons"><img src="images/linker.png"className="insta"/>Linkden</button>

            </div>

          </div>



        </div>

  );
}
}

export default HomePage;
