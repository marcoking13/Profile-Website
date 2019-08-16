import React from "react";
import MobileNav from "./../components/mobile_nav_bar.js";
import LanguageMeter from "./../components/language_meter_mobile";
import "./../css/mobile.css";
import "./../css/mobileApp.css";
import Samples from "./../config/sampleApps.js";

class HomePageMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      samples: Samples
    }
        window.scrollTo(0,0);


  }

  renderSamples(){
      return this.state.samples.map((sample)=>{
        var background = `url(${sample.background})`;
        return (
        <div className="col-4"style={{height:"170px"}}>
          <a href = {sample.link}>
            <div className="apBB"style={{background:"black",borderRadius:"10px",height:"100%"}}>
              <img className="iiSS" style={{width:"50%",marginLeft:"25%",marginTop:"10%"}} src={sample.image}/>
              <p className="apTTO" style={{textAlign:"center",color:"white",marginTop:"25%",border:"2px solid purple"}}>{sample.name}</p>
              </div>
            </a>
          </div>


        )
      })
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

              <div style={{paddingBottom:"400px",borderBottom:"2px solid purple",paddingTop:"25px"}}>
                  <LanguageMeter />
              </div>

              <div className="appContainerM container-fluid" >
                  <p className="appMCT" style={{textAlign:"center",fontFamily:"monospace",fontWeight:"bold",fontSize:"17px"}}>My Apps</p>
                  <div className="row">
                    {this.renderSamples()}

                  </div>
                  <button onClick = {()=>{this.props.changeURL("apps")}}className="ssButton btn"style={{width:"50%",marginLeft:"25%",border:"2px solid black",marginTop:"7.5%"}}> See More</button>
              </div>


        </div>
    )
  }
}


export default HomePageMobile;
