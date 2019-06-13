import React from "react";

import HobbyBubble from "./../components/hobby_bubble";
import FavBubble from "./../components/favorite_bubble";
class HobbyContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fav:{},
      hobbies:[
        {
          name:"Hiking",
          subName:"Favorite Spots",
          active:false,
          favs:[
            {
              name:"Lake Pleasant",
              image:"h1.jpg"
            },
            {
              name:"Sunset Crater",
              image:"h2.jpg"
            },
            {
              name:"Camelback Mountain",
              image:"h3.jpg"
            },

          ],
          image:"offroading.png"
        },

        {
          name:"Video Games",
          image:"games.png",
          subName:"Favorite Games",
          active:false,
          favs:[
            {
              name:"Paper Mario",
              image:"v1.jpg"
            },
            {
              name:"Overwatch",
              image:"v2.jpg"
            },
            {
              name:"God of War",
              image:"v3.jpg"
            },

          ]
        },

        {
          name:"Traveling",
          image:"traveling.png",
          subName:"Favorite Places",
          active:false,
          favs:[
            {
              name:"Beirut",
              image:"p1.jpg"
            },
            {
              name:"Tuscany",
              image:"p2.jpg"
            },
            {
              name:"Dubai",
              image:"p3.jpg"
            },

          ]
        },

        {
          name:"Reading",
          image:"reading.png",
          subName:"Favorite Books",
          active:false,
          favs:[
            {
              name:"A Game of Thrones",
              image:"r1.jpg"
            },
            {
              name:"The Alchemist",
              image:"r2.jpg"
            },
            {
              name:"Dune",
              image:"r3.jpg"
            },

          ]
        },

        {
          name:"Listening to Music",
          image:"music.png",
          subName:"Favorite Songs",
          active:false,
          favs:[
            {
              name:"Sicko Mode by Travis Scott",
              image:"m1.jpg"
            },
            {
              name:"Ojos Asi by Shakira",
              image:"m2.jpg"
            },
            {
              name:"Day n Night by Kid Cudi ",
              image:"m3.jpg"
            },

          ]
        },

        {
          name:"Drawing",
          image:"drawing.png",
          subName:"My Drawings",
          active:false,
          favs:[

            {
              name:"Winter Castle",
              image:"d1.jpg"
            },
            {
              name:"Arizona Morning",
              image:"d2.jpg"
            },
            {
              name:"Self Portrait",
              image:"d3.jpg"
            },

          ]
        }

      ]
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
