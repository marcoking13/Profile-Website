import React from "react";


class MobileCurrentApp extends React.Component {

  renderPara(){

    if(this.props.currentApp.code){
      return   <p className="fl text-center mt5 clear ">{"Passcode: "+this.props.currentApp.code}</p>
    }else{
      return
    }

  }

  render(){

    return(

      <div>

          <img className="backArrowDesktop" onClick = {()=>{this.props.resetState()}}src="images/arrow.png"/>

        <div className="row1">

          <div className="cornerBox"style={{background:this.props.background}}>
            <img className="cornerLogo" src={this.props.currentApp.image} />
          </div>

        </div>

        <div className="row2">


          <div className="col-6 jumbotron bw ml25">

              <h3 className="text-center ">{this.props.currentApp.name}</h3>

              <div>
                <br />
                <h5 className="text-center">How It Works</h5>

                <p className="text-center mt2_5 f17">
                  {this.props.currentApp.about}
                </p>

              </div>

              <br />

             <div>

                <h6 className="text-center bold mono">Coded in:</h6>

                <div className="languageBoxer">
                    {this.props.renderLanguages()}
                </div>

              </div>

              <div className="w100 mt15">

                <h6 className="text-center mono">Complexity:</h6>

                <div className="diffBox w50 h20 ml25 bb">
                  {this.props.renderDiff()}
                </div>

              </div>




              <div className="row">

                <div className="col-3"/>

                <div className="col-6">
                  <a href={this.props.currentApp.link}>
                    <br />
                    <button  className=" w100 button ui black">Check it out</button>
                  </a>
                </div>

                <div className="col-3"/>
              </div>


              {this.renderPara()}

              </div>
            </div>
          </div>
    );

  }

}


export default MobileCurrentApp;
