import React from "react";

class DetailsComponent extends React.Component {
  render(){
    return(
      <div>
        <div className="row">
          <img className="circle-image" src="images/marco.PNG" />

        <div className="detCon">
          <p className="det">Name: <strong>{this.props.profile.name}</strong></p>
          <p className="det">Age: <strong>{this.props.profile.age}</strong></p>
          <p className="det">Education: <strong>{this.props.profile.education}</strong></p>
          <p className="det">Work: <strong>{this.props.profile.job}</strong></p>
        </div>

        </div>
        <div className="row">
          <div className="aboutMeCon">
              <p className="aboutMe">  {this.props.about}</p>
            </div>
        </div>
</div>

    )
  }
}


export default DetailsComponent;
