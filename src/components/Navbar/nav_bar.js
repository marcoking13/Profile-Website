import React from "react";


class NavBar extends React.Component{

  render(){

    return(

      <div className="navbarProfile row" >

        <div className="col-2">
          <img className="logo" src="images/logo.png"/>
        </div>

        <div className="col-5"></div>

        <div className="col-5 navgroup">
          <p className="navChoice" onClick = {
            ()=>{

              this.props.changeURL("home");

            }}>Home</p>

          <p className="navChoice" onClick = {
            ()=>{
              
                if(this.props.resetState){
                  this.props.resetState();
                }else{
                  this.props.changeURL("apps");
                }

              }}>Apps</p>

          <a href = "https://drive.google.com/file/d/0B3l-Tu2z5kHMM0ZzUFJxSTFWbGF5MHFpWDdqVENNYmVFZFBn/view?usp=sharing"className="navChoice"><p className="navChoice">Resume</p></a>

          <p className="navChoice"onClick = {()=>{this.props.changeURL("about")}}>About</p>
          <p className="navChoice contact">Contact</p>

        </div>

      </div>

    );

  }

}

export default NavBar;
