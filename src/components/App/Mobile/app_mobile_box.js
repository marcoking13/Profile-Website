import React from "react";
// -------------------------------------------------------------------DONE-------------------------------------------------------------------------------
import "./../../../css/mobileApp.css";
import "./../../../css/utility.css";

//----------------DONE--------------------------------

class AppMobileBox extends React.Component {

  renderAllAppsMobile(){

    return this.props.apps.map((app)=>{

      var background = `url(${app.background})`;

      return(

          <div className="appBoxMo col-4 mt10"  onClick = {()=>{
            this.props.setApp(app);
          }}>

          <div className="appBackgroundMo"style={{background:background}}>

            <div className="row">
              <div className="col-1"/>

              <div className="col-10">

                <img className="w100 ml10"  src={app.image}/>
              </div>

              <div className="col-1"/>

              </div>

                <br />

              <p className="cw bb text-center h50px">{app.name}</p>


          </div>

        </div>
      );

    });

  }

  render(){

    return (
      <div className="container-fluid" >
          <br />
          <h2 className="text-center cw mono">My Apps</h2>

            <div className="row">
                {this.renderAllAppsMobile()}
            </div>

      </div>
    );

  }

}

export default AppMobileBox;
