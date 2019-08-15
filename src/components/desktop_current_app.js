import React from "react";


class MobileCurrentApp extends React.Component {
  render(){
    return(
      <div>
        <div className="row1">
          <div className="cornerBox"style={{background:this.props.background}}>
            <img className="cornerLogo" src={this.props.currentApp.image} />
          </div>

          </div>

          <div className="row2">


            <div className="col-6 jumbotron jumbotrons">
              <h4 className="titleCurrent">{this.props.currentApp.name}</h4>
              <div className="jumboRow1">
              <h4 className="howToPlay">How To Play</h4>
              <p className="howToPlay how">
                Tap as many ghosts as possible before they cover your whole screen!
              </p>
          </div>
            <div className="jumboRow1">
                <h6 className="howToPlay">Coded in:</h6>
                <div className="languageBoxer">
                    {this.props.renderLanguages()}
                </div>
              </div>
              <div className="jumboRow2">
                <h6 className="howToPlay">Complexity:</h6>
                <div className="diffBox">
                  {this.props.renderDiff()}
                </div>
              </div>

              <a href={this.props.currentApp.link}>
                <button onClick = {()=>{this.props.loader()}} className="btn btns  btn-danger">Check it out</button>
              </a>

            </div>
          </div>
          </div>
    )
  }
}


export default MobileCurrentApp;