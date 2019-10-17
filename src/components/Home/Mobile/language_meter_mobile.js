import React from "react";
import Languages from "./../../../config/languages.js";

//-------------------------DONE-------------------------------------//

class LanguageMeter extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      languages:Languages
    }

  }

  renderLanguages(){

    return this.state.languages.map((language)=>{

        return (
          <div className="row">

            <div className="col-2">
              <img className="w100" src = {language.image}/>
            </div>

            <div className="col-3">
                <p>{language.name}</p>
            </div>

              <div classNmae="col-5">

                <div className="w200px h30px bb">
                    {this.renderCom(language)}
                </div>

              </div>

          </div>
        );

    });

  }

  renderCom(lang){
    var html = [];

    for(var i = 0; i<lang.leve; i++){
        html.push(<div className="h30px rb fl w7px"/>)
    }

    return html;
  }

  render(){

    return(
        <div className="container-fluid">
          <p className="text-center mono f17">Languages I Mastered</p>
            <br />
          {this.renderLanguages()}
        </div>
    )
    
  }

}



export default LanguageMeter;
