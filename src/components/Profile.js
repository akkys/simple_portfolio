import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Profile() {
  return (
    <div className="profile-container">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <ScrollAnimation animateIn="fadeInUp">
            <h1>Akshay S K</h1>
            <h2>Front-end Developer</h2>
            <h3>Bangalore, Karntaka</h3>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Profile;
