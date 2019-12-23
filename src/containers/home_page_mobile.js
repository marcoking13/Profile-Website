import React from "react";

import MobileNav from "./../components/Navbar/mobile_nav_bar.js";
import LanguageMeter from "./../components/Home/Mobile/language_meter_mobile";
import ResumeButtons from "./../components/Home/Mobile/resume_buttons";
import AppSamples from "./../components/Home/Mobile/app_samples";
import HobbyContainer from "./../components/Home/Mobile/hobby_container.js";


import "./../css/mobile.css";
import "./../css/utility.css";

import Samples from "./../config/sampleApps.js";

class HomePageMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      samples: Samples
    }

    window.scrollTo(0,0);

  }



  render(){

    var background = `url("images/purps.png")`;

    return (
      <div >
        <MobileNav changeURL = {this.props.changeURL} />

        <div className="pb100px container-fluid">

            <div className="container-fluid pb10 " style={{background:background}}>
                <br />
                <p className="text-center mono f17 mt5 cw">Lets Build Something Amazing Together </p>

                <div className= "row">
                    <div className="col-3"/>

                      <div className="col-6">
                          <button className="button ui  w100 inverted white" onClick = {()=>{this.props.changeURL("about")}}>About Me</button>
                      </div>

                    <div className="col-3"/>

              </div>

                <br />
                <br />

            </div>

              <div>
                <ResumeButtons />
              </div>

              <div className="mt10 container-fluid">
                  <LanguageMeter />
              </div>

              <div className="divider"/>

              <div  className=" container-fluid " >
                  <p className="appMCT mt10 text-center  mono bold f17" >My Apps</p>
                    <AppSamples  samples = {this.state.samples}/>
                    <br />

                  <button onClick = {()=>{this.props.changeURL("apps")}} className="button ui red turnBlackB inverted w50 ml25 mt5 cw" > See More</button>
              </div>

          </div>



          <div>
            <p className="text-center mono f17 bold ">Hobbies</p>
            <HobbyContainer />

          </div>


      </div>
    );

  }

}


export default HomePageMobile;
