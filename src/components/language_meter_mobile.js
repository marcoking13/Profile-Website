import React from "react";
import Languages from "./../config/languages.js";

class LanguageMeter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      languages:Languages
    }
  }
  renderLanguages(){
    return this.state.languages.map((language)=>{
        return (
          <div className="langBM">
              <img className="langIM" src = {language.image}/>
              <p className="langNM">{language.name}</p>
              <div className="langBarM">
                  {this.renderCom(language)}
              </div>
          </div>
        )
    })
  }

  renderCom(lang){
    var html = [];
    for(var i = 0; i<lang.leve; i++){
        html.push(<div className="dffm"/>)
    }
    return html;
  }
  render(){

    return(
        <div className="container-fluid">
          <p className="langTM">Languages I Mastered</p>
          {this.renderLanguages()}
        </div>
    )
  }
}



export default LanguageMeter;
