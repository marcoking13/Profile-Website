import React from "react";

import MobileNav from "./../components/Navbar/mobile_nav_bar.js";
import LanguageMeter from "./../components/Home/language_meter_mobile";
import ResumeButtons from "./../components/Home/resume_buttons";
import AppSamples from "./../components/Home/app_samples";

import "./../css/mobile.css";
import "./../css/mobileApp.css";
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
    return (
      <div >
        <MobileNav changeURL = {this.props.changeURL} />
        <div className="pb100px container-fluid">



            <div className="container-fluid pb10 " style={{background:"url('images/mosaic.png')"}}>
                <br />
                <p className="text-center mono mt5 cw">Lets Build Something Amazing Together </p>
                <div className= "row">
                    <div className="col-3"/>

                      <div className="col-6">
                          <button className="button ui  w100 inverted white">About Me</button>
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

                  <button onClick = {()=>{this.props.changeURL("apps")}} className="ssButton btn" style={{width:"50%",marginLeft:"25%",border:"2px solid black",marginTop:"7.5%"}}> See More</button>
              </div>


        </div>
        </div>
    )
  }
}


export default HomePageMobile;
