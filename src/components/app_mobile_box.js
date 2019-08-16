import React from "react";

import "./../css/mobileApp.css";

class AppMobileBox extends React.Component {
  renderAllAppsMobile(){
    return this.props.apps.map((app)=>{
      var background = `url(${app.background})`;

      return(
        <div className="appBoxMo col-4" style={{marginTop:"2.5%",height:"150px"}} onClick = {()=>{
          this.props.setApp(app);
        }}>
          <div className="appBackgroundMo"style={{background:background,width:"100%",height:'100%',borderRadius:"10px",border:"black 4px solid"}}>
            <img className={"appLogoMo"} style={{width:"50%",marginLeft:"25%",marginTop:"5%"}} src={app.image}/>
              <p className="appNamerMo" style={{textAlign:"center",background:"black",color:"white",fontFamily:"monospace",position:"absolute",bottom:"5%",right:0,left:"12.5%",width:"75%"}}>{app.name}</p>
          </div>

        </div>
      )
    })
  }

  render(){
    return (
      <div className="appContainer container-fluid" >
          <h2 className="appTitle"style={{marginTop:"5%"}}>My Apps</h2>

            <div className="row"style={{marginTop:"5%"}}>

                {this.renderAllAppsMobile()}

            </div>
      </div>
    )
  }
}


export default AppMobileBox;
