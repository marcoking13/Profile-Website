import React from "react";

class ResumeButtons extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="col-6">
          <a href="http://github.com/marcoking13">  <button className="resumeButton git"><img className="gitLogo"src="images/github.png"/>My Github</button></a>
        </div>

        <div className="col-6">
          <a href="https://drive.google.com/file/d/0B3l-Tu2z5kHMM0ZzUFJxSTFWbGF5MHFpWDdqVENNYmVFZFBn/view?usp=sharing"><button className="resumeButton link"><img className="gitLogo"src="images/linkden.png"/>My Resume</button></a>
        </div>
      </div>
    )
  }
}


export default ResumeButtons;
