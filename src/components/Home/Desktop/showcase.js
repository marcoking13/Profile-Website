import React from "react";


// ----------------------------------------------DONE----------------------------------
class Showcase extends React.Component{

  render(){

    return(

        <div className=" showCase">
          <h2 className="text-center mt5">Let's Build Something Amazing Together</h2>

            <br />

          <h6 className="text-center cw mono">Learn More About Me</h6>

          <button onClick = {()=>{this.props.changeURL("about")}}className="showcaseButton">About Me</button>

          </div>
    );

  }

}

export default Showcase;
