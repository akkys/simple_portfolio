import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function AboutMe() {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-5 about-left">
        <ScrollAnimation animateIn="fadeInUp">
          <h3>
            Consistently writing clean, scalable code that is functional,
            re-usable, responsive, user-centric, and modern designs.
          </h3>
        </ScrollAnimation>
      </div>

      <div className="col-md-5 about-right">
        <ScrollAnimation animateIn="fadeInUp">
          <h6>
            Hi, I'm Akshay. I'm a Front-end Web developer from Bangalore,
            Karnataka. <br />
            <br /> I love everything that has to do with Web design and
            development.
            <br /> I would like to be part of developing a new technology
            instead of just using it and I’m ready for visiting other countries
            and work for any company.
          </h6>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default AboutMe;
