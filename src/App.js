import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <AboutMe />
      <Skills />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;
