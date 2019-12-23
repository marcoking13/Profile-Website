import React from "react";


// ----------------------------------------------DONE----------------------------------
class Showcase extends React.Component{

  render(){

    return(

        <div>
          <h2 className="text-center cw mono mt5">Let's Build Something Amazing Together</h2>

            <br />

          <h6 className="text-center cw mono">Learn More About Me</h6>

          <div className="row">
            <div className="col-4"/>
            <div className="col-4">
              <br/>
              <button onClick = {()=>{this.props.changeURL("about")}}className="w100 turnBlackB button ui inverted white">About Me</button>
            </div>
            <div className="col-4"/>
          </div>

          </div>
    );

  }

}

export default Showcase;
