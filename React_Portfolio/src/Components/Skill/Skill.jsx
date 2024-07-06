import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="left-side">
                <img src="./images/tech-icons.png" alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="right-seide">
                <h1 className="text-light">Skill</h1>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt cupiditate praesentium nulla tenetur culpa, harum
                  assumenda aut nesciunt dolore, maiores beatae qui quod
                  sapiente quas possimus repudiandae minima, amet vero?  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt cupiditate praesentium nulla tenetur culpa, harum
                  assumenda aut nesciunt dolore, maiores beatae qui quod
                  sapiente quas possimus repudiandae minima, amet vero?
                </p>
                <button type="button" class="btn btn-light">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
