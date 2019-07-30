import React from "react";
import MobileNav from "./../components/mobile_nav_bar.js";
import LanguageMeter from "./../components/language_meter_mobile";
import "./../css/mobile.css";
import Samples from "./../config/sampleApps.js";

class HomePageMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      samples: Samples
    }
  }
  render(){
    return (
        <div className="pb50">
            <MobileNav changeURL = {this.props.changeURL} />

            <div className="container-fluid pb"style={{background:"url('images/mosaic.png')"}}>

                <h2 className="titleM">Lets Build Something Amazing Together </h2>
                <button className="profileButtonM">About Me </button>
            </div>

              <div>
                  <LanguageMeter />
              </div>

              <div className="appContainerM">
                <br />
                <h6 className="appTTM">My Apps</h6>
                  <div className="appBoxM">
                      <img className="appImgMM" src={this.state.samples[0].image}/>
                      <p className="appNameMM">{this.state.samples[0].name}</p>
                  </div>
                  <div className="appBoxM">
                      <img className="appImgMM" src = {this.state.samples[1].image}/>
                      <p className="appNameMM">{this.state.samples[1].name}</p>
                  </div>
                  <div className="appBoxM">
                      <img className="appImgMM" src={this.state.samples[2].image}/>
                      <p className="appNameMM">{this.state.samples[2].name}</p>
                  </div>

              </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


              <div className="resumeBoxM ">
                  <div className="buttonMBox">
                      <p className="resM"> Resume </p>
                      <button className="resBB">My Resume</button>
                      <button className="resBB">My Github</button>
                  </div>
              </div>


        </div>
    )
  }
}


export default HomePageMobile;
