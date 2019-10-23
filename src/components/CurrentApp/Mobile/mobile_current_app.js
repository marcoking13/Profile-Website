import React from "react";


class MobileCurrentApp extends React.Component {

  renderPara(){

    if(this.props.currentApp.code){
      return   <p className="text-center mt5 clear">{"Passcode: "+this.props.currentApp.code}</p>
    }else{
      return null;
    }

  }

  render(){

    return(
    <div>
      <div className="row">

          <div className="col-12 bw pb25px">
            <img  className="backArrow" onClick = {()=>{this.props.resetState()}} src="images/arrow.png"/>
            <h4 className="text-center  ">{this.props.currentApp.name}</h4>

          <div className="mt15 w100">
            <h4 className="text-center mono mt5">How It Works</h4>
            <p className="text-center mono  bold">
              {this.props.currentApp.about}
            </p>
          </div>

          <div className="mt5 w100">
            <h6 className="text-center mono ">Coded in:</h6>
            <div className="languageBoxer">
              {this.props.renderLanguages()}
            </div>
          </div>
          <br />

          <div className="w100 mt15">
            <h6 className="text-center mono bold ">Complexity:</h6>
            <div className="diffBox w50 h20 ml25 bb">
                {this.props.renderDiff()}
            </div>
          </div>


              <a href={this.props.currentApp.link} className="ml25">
                <br />
                <br />
                <button  className=" w100 button w50 ml25 ui black">Check it out</button>
              </a>


              {this.renderPara()}

        </div>





        </div>

      </div>
    );

  }

}


export default MobileCurrentApp;
