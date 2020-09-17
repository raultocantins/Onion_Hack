import React from "react";
import Box from '../Components/Box'
import Onion from "../Assets/cebola.svg";
import Relva from "../Assets/relva.svg";
import Projects from '../Components/Pages/Projects'
import About from '../Components/Pages/About'
import Tutorials from '../Components/Pages/Tutorials'
import OpenSource from '../Components/Pages/Opensource'
import Contact from '../Components/Pages/Contact'
import {
   Switch,
  Route,
  Link
} from "react-router-dom";
import Projet from '../Assets/conceito.svg'
import Git from '../Assets/git.svg'


export default class Container extends React.Component {
  render() {
    return (
     
      <div className="container-main">
      <Switch>
          <Route path="/" exact={true}>           
        <div className="boxs">
        <Link to="/projects">
          <Box title="Projetos" img={Projet}  />
        </Link>
        <Link to="/opensource">
          <Box title="OpenSource" img={Git} />
        </Link>
        <Link to="/tutorials">
          <Box title="Tutoriais" img={Onion} />
        </Link>
        <Link to="/contact">
          <Box title="Contato" img={Onion} />
        </Link>
        <Link to="/about">
          <Box title="Sobre" img={Onion} />
        </Link>
        <Link to="/">
          <Box title="Projetos" img={Onion} />
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
        </Switch>
        
      </div>
      
    );
  }
}
