import React from 'react';
import "./../css/app.css";
import Navbar from "./../components/nav_bar.js";
import Showcase from "./../components/showcase.js";
import LanguageBox from "./language_box";
import AppContainer from "./app_container.js";



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
  }
  renderAllApps(){
    return this.state.apps.map((app)=>{
      var background = `url(${app.background})`;

      return(
        <div className="col-1 appBox" onClick = {()=>{
          this.setState({currentApp:app});
        }}>
          <div className="appBackground"style={{background:background}}>
            <img className={"appLogo " + app.className} src={app.image}/>
          </div>
          <h2 className="appNamer">{app.name}</h2>
        </div>
      )
    })
  }
  resetState(){
    this.setState({currentApp:false});
  }
  renderLanguages(){

      var langs = [];
      var i =0;
        for(var i =0;i<this.state.currentApp.languages.length -1;i++){
        langs.push(
          <div className="languagesL">
            <img className="languageLC" src={this.state.currentApp.languages[i].image} />
            <p className="lll">{this.state.currentApp.languages[i].name}</p>

          </div>
        )
    }
    return langs;
  }
  renderDiff(){
    var boxes=[];
    for(var i=0;i<this.state.currentApp.difficulty;i++){
      boxes.push(<div className={"diffSeg  diff"+i}/>)
    }
    return boxes;
  }
  loader(){

    this.setState({loading:true})
  }
  render(){
    var background = `url(${this.state.currentApp.background})`;
    if(this.state.loading){
      return(
        <div className="animator" style={{background:background,paddingBottom:"50%",backgroundSize:"cover"}}>
            <div className="navbarAppC">
                <Navbar changeURL={this.props.changeURL}/>
            </div>
            <div className="row1">
                <div className="cornerBox"style={{background:background}}>
                  <img className="cornerLogo" src={this.state.currentApp.image} />
                </div>

            </div>

            <div className="row2">


                <div className="col-6 jumbotron jumbotrons">
                  <h4 className="titleCurrent">{this.state.currentApp.name}</h4>
                  <div className="jumboRow1">
                      <img src="images/loader.gif" className="loaderC"/>
                  </div>
                  <div className="jumboRow1">
                      <h6 className="howToPlay">Coded in:</h6>
                      <div className="languageBoxer">
                          {this.renderLanguages()}
                      </div>
                  </div>
                  <div className="jumboRow2">
                      <h6 className="howToPlay">Complexity:</h6>
                      <div className="diffBox">
                        {this.renderDiff()}
                      </div>
                  </div>

                  <a href={this.state.currentApp.link}><button onClick = {()=>{this.loader()}}className="btn btns  btn-danger">Check it out</button></a>

                </div>
            </div>
        </div>
      )
    }
  else  if(this.state.currentApp){

      return (
        <div className="animator" style={{background:background,paddingBottom:"10%",backgroundSize:"cover"}}>
            <div className="navbarAppC">
                <Navbar changeURL={this.props.changeURL}/>
            </div>
            <div className="row1">
                <div className="cornerBox"style={{background:background}}>
                  <img className="cornerLogo" src={this.state.currentApp.image} />
                </div>

            </div>

            <div className="row2">


                <div className="col-6 jumbotron jumbotrons">
                  <h4 className="titleCurrent">{this.state.currentApp.name}</h4>
                  <div className="jumboRow1">
                      <h4 className="howToPlay">How To Play</h4>
                      <p className="howToPlay how">
                        Tap as many ghosts as possible before they cover your whole screen!
                      </p>
                  </div>
                  <div className="jumboRow1">
                      <h6 className="howToPlay">Coded in:</h6>
                      <div className="languageBoxer">
                          {this.renderLanguages()}
                      </div>
                  </div>
                  <div className="jumboRow2">
                      <h6 className="howToPlay">Complexity:</h6>
                      <div className="diffBox">
                        {this.renderDiff()}
                      </div>
                  </div>

                  <a ><button onClick = {()=>{this.loader()}} className="btn btns  btn-danger">Check it out</button></a>

                </div>
            </div>
        </div>
      );
    }else{
    return (
        <div className="container-fluid pad100"style={{background:"url('images/mosaic.png')"}}>
          <div className=" bb">
            <Navbar changeURL = {this.props.changeURL}/>

          </div>
            <div className="appContainer">
                <h2 className="appTitle">My Apps</h2>

                  <div className="row">
                      {this.renderAllApps()}

                  </div>
            </div>

        </div>

  );
}
}
}

export default AppPage;
