import React from "react";
import Navbar from "./../../Navbar/nav_bar";

class AppCurrent extends React.Component {

  renderLanguages(){

      var langs = [];
      var i =0

        for(var i =0;i<this.props.currentApp.languages.length -1;i++){

          langs.push(
            <div className="languagesL">
              <img className="languageLC" src={this.props.currentApp.languages[i].image} />
              <p className="lll">{this.props.currentApp.languages[i].name}</p>
            </div>
        );

      }
      return langs;
    }

  renderDiff(){

    var boxes=[];

    for(var i=0;i<this.props.currentApp.difficulty;i++){
      boxes.push(<div className={"diffSeg  diff"+i}/>)
    }

    return boxes;

  }

  render(){
      return (

        <div className="animator" style={{background:this.props.background,paddingBottom:"50%",backgroundSize:"cover"}}>

            <div className="navbarAppC">
                <Navbar changeURL={this.props.changeURL}/>
            </div>

            <div className="row1">

                <div className="cornerBox"style={{background:this.props.background}}>
                  <img className="cornerLogo" src={this.props.currentApp.image} />
                </div>

            </div>

            <div className="row2">

                <div className="col-6 jumbotron jumbotrons">

                  <h4 className="titleCurrent">{this.props.currentApp.name}</h4>

                  <div className="jumboRow1">
                      <img src="images/loader.gif" className="loaderC"/>
                  </div>

                  <div className="jumboRow1">
                      <h6 className="howToPlay">Coded in:</h6>

                      <div className="languageBoxer">
                          {this.renderLanguages()}
                      </div>

                  </div>

                  <div className="jumboRow2">

                      <h6 className="howToPlay">Complexity:</h6>

                      <div className="diffBox">
                        {this.renderDiff()}
                      </div>

                  </div>

                  <a href={this.props.currentApp.link}><button onClick = {()=>{this.props.loader()}}className="btn btns  btn-danger">Check it out</button></a>

                </div>

            </div>

        </div>

      );

  }

}



export default AppCurrent;
