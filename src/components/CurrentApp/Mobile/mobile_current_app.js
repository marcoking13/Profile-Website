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

      <div className="row">

          <div className="col-12 bw pb100">

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

          <div className="w100 mt15">
            <h6 className="text-center mono bold ">Complexity:</h6>

            <div className="diffBox w50 h20 ml25 bb">
                {this.props.renderDiff()}
              </div>
          </div>

          <div className="row">

            <div className="col-3"/>

            <div className="col-6">
              <a href={this.props.currentApp.link}>
                <br />
                <br />
                <button  className=" w100 button ui black">Check it out</button>
              </a>
            </div>

            <div className="col-3"/>

          </div>


            {this.renderPara()}

            </div>

        </div>
    );

  }

}


export default MobileCurrentApp;
