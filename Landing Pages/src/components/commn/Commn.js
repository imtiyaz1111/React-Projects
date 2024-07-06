import React from 'react';
import './commn.css'
import {Link} from "react-router-dom"

const Commn = (props) => {
  return (
    <>
    <section className="container align-items-center">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-12 d-flex justify-content-center flex-column">
          <div className="left-side">
          <h1 className="home-heading">
            {props.name}<strong className="brand-name"> Imtiyaz Alam</strong>
          </h1>
          <h6>We are the team of talented developer making websites</h6>
          <div className="mt-3">
            <Link to={props.visit} className="btn-get-started">
              {props.btnname}
            </Link>
          </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-12">
          <div className="right-side">
            <figure className="home-img">
            <img src={props.imgsrc} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default Commn;
