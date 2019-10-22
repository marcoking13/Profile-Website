import React from "react";

//------------------------------DONE---------------------------------------------

export default class ResumeButtons extends React.Component {

  render(){

      return(

          <div className="container-fluid mt10">
            <h4 className="text-center mono bold "> Resume </h4>
            <br />
            <div className="row pb5 pbB">

                <div className="col-2"/>

                  <div className="col-4">
                      <a href="https://drive.google.com/file/d/0B3l-Tu2z5kHMM0ZzUFJxSTFWbGF5MHFpWDdqVENNYmVFZFBn/view?usp=sharing"> <button className="button ui red f13 w100"> Resume</button></a>
                  </div>

                  <div className="col-4">
                    <a href="http://github.com/marcoking13">  <button  className="button ui blue f13 w100"> Github</button> </a>
                 </div>

                 <div className="col-2"/>

                </div>

              </div>
            );

          }

    }
