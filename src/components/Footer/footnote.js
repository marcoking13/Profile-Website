import React from "react";

import "./../../css/footnote.css";


export default class Footnote extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      credits:[],
      info:null
    }

  }
  render(){

    return(
      <div className="container-fluid bb">

        <div className="row">
            <div className="col-1">
              <img className="w100 mt10" src="images/avatar.png"/>
            </div>
          </div>
        <div className="row">
          <div className="col-1"/>
          <div className="col-2">
              <ul>
                  <li className="bold gr  none">Career</li>
                  <a href = "https://drive.google.com/file/d/0B3l-Tu2z5kHMM0ZzUFJxSTFWbGF5MHFpWDdqVENNYmVFZFBn/view?usp=sharing"><li className="none turnW gr">Resume</li></a>
                  <li className="none   gr">Jobs</li>
                  <a href = "https://www.linkedin.com/in/marco-khodr-39a935187/"><li className="none  turnW gr">Linkden</li></a>
              </ul>
          </div>

            <div className="col-2">
              <ul>
                  <li className="bold gr  none">Projects</li>
                  <li onClick = {()=>{this.props.changeURL("apps")}} className="none turnW gr">Games</li>
                  <li onClick = {()=>{this.props.changeURL("apps")}} className="none turnW gr">Apps</li>
                  <li onClcik = {()=>{this.props.changeURL("about")}} className="none turnW gr">Other</li>
              </ul>
            </div>

            <div className="col-2">
              <ul>
                  <li className="bold gr none">Credits</li>
                  <a href = "#"><li className="none  gr">Showcase</li></a>
                  <a href = "#"><li className="none   gr">Credit Doc</li></a>
                  <a href = "#"><li className="none  gr">Disclaimer</li></a>
              </ul>
            </div>



            <div className="col-2"/>

            <div className="col-2">
                <div className="row">
                    <div className="col-4">
                        <a href = "#"><img src= "./images/inst.png" className="w100"/></a>
                    </div>
                    <div className="col-4">
                        <a href = "https://www.linkedin.com/in/marco-khodr-39a935187/"><img src= "./images/linkd.png" className="w100 turnBorderRed"/></a>
                    </div>
                    <div className="col-4">
                        <a href = "#"><img src= "./images/face.png" className="w100"/></a>
                    </div>
                </div>
            </div>

        </div>

        <br />

          <div>
              <p className="gr text-center mono">I do not own any of the images or backgrounds. this website is purely used for personal use nothing else </p>
          </div>

          <br />

        <div className="row pb10px">
          <div className="col-1"/>
          <div className="col-1  gr">Legal</div>
          <div className="col-1  gr">Credits</div>
          <div className="col-1  gr">Cookies</div>
          <div className="col-1  gr">Policy</div>
          <div className="col-1   gr">Disclaimer</div>
          <div className="col-1  gr">Other</div>

        </div>

      </div>
    )
  }
}
