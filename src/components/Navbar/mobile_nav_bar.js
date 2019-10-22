import React from "react";


class MobileNavBar extends React.Component {

  openNav() {
    document.getElementById("mySidenav").style.width = "175px";
 }
/* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render(){

    return (
      <div className="bb h75px">

        <div id="mySidenav" className="sidenav">

          <div className="closebtn" onClick={()=>{this.closeNav()}}>&times;</div>

              <img className="profileImg" src="./images/avatar.png"/>

              <div className="mt10">
                <br />
                <p
                  onClick={()=>{
                      this.props.changeURL("home");
                    }}>Home
                  </p>

                  <p
                    onClick={()=>{
                      this.props.changeURL("about");
                    }}
                    >About
                  </p>

                    <p onClick={()=>{
                      if(this.props.resetState){
                        this.props.resetState();
                      }else{
                        this.props.changeURL("apps");
                      }
                    }}>Apps
                    </p>

                    <p onClick = {()=>{
                        window.open("https://drive.google.com/file/d/0B3l-Tu2z5kHMM0ZzUFJxSTFWbGF5MHFpWDdqVENNYmVFZFBn/view?usp=sharing");
                    }}> Resume </p>

                </div>

          </div>

            <span className="menuIC"onClick={()=>{this.openNav()}}>

              <div className="menuBarI"></div>
              <div className="menuBarI"></div>
              <div className="menuBarI"></div>

              </span>

            <div id="main"></div>

          </div>
    );

  }

}

export default MobileNavBar;
