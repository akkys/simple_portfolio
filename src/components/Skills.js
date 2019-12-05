import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Skills() {
  return (
    <div className="row skill-container">
      <div className="col-md-1"></div>
      <div className="col-md-3">
        <ScrollAnimation animateIn="fadeInUp">
          <h2>Technical Skills</h2>
        </ScrollAnimation>
      </div>
      <div className="col-md-1">
        <ScrollAnimation animateIn="fadeInUp">
          <p>React</p>
          <br />
          <h3>65%</h3>
        </ScrollAnimation>
      </div>
      <div className="col-md-1">
        <ScrollAnimation animateIn="fadeInUp">
          <p>JavaScript</p>
          <br />
          <h3>50%</h3>
        </ScrollAnimation>
      </div>
      <div className="col-md-1">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Redux</p>
          <br />
          <h3>50%</h3>
        </ScrollAnimation>
      </div>
      <div className="col-md-1">
        <ScrollAnimation animateIn="fadeInUp">
          <p>HTML/CSS</p>
          <br />
          <h3>75%</h3>
        </ScrollAnimation>
      </div>
      <div className="col-md-1">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Bootstrap</p>
          <br />
          <h3>70%</h3>
        </ScrollAnimation>
      </div>
      <div className="col-md-2">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Responsive Design</p>
          <br />
          <h3>80%</h3>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Skills;
