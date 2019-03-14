import React, { Component } from "react";
import Typed from "typed.js";
import "./Dashboard.css";
export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      // strings: ["My name is Will Young"]
    };
  }

  componentDidMount() {
    const strings = [
      "Welcome!",
      "Glad you can make it",
      "My name is Will Young",
      "Please enjoy the journey through my site",
      "Godspeed!"
    ];
    const options = {
      strings: strings,
      typeSpeed: 70
    };

    this.typed = new Typed(this.el, options);
    // this.typed.toggle();
    this.typed.start();
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const github =
      "https://s3.us-east-2.amazonaws.com/wy-portfolio-bucket/admin/github-logo.png";
    const linkin =
      "https://s3.us-east-2.amazonaws.com/wy-portfolio-bucket/admin/linkedin.png";

    return (
      <div className="main">
        <div className="overlay">
          <div className="type-wrap">
            <span
              style={{ whiteSpace: "pre" }}
              ref={el => {
                this.el = el;
              }}
            />
          </div>
          <div className="quick-links">
            <a href="https://github.com/Godssspeed" target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href="https://github.com/Godssspeed" target="_blank">
              <img src={linkin} alt="linkedIn" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
