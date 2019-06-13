import React from "react";
import Navbar from "./nav_bar";
class Loader extends React.Component{
  render(){
    return(
      <div className="animator cDD" style={{background:this.props.background,backgroundSize:"cover"}}>
      <div>
        <Navbar />
      </div>
          <div className="row2">
              <div className="col-6 loaderC jumbotron jumbotrons">
                    <img src="images/loader.gif" className="loaderC"/>
              </div>
          </div>
      </div>
    )
  }
}


export default Loader;
