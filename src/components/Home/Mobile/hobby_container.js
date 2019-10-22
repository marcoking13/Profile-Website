import React from "react";

import Hobbies from "./../../../config/hobbies.js";

class HobbyContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hobbies:Hobbies
    }

  }

  renderHobbyBox(){
    return this.state.hobbies.map((hobby)=>{

        return(
          <div className="col-4">
              <img className="w100 hobbyBoxMobile" src = {hobby.image}/>
              <p className="cw bb hobbyNameMobile text-center">{hobby.name}</p>
          </div>
        );

    });

  }


  render(){

    return(
      <div className="container-fluid">
          <div className="row">
            {this.renderHobbyBox()}
          </div>
      </div>
    );

  }

}

export default HobbyContainer;
