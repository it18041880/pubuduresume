import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} 
            <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
          
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    
    const sport = this.props.data.sport.map(function (sport) {
      return (
        <div key={sport.company}>
          <h3>{sport.company}</h3>
          <p className="info">
            {sport.title}
            <span>&bull;</span> <em className="date">{sport.years}</em>
          </p>
          <p>{sport.description}</p>
        </div>
      );
    });
    const skillsdata = this.props.data.skillsdata.map((skillsdata) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skillsdata.name.toLowerCase();
      const width = skillsdata.level;

      return (
        <li key={skillsdata.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skillsdata.name}</em>
        </li>
      );
    });
    var skills = this.props.data.skills.map(function(skills){
      var projectImage = 'images/tech/'+skills.image;
        return <div key={skills.name} className="columns feature-item">
                  <img className='skill' alt={skills.name} src={projectImage} />
                  <h5>{skills.name}</h5>
                  <p>{skills.description}</p>
               </div>
      })

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        
        <Slide left duration={1300}>
          <div className="row sport">
            <div className="three columns header-col">
              <h1>
                <span>Sports And Activities</span>
              </h1>
            </div>

            <div className="nine columns main-col">{sport}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skillsdata">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skillsdata">{skillsdata}</ul>
              </div>
            </div>
          </div>
        </Slide>

        <div className="row skill">

              <div className="three columns header-col">
              <h1><span>Favorite Tech</span></h1>
       </div>

       <div>
              <div className="nine columns main-col"><p className="lead center">{skillmessage}</p><br/><br/></div>
              <ul className="bgrid-quarters s-bgrid-thirds cf">
              {skills}
              </ul>
      </div>
      </div>

      </section>
    );
  }
}

export default Resume;
