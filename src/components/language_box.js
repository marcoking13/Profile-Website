import React from "react";
import AppBubble from "./../components/app_bubble";

import Languages from "./../config/languages.js";

class LanguageBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {

      current:"bl1",

      languages:Languages
    }
    this.changeCurrent = this.changeCurrent.bind(this);
  }
  changeCurrent(num){
    this.setState({current:"bl"+num})
  }

  renderLanguages(){
      return this.state.languages.map((lang)=>{
        return(<AppBubble lang = {lang} changeCurrent = {this.changeCurrent}/>)
      })
  }
  render(){
    return(
      <div>
        <h2 className="languageTitle">Languages I Mastered</h2>
        <div className="row languageBox cdr">

          <div className="col-3"/>
            {this.renderLanguages()}

          <div className="col-3"/>

      </div>

      <div className="complexBarBox">
          <p className="comName">Mastery</p>
          <div className="blackBarLevel">
              <div className={"bloodLife "+this.state.current}/>
          </div>
      </div>

    </div>
    )
  }
}

export default LanguageBox;
