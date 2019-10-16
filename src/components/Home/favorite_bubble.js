import React from "react";


class HobbyBox extends React.Component{
  render(){

      return (
        <div className="col-4 ccll">
            <img className="currentLo" src={"./images/"+this.props.fav.image} />
            <p className="currentTp">{this.props.fav.name}</p>
        </div>
      )
    
  }
}

export default HobbyBox;
