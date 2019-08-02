import React from "react";

class MobileNavBar extends React.Component {
  constructor(props){
    super(props);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "175px";
 }
/* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  render(){
    return (
      <div className="bb">
        <div id="mySidenav" className="sidenav">
          <div className="closebtn" onClick={()=>{this.closeNav()}}>&times;</div>

              <img className="profileImg" src="./images/marco.PNG"/>
                <p className="marco">Marco Khodr </p>
            <div className="list">
              <p
                onClick={()=>{
                    this.props.changeURL("home");
                  }}>Home</p>

                <p
                  onClick={()=>{
                    this.props.changeURL("about");
                  }}
                  >About</p>
                  <p onClick={()=>{
                    this.props.changeURL("apps");
                  }}>Apps</p>

                  <p
                    onClick={()=>{
                      this.props.changeURL("home");
                    }}>Resume</p>

                    

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
