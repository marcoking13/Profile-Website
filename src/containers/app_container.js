import React from "react";
import AppSample from "./../components/app_sample";

class AppContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      samples:[
        {
          name:"Submarine Run",
          image:"images/submarine.png",
          background:"url('images/subrun.jpg')",
          link:"https://sableye12.itch.io/submarine-run"
        },

        {
          name:"EZ Eatz",
          image:"images/ezeatz.png",
          background:"url('images/ezeatzb.jpg')",
          link:""
        },
        {
          name:"Star Bash",
          image:"images/starbash.png",
          background:"url('images/starbashb.png')",
          link:"https://www.sharemygame.com/share/ad81c918-adfc-4357-8c08-7223c34efb51"
        },

      ]
    }
  }

  renderApps(){
    var i =1;
    return this.state.samples.map((app)=>{

      return <div className="col-2"><AppSample  app = {app}/></div>

    })
  }

  render(){

    return(
      <div>
        <h2 className="appTitle bcc">My Apps</h2>
        <div className="row appContainer">
          <div className="col-3"/>

          {this.renderApps()}


          <div className="col-2"/>

        </div>
        <button className="appButton" onClick = {()=>{this.props.changeURL("apps")}}> See More</button>
      </div>
    )
  }
}

export default AppContainer;
