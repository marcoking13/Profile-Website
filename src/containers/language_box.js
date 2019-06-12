import React from "react";
import AppBubble from "./../components/app_bubble";

class LanguageBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {

      current:"bl1",

      languages:[
        {
          name:"C#",
          image:"images/c.png",
          leve:"5"
        },
        {
          name:"HTML",
          image:"images/css.png",
          leve:"8"
        },
        {
          name:"Javascript",
          image:"images/javascript.png",
          leve:"9"
        },
        {
          name:"MERN",
          image:"images/mern.png",
          leve:"7"
        },
        {
          name:"Unity",
          image:"images/unity.png",
          leve:"6"
        },
        {
          name:"Java",
          image:"images/java.png",
          leve:"3"
        },
    ]
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
