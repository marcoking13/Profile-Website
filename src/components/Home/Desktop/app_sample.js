import React from "react";


class AppSample extends React.Component{

  render(){

    return(

      <div className="col-2">

          <a href={this.props.app.link}><div className="appBox" style={{background:this.props.app.background}}>

              <div className="appImageBox">
                <img className="appLogo" src={this.props.app.image}/>
                <p className="text-center">{this.props.app.name}</p>
              </div>

            </div>

          </a>

        </div>

    );

  };

}


export default AppSample;
