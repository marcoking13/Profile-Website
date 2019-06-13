import React from 'react';
import "./../css/app.css";
import Navbar from "./../components/nav_bar.js";
import Showcase from "./../components/showcase.js";
import LanguageBox from "./language_box";
import AppContainer from "./app_container.js";
import CurrentApp from "./../components/current_app.js";
import Loader from "./../components/loader.js";
import AllApps from "./../components/all_apps";

class AppPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentApp:false,
      loading:false,
      apps:[
        {
          name:"EZ-Eatz",
          link:"",
          difficulty:8,
          languages:[
            {
              image:"images/mern.png",
              name:"MERN"
            },
            {
              image:"images/css.png",
              name:"CSS"
            },
            {
              image:"images/javascript..png",
              name:"Javascript"
            }

          ],
          about:"",
          image:"images/ezeatz.png",
          background:"images/ezeatzb.jpg",
          className:"subL"


        },
        {
          name:"Codex",
          link:"https://marcoking13.github.io/Codex/",
          difficulty:7,
          languages:[
            {
              image:"images/mern.png",
              name:"React"
            },
            {
              image:"images/css.png",
              name:"CSS"
            },
            {
              image:"images/javascript..png",
              name:"Javascript"
            }

          ],
          about:"",
          image:"images/codex.svg",
          background:"images/codexb.jpg",
          className:"codexL"

        },
        {
          name:"Boo Tap",
          link:"http://boomansion.herokuapp.com",
          difficulty:7,
          languages:[
            {
              image:"images/mern.png",
              name:"React"
            },
            {
              image:"images/css.png",
              name:"CSS"
            },
            {
              image:"images/javascript..png",
              name:"Javascript"
            }

          ],
          about:"",
          image:"images/boo.png",
          background:"images/or.jpg",
          className:"subL"

        },
        {
          name:"Space Defender",
          link:"http://powerful-temple-57799.herokuapp.com",
          difficulty:6,
          languages:[
            {
              image:"images/mern.png",
              name:"React"
            },
            {
              image:"images/css.png",
              name:"CSS"
            },
            {
              image:"images/javascript..png",
              name:"Javascript"
            }

          ],
          about:"",
          image:"images/planetD.png",
          background:"images/space2.jpg",
          className:"subL"

        },

        {
          name:"Submarine Run",
          link:"https://sableye12.itch.io/submarine-run",
          difficulty:7,
          languages:[
            {
              image:"images/c.png",
              name:"C#"
            },
            {
              image:"images/unity.png",
              name:"Unity"
            }
          ],
          about:"",
          image:"images/submarine.png",
          background:"images/blue.jpg",
          className:"subL"

        },
        {
          name:"Star Bash",
          link:"https://www.sharemygame.com/share/ad81c918-adfc-4357-8c08-7223c34efb51",
          difficulty:6,
          image:"images/starbash.png",
          languages:[
            {
              image:"images/c.png",
              name:"C#"
            },
            {
              image:"images/unity.png",
              name:"Unity"
            }
          ],
          about:"",
          lImage:"images/unity.png",
          background:"images/starbashb.png",
          className:"subL"

        },
        {
          name:"Falling Gems",
          link:"https://www.sharemygame.com/share/a011bcf9-e57e-4afc-bb0f-ba9841f897ed",
          difficulty:4,
          languages:[
            {
              image:"images/c.png",
              name:"C#"
            },
            {
              image:"images/unity.png",
              name:"Unity"
            }
          ],
          about:"",
          image:"images/gem.png",
          background:"images/mm.png",
          className:"gem"

        },
        {
        name:"Wizards VS Robots",
        link:"https://sableye12.itch.io/wizards-vs-robots",
        difficulty:7,
        languages:[
          {
            image:"images/c.png",
            name:"C#"
          },
          {
            image:"images/unity.png",
            name:"Unity"
          }
        ],
        about:"",
        image:"images/WvsRLogo.png",
        background:"images/wiz.jpg",
        className:""

      }

      ]
    }
    this.loader = this.loader.bind(this);
    this.setApp = this.setApp.bind(this);
  }

  setApp(app){
    this.setState({currentApp:app})
  }
  resetState(){
    this.setState({currentApp:false});
  }

  loader(){

    this.setState({loading:true})
  }

  render(){
    var background = `url(${this.state.currentApp.background})`;
    if(this.state.loading){
      return <Loader background = {background}/>
    }
    else if(this.state.currentApp){
      return <CurrentApp loader = {this.loader} changeURL = {this.props.changeURL} renderDiff = {this.renderDiff} renderLanguages = {this.renderLanguages}currentApp = {this.state.currentApp} />
    }
    else{
      return <AllApps setApp = {this.setApp} changeURL = {this.props.changeURL} apps = {this.state.apps} />
    }
  }
}

export default AppPage;
