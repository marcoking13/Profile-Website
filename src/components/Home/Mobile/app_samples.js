import React from "react";

//---------------------------DONE---------------------------------------------//

export default class AppSamples extends React.Component{

  renderHTML(){

      return this.props.samples.map((sample)=>{

        var background = `url(${sample.background})`;

        return (

          <div className="col-4 bWW turnRedE bb">

              <div className="apBB  row bb">

                <div className="col-2"/>

                <div className="col-10">
                  <br/>
                  <img className="w100 mt5 ml15" src={sample.image}/>
                </div>

                <div className="col-1"/>

              </div>

                <p className=" turnRedE text-center purpleE w100 cw">{sample.name}</p>

          </div>

        );

      });

  }

  render(){

    return(
        <div className="row ">
          {this.renderHTML()}
        </div>
      )

    }

}
