import React from "react";


class MobileCurrentApp extends React.Component {

  renderPara(){
    if(this.props.currentApp.code){
      return   <p className="fl"style={{textAlign:"center",clear:"both"}}>{"Passcode: "+this.props.currentApp.code}</p>
    }else{
      return
    }
  }
  render(){

    return(
      <div>

        <div className="col-12 mlop jumbotron jumbotrons">

          <img  onClick = {()=>{this.props.resetState()}} src="images/arrow.png"style={{width:"30px",height:"30px"}}/>
          <h4 className="titleCurrent ">{this.props.currentApp.name}</h4>
          <div className="jumboRow1">
          <h4 className="howToPlay">How To Play</h4>
          <p className="howToPlay how">
            {this.props.currentApp.about}
          </p>
        </div>
        <div className="jumboRow1">
            <h6 className="howToPlay">Coded in:</h6>
            <div className="languageBoxer">
              {this.props.renderLanguages()}
            </div>

          </div>

          <div className="jumboRow2">
            <h6 className="howToPlay compM">Complexity:</h6>
          <div className="diffBox">
              {this.props.renderDiff()}
            </div>
          </div>

          <a href={this.props.currentApp.link}><button className="btn btns  btn-danger">Check it out</button></a>

          {this.renderPara()}

        </div>
        </div>
    )
  }
}


export default MobileCurrentApp;
