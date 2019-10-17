import React from "react";



class LangBox extends React.Component{
  render(){
    return(
      <div className="col-1">
        <img className="languageIcon"  onMouseEnter={()=>{{this.props.changeCurrent(this.props.lang.leve)}}}   src={this.props.lang.image}/>
        <p className="languageTitle">{this.props.lang.name}</p>
      </div>
    )
  }
}

export default LangBox;
