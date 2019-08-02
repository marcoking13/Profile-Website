import React from "react";

import HobbyBubble from "./../components/hobby_bubble";
import FavBubble from "./../components/favorite_bubble";

import Hobbies from "./../config/hobbies.js";

class HobbyContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fav:{},
      hobbies:Hobbies
    }
    this.setFav = this.setFav.bind(this);
  }

  renderHobbyBox(){
    return this.state.hobbies.map((hobby)=>{

      return <HobbyBubble setFav={this.setFav} hobby = {hobby} />
  });
  }

  renderFavorite(){
    if(this.state.fav.favs){
      return this.state.fav.favs.map((fav)=>{
          return <FavBubble fav = {fav} />
      });
  }else{
    return <div />
  }
  }

  setFav(obj,target){
    this.setState({fav:obj});
  }

  render(){
      return (
        <div>
            <h2 className="hobT">Hobbies</h2>
            <div className="row">


                <div className="jumbotron hobJ col-5">

                <div className="row hobbCon">
                  {this.renderHobbyBox()}
                </div>

              </div>
              <div className="col-1"/>
              <div className="jumbotron currentJ col-5">

                <div className="row m55 ">
                    {this.renderFavorite()}
                </div>

              </div>

            </div>
        </div>
      )
  }
}

export default HobbyContainer;
