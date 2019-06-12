import React from "react";


class AppSample extends React.Component{
  render(){
    return(<a href={this.props.app.link}><div className="appBox">
      <div className="appImageBox" style={{background:this.props.app.background}}>
        <img className="appLogo" src={this.props.app.image}/>
        <p className="appName">{this.props.app.name}</p>
      </div>
    </div>
    </a>
  )
  }
}


export default AppSample;
