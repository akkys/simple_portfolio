import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function ContactMe() {
  return (
    <div className="row contact-container">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <ScrollAnimation animateIn="zoomIn">
          <h5>Say Hello!</h5>
          <br />
          <p>9620033414 | 7259636338</p>
          <p>akshaysk164@gmail.com</p>
          <span>COPYRIGHT 2019 @ WEBSITE.COM. ALL RIGHTS RESERVED.</span>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default ContactMe;
