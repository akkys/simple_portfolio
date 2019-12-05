import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Resume() {
  return (
    <div className="row resume-container">
      <div className="col-md-1"></div>
      <div className="col-md-3">
        <ScrollAnimation animateIn="fadeInUp">
          <h2>Resume</h2>
        </ScrollAnimation>
      </div>
      <div className="col-md-8 resume-right">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="row">
            <div className="col-md-4">
              <p>2013 - 2014</p>
              <p>Academic Project</p>
            </div>
            <div className="col-md-8">
              <h4>College Website</h4>
              <p>
                Implemented a website which contains the details of Our college.
                Such as, Facilities, Faculties, Admission details, Some Photos,
                etc.
              </p>
              <p>
                <li>HTML, CSS, JavaScript, Cloudinary</li>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <hr />{" "}
        <ScrollAnimation animateIn="fadeInUp">
          <div className="row">
            <div className="col-md-4">
              <p>2013 - 2014</p>
              <p>Academic Project</p>
            </div>
            <div className="col-md-8">
              <h4>Personal Enlightenment System</h4>
              <p>
                <p>
                  Make one National card for lifetime of a Person; Store his/her
                  Personal Enlightenment Details (from birth onwards) and
                  retrieving the details whenever needed.
                </p>
                <p>
                  The system covers all the Government departments in India and
                  connects across all the departments & Citizens. Tool can
                  integrate with voice, video calling and instant messaging
                  tools to enable two way interactions.
                </p>
              </p>
              <p>
                <li>PHP, MySQL, JavaScript, HTML, CSS</li>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeInUp">
          <div className="row">
            <div className="col-md-4">
              <p>2017 - 2018</p>
              <p>Soft Solutions</p>
            </div>
            <div className="col-md-8">
              <h4>Tally Add-ons</h4>
              <p>
                <p>
                  Using TDL, implemented few add-ons to fulfill our client’s
                  requirements such as, Import Tool (From Excel to Tally), some
                  Reports which helps the users to check their daily Business
                  easily, etc.
                </p>
              </p>
              <p>
                <li>TDL(Tally Definition Language)</li>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeInUp">
          <div className="row">
            <div className="col-md-4">
              <p>2017 - 2018</p>
              <p>Soft Solutions</p>
            </div>
            <div className="col-md-8">
              <h4>Tally Online Renewal and Purchase</h4>
              <p>
                <p>
                  The Project contains online Tally Software Renewal and
                  Purchase. Implemented a website which helps our clients to
                  purchase a Tally Product online with Cash On Delivery (COD)
                  facility.
                </p>
                <p>
                  Client can do their product renewal without contacting us
                  through telephonic. It helps our clients to make renewal of
                  their product without the help of 3 rd party.
                </p>
              </p>
              <p>
                <li>ReactJs, MongoDB, NodeJs, Bootstrap, CSS and HTML</li>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeInUp">
          <div className="row">
            <div className="col-md-4">
              <p>2018 - 2019</p>
              <p>Stealth Mode</p>
              <p>(Freelance Project)</p>
            </div>
            <div className="col-md-8">
              <h4>Job Portal</h4>
              <p>
                <p>
                  Implemented a website which helps a candidate to find a job
                  which suits his education.
                  <br /> It has several components like, Sign-in, Sign-up,
                  Profile update, Education Update etc for both Fresher’s and
                  Experienced candidates.
                </p>
                <p>
                  And it also helps Recruiters to find a candidate to their
                  company. They can create a Job and post on this website.
                </p>
              </p>
              <p>
                <li>ReactJs, MongoDB, NodeJs, Bootstrap, CSS and HTML</li>
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Resume;
