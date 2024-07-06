import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home_page">
        <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-12">
            <div className="left-side">
              <h1 className="text-light ">
              <span className="fs-3">Helo, I Am </span> <br />
                keniya Andrew
              </h1>
              <p className="text-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur iure quos cum ratione amet similique recusandae unde
                eum omnis animi ex, numquam eaque exercitationem id harum
                praesentium ut ea corporis.
              </p>
              <button type="button" class="btn btn-light">Contact me</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-12">
            <div className="right-side">
              <img src="./images/girl.png" alt="" />
            </div>
          </div>
        </div>
        </div>
        <div className="bannerbutomimg">
          <img src="./images/cloud-soft.png" alt="" />
        </div>
        <div className="secimg">
          <img src="./images/cloud.png" alt="" />
          </div>
      </section>
    </>
  );
};

export default Home;
