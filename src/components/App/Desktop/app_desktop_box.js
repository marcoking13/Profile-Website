import React from "react";


class AppDesktopBox extends React.Component {

  renderAllApps(){

    return this.props.apps.map((app)=>{

      var background = `url(${app.background})`;

      return(

        <div className="col-1 appBox" onClick = {()=>{
          this.props.setApp(app);
        }}>

          <div className="appBackground"style={{background:background}}>
            <img className="appLogo" src={app.image}/>
          </div>

          <p className="appNamer cw text-center mt5 bold">{app.name}</p>

        </div>
      );

    });

  }

  render(){

    return (
      <div className="pb5 pb100px">

          <h4 className="text-center cw">My Apps</h4>

            <div className="row">
                {this.renderAllApps()}
            </div>

      </div>
    );

  }

}


export default AppDesktopBox;
