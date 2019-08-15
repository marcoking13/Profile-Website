import React from 'react';
import "./../css/style.css";
import Hobbies from "./../config/hobbies.js";
import Navbar from "./../components/nav_bar.js";
import Showcase from "./../components/showcase.js";
import LanguageBox from "./../components/language_box";
import AppContainer from "./../components/app_container.js";
import HomePageMobile from "./home_page_mobile";

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
    if(window.innerWidth <= 590){
      return(
        <HomePageMobile changeURL = {this.props.changeURL} />
      )
    }else{
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


            <div className="purpBorder container-fluid">
              <p className="hobbyTT">Hobbies</p>
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
