import React from "react";


class HobbyBox extends React.Component{
  render(){
    return(
      <div onMouseEnter = {(e)=>{ this.props.setFav(this.props.hobby,e.target)}}  className="col-4 hobbBoxM">
       <img className="hobbLo"src={"images/"+this.props.hobby.image}/>
       <p className="hobbP">{this.props.hobby.name}</p>
   </div>
    )
  }
}

export default HobbyBox;
