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
        window.scrollTo(0,0);
  }

  renderMobileHobbies(){
    return this.state.hobbies.map((hobby)=>{
        return (
          <div className="col-6">
              <img className="hobbyIM" src = {hobby.image}/>
              <p className="hobbyTM">{hobby.text}</p>
          </div>
        )
    });
  }
  render(){
    return (
        <div className="pb50">
            <MobileNav changeURL = {this.props.changeURL} />


            <div className="container-fluid pb"style={{background:"url('images/mosaic.png')"}}>

                <h2 className="titleM">Lets Build Something Amazing Together </h2>
                <button className="profileButtonM" onClick = {()=>{
                  this.props.changeURL("about")}}
                >About Me </button>
            </div>


                          <div className="resumeBoxMm ">
                              <div className="buttonMBox">
                                  <p className="resM"> Resume </p>
                                  <button className="resBB">My Resume</button>
                                  <button className="resBB">My Github</button>
                              </div>
                          </div>

              <div style={{paddingBottom:"200px"}}>
                  <LanguageMeter />
              </div>

              <div className="appContainerM" >
                <br />
                <h6 className="appTTM"style={{top:"50px",paddingTop:"0"}}>My Apps</h6>
                  <a href= {this.state.samples[0].link}>  <div className="appBoxM" >
                      <img className="appImgMM" src={this.state.samples[0].image}/>
                      <p className="appNameMM">{this.state.samples[0].name}</p>
                  </div></a>
                  <a href= {this.state.samples[1].link}><div className="appBoxM">
                      <img className="appImgMM" src = {this.state.samples[1].image}/>
                      <p className="appNameMM">{this.state.samples[1].name}</p>
                  </div>
                  </a>

                    <button
                      onClick = {()=>{
                        this.props.changeURL("apps")
                      }}
                    className="btn checkoutApp"style={{width:"50%",marginLeft:"25%",marginTop:"10%"}}>See More</button>
              </div>


        </div>
    )
  }
}


export default HomePageMobile;
