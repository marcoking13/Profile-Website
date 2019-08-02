import React from "react";


class AppMobileBox extends React.Component {
  renderAllAppsMobile(){
    return this.props.apps.map((app)=>{
      var background = `url(${app.background})`;

      return(
        <div className="appBoxM" onClick = {()=>{
          this.props.setApp(app);
        }}>
          <div className="appBackgroundM"style={{background:background}}>
            <img className={"appLogoM"} src={app.image}/>
          </div>
          <h2 className="appNamerM">{app.name}</h2>
        </div>
      )
    })
  }

  render(){
    return (
      <div className="appContainer" >
          <h2 className="appTitle">My Apps</h2>

            <div>
                {this.renderAllAppsMobile()}

            </div>
      </div>
    )
  }
}


export default AppMobileBox;
