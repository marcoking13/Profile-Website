import React from "react";

class DetailsComponent extends React.Component {

  render(){

    return(
      <div className="container-fluid">

        <div className="row">
          <div className="col-3"/>

          <div className="col-10">
            <img className="circle-image "  src="images/marco.PNG" />
          </div>

          <div className="col-12">

            <div className="detCon">
              <p>Name: <strong>{this.props.profile.name}</strong></p>
              <p>Age: <strong>{this.props.profile.age}</strong></p>
              <p>Education: <strong>{this.props.profile.education}</strong></p>
              <p>Work: <strong>{this.props.profile.job}</strong></p>
            </div>

          </div>

        </div>

        <div className="row">

          <div className="aboutMeCon">
            <p className="aboutMe">  {this.props.about}</p>
          </div>

        </div>

      </div>

    );

  }
  
}


export default DetailsComponent;
