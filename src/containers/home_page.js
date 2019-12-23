import React from 'react';

import Hobbies from "./../config/hobbies.js";
import Navbar from "./../components/Navbar/nav_bar.js";
import Showcase from "./../components/Home/Desktop/showcase.js";
import LanguageBox from "./../components/Home/Desktop/language_box";
import AppContainer from "./../components/Home/Desktop/app_container.js";
import HomePageMobile from "./home_page_mobile";

import "./../css/style.css";

class HomePage extends React.Component {
  constructor(props){
    super(props);
    window.scrollTo(0,0);
    this.state = {
      hobbies:Hobbies
    }
  }

  renderHobbies(){
    return this.state.hobbies.map((hobby)=>{
      return(
        <div  className="col-2">
          <img className="hobbyShow"src={hobby.image}/>
          <p className="hobbyText" >{hobby.name}</p>
        </div>
      )
    });
  }

   render(){

     var background = `url("images/purps.png")`;

    if(window.innerWidth <= 590){
      return <HomePageMobile changeURL = {this.props.changeURL} />
    }
    else{
      return (
        <div className="App animator ">

          <div className="codeBackground purpBorder" style={{background:background}}>
              <Navbar changeURL = {this.props.changeURL}/>
              <Showcase changeURL = {this.props.changeURL} />
            </div>

            <div className="purpBorder">
              <LanguageBox />
            </div>

            <div className="purpBorder">

              <div className="row">
                <div className="col-1"/>

                <div className="col-4">
                  <br />
                  <a href="http://github.com/marcoking13">  <button className="button ui blue turnBlackB"><img className="buttonLogo "src="images/github.png"/>My Github</button></a>
                </div>

                  <div className="col-2"/>

                <div className="col-4">
                  <br />
                  <a href="https://drive.google.com/file/d/0B3l-Tu2z5kHMM0ZzUFJxSTFWbGF5MHFpWDdqVENNYmVFZFBn/view?usp=sharing"><button className=" turnBlackB button ui red"><img className="buttonLogo"src="images/linkden.png"/>My Resume</button></a>
                </div>

              </div>

            </div>

            <div className="purpBorder">
              <br />
              <h5 className="text-center mono bold f13px cw">My Apps</h5>
              <AppContainer changeURL={this.props.changeURL} />
            </div>


            <div className="purpBorder container-fluid">

              <br />

              <h3 className="text-center  mono">Hobbies</h3>

                <br />

              <div className="row">
                {this.renderHobbies()}
              </div>

            </div>



      </div>

  );
}
}
}

export default HomePage;
