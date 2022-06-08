import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Data from './Data.json'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const project = Data.projects.map(proj => {
    return (
      <div className="project-container" key={proj.id}>
          <h2>{proj.Name}</h2>
          <img src={proj.image} alt={proj.Name}></img>
          <a href={proj.url} target='_blank' rel='noopner noreferrer'>Visit Site &rarr;</a>
      
      </div>
    ) ;
  })
  
  return (
    <div className="App">
      <Header />
      <main>
        <Landing />
        <AboutMe />
        <section className="Projects" id="work">
          <h1><span>02. </span>Some Things I’ve Built </h1>
          <div className="container">
            {project}
          </div>
        </section>
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;

