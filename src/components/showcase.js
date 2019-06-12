import React from "react";


class Showcase extends React.Component{
  render(){
    return(

                  <div className=" showCase">
                      <h2 className="showCaseTitle">Let's Build Something Amazing Together</h2>
                      <h6 className="showCaseTitle">Learn More About Me</h6>
                      <button onClick = {()=>{this.props.changeURL("about")}}className="showcaseButton">About Me</button>
                  </div>
    )
  }
}

export default Showcase;
