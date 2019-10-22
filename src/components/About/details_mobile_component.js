import React from "react";

class DetailsComponent extends React.Component {

  render(){
    var background = `url("images/purps.png")`;

    return(
      <div className="container-fluid pb100px cw" style={{background:background}}>


        <img className="circle-image"  src="images/avatar.png" />

        <div className="row">

          <div className="col-12">

            <div className="bb detCon p10px">
              <p>Name: <strong>{this.props.profile.name}</strong></p>
              <p>Age: <strong>{this.props.profile.age}</strong></p>
              <p>Education: <strong>{this.props.profile.education}</strong></p>
              <p>Work: <strong>{this.props.profile.job}</strong></p>
            </div>

			        <div className="bb pb100px">
				          <br />
				          <p className="aboutMe">  {this.props.about}</p>
			        </div>

            </div>

        </div>

      </div>

    );

  }

}


export default DetailsComponent;
