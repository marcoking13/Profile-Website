import React from "react";

//------------------------------DONE---------------------------------------------

export default class ResumeButtons extends React.Component {

  render(){

      return(

          <div className="container-fluid mt10">
            <p className="resM"> Resume </p>

            <div className="row">
                <div className="col-2"/>

                  <div className="col-4">
                    <button className="button ui red f13 w100"> Resume</button>
                  </div>

                  <div className="col-4">
                    <button  className="button ui blue f13 w100"> Github</button>
                 </div>

                 <div className="col-2"/>

                </div>

              </div>
            );

          }

    }
