import React from "react";

import LanguageIcon from "./language_icons";

import Languages from "./../../../config/languages.js";

//---------------------------------DONE---------------------------------//

class LanguageBox extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      current:0,
      languages:Languages,
      colors:[
        "bb1",
        "b801",
        "b991",
        "b324",
        "be62",
        "bff4",
        "bff5",
        "bff7",
        "bff8",
        "bff9",
        "bffa",
        "bffa"
      ]
    }

    this.changeCurrent = this.changeCurrent.bind(this);

  }

  changeCurrent(num){
    this.setState({current:num});
  }

  renderBars(){
    var html = [];

    for(var i = 0; i <this.state.current;i++){
      html.push(<div className={this.state.colors[i]+" fl h20px w40px bBB seg"+i}/>);
    }

    return html;

  }

  renderLanguages(){

      return this.state.languages.map((lang)=>{
        return(<LanguageIcon lang = {lang} changeCurrent = {this.changeCurrent}/>)
      });

  }

  render(){

    return(

      <div>
        <br />

        <h2 className="mono text-center">Languages I Mastered</h2>

        <br />

        <div className="row">

          <div className="col-3"/>

            {this.renderLanguages()}

          <div className="col-3"/>

      </div>

      <div className="complexBarBox">

          <p className="f17 text-center mono">Mastery</p>

          <div className="blackBarLevel">
              {this.renderBars()}
          </div>

      </div>

    </div>

    );

  }

}

export default LanguageBox;
