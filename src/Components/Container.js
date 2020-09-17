import React from "react";
import Box from '../Components/Box'
import Relva from "../Assets/relva.svg";
import Projects from '../Components/Pages/Projects'
import About from '../Components/Pages/About'
import Tutorials from '../Components/Pages/Tutorials'
import OpenSource from '../Components/Pages/Opensource'
import Contact from '../Components/Pages/Contact'
import Hack from '../Components/Pages/Hacks'
import {
   Switch,
  Route,
  Link
} from "react-router-dom";
import Project from '../Assets/project.svg'
import Open from '../Assets/opensource.svg'
import Tutor from '../Assets/tutorials.svg'
import Contato from '../Assets/phone.svg'
import Sobre from '../Assets/sobre.svg'
import Hacks from '../Assets/hacks.svg'



export default class Container extends React.Component {
  render() {
    return (
     
      <div className="container-main">
      <Switch>
          <Route path="/" exact={true}>           
        <div className="boxs">
        <Link to="/projects">
          <Box title="Projetos" img={Project}  />
        </Link>
        <Link to="/opensource">
          <Box title="OpenSource" img={Open} />
        </Link>
        <Link to="/tutorials">
          <Box title="Tutoriais" img={Tutor} />
        </Link>
        <Link to="/contact">
          <Box title="Contato" img={Contato} />
        </Link>
        <Link to="/about">
          <Box title="Sobre" img={Sobre} />
        </Link>
        <Link to="/hacks">
          <Box title="Hacks" img={Hacks} />
        </Link>         
          <div className="relva">
            <img src={Relva} alt="grama" className="grama" />
          </div>
        </div>
          </Route>
          <Route path="/projects">
          <Projects/>
          </Route>
          <Route path="/opensource">
           <OpenSource/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/tutorials">
         <Tutorials/>
          </Route>
          <Route path="/hacks">
         <Hack/>
          </Route>
        </Switch>
        
      </div>
      
    );
  }
}
