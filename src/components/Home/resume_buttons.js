import React from "react";

export default class ResumeButtons extends React.Component {

  render(){
      return(
          <div className="container-fluid mt10">
            <p className="resM"> Resume </p>
            <div className="row">
                <div className="col-2"/>
                  <div className="col-4">
                    <button className="button ui red f13 w100">My Resume</button>
                  </div>
                  <div className="col-4">
                    <button  className="button ui blue f13 w100">My Github</button>
                 </div>
                 <div className="col-2"/>
                </div>
              </div>
            )
          }

    }
