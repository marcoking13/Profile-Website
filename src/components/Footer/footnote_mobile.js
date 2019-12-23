import React from "react";

import "./../../css/footnote.css";


export default class Footnote extends React.Component {

  render(){

    return(
      <div className="container-fluid bb">
        <div>

          <div className="row">
              <div className="col-2">
                <br />
                <img className="w100" src="images/avatar.png"/>
              </div>
            </div>

            <br />

          <div className="row">

            <div className="col-2">
                <ul>
                    <li className="bold gr none">Career</li>
                    <a href = "https://drive.google.com/file/d/0B3l-Tu2z5kHMM0ZzUFJxSTFWbGF5MHFpWDdqVENNYmVFZFBn/view?usp=sharing"><li className="none cw ">Resume</li></a>
                    <li className="none gr">Jobs</li>
                    <a href = "https://www.linkedin.com/in/marco-khodr-39a935187/"><li className="none cw">Linkden</li></a>
                </ul>
              </div>
            </div>

            <div className="row">

              <div className="col-2">
                <ul>
                    <li className="bold gr none">Projects</li>
                    <li  onClick = {()=>{this.props.changeURL("apps")}} className="none cw">Games</li>
                    <li onClick = {()=>{this.props.changeURL("apps")}} className="none cw">Apps</li>
                    <li className="none gr">Other</li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <ul>
                    <li className="bold cw none">Credits</li>

                    <li className="none turnW gr" onClick = {()=>{this.props.changeURL("credits")}}>Credit Doc</li>
                    <li className="none gr">Disclaimer</li>
                </ul>
              </div>
            <div className="col-2"/>
          </div>

              <div className="row">
                <div className="col-12">

                    <div className="row">
                        <div className="col-6"/>
                        <div className="col-2">
                          <img src= "./images/inst.png" className="w100"/>
                        </div>
                        <div className="col-2">
                        <a href= "https://www.linkedin.com/in/marco-khodr-39a935187/">  <img src= "./images/linkd.png" className="w100 turnBorderRed"/></a>
                        </div>
                        <div className="col-2">
                          <img src= "./images/face.png" className="w100"/>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>

              <br/>

              <div>
                <p className="gr text-center mono">I do not own any of the images or backgrounds. this website is purely used for personal use nothing else </p>
              </div>

              <br />

              <div className="row pb50px">
                <div className="col-3"/>
                <div className="col-2 turnW gr">Legal</div>
                <div className="col-2 turnW gr" onClick = {()=>{this.props.changeURL("credits")}}>Credits</div>
                <div className="col-2 turnW gr">Cookies</div>

              </div>

            </div>

    )
  }
}
