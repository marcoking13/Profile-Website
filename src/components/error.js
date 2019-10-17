import React from "react";

import "./../css/error.css";

class Error extends React.Component{

  render(){

    var background = `url("images/error.jpg")`;

    return(
      <div className="errBackground"style={{background:background}}>
        <h2 className="erroText">Sorry! Mobile Version will here shortly!</h2>
        <img className="errI" src="images/error.png"/>
      </div>
    );

  }

}


export default Error;
