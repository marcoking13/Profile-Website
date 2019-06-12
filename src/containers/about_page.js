import React from "react";
import "./../css/about.css";
import NavBar from "./../components/nav_bar";
class AboutContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {
        name:"Marco Khodr",
        image:"images/marco.PNG",
        age:21,
        education:"Scottsdale Community College",
        job:"Server at Pita Jungle"

      }
    }
  }
  render(){
    return(
      <div>
        <NavBar changeURL = {this.props.changeURL}/>
        <div className="container-fluid animator">
          <div className="row">
            <div className="col-4">
                <img className="circle-image" src="images/marco.PNG" />
                <div className="detCon">
                  <p className="det">Name: <strong>{this.state.profile.name}</strong></p>
                  <p className="det">Age: <strong>{this.state.profile.age}</strong></p>
                  <p className="det">Education: <strong>{this.state.profile.education}</strong></p>
                  <p className="det">Work: <strong>{this.state.profile.job}</strong></p>
                </div>
            </div>
            <div className="col-1"/>
            <div className="col-5 jumbo">
              <p className="titleA">About Me</p>
              <div className="aboutMeCon">
                <p className="aboutMe">
                Hello my name is Marco!
                I was born and raised in Arizona and don't plan on leaving anytime soon.
                Ever since I was a little kid, video games acted as an escape from the ordinary world I live in
                to a magical place where things don't have to make sense and anything is possible.
                As a 21 year old, I still carry those enchanting memories of me collecting my Pokemon team and becoming Champion,
                or later exploring the world of Skyrim as a High Elf. These moments inspired me to learn how to code and create my own
                games. Since  the last year and a half, I have learned how to program in : React, HTML/CSS, C#, Java, and Unity.
                I have also made 2 utility apps and 6 games using a combination of all of these languages. My dream is to one day be
                skilled enough in programming to become a professional programmer and game designer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default AboutContainer;
