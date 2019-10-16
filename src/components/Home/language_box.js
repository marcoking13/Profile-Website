import React from "react";
import AppBubble from "./app_bubble";

import Languages from "./../../config/languages.js";

class LanguageBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {

      current:0,

      languages:Languages
    }
    this.changeCurrent = this.changeCurrent.bind(this);
  }
  changeCurrent(num){
    this.setState({current:num})
  }
  renderBars(){
    var html = [];

    for(var i = 0; i <this.state.current;i++){
      html.push(<div style={{float:"left",height:"20px",width:"20px",border:"2px solid black",background:"red"}}className={"segs seg"+i}/>);
    }
    return html;
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
              {this.renderBars()}
          </div>
      </div>

    </div>
    )
  }
}

export default LanguageBox;
