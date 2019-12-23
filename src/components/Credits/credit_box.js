import React from "react";

export default class CreditBox extends React.Component {
  render(){
    return(
      <li className="list-group-item bb cw">
        <div className="row">
          <div className="col-1">
            <img src = {this.props.credit.image} className="w100"/>
          </div>
          <div className="col-3">
            <h5 className="text-center">{this.props.credit.author}</h5>
          </div>
          <div className="col-1"/>
          <div className="col-5">
            <h5 className="text-center">{this.props.credit.link}</h5>
          </div>
        </div>

      </li>
    )
  }
}
