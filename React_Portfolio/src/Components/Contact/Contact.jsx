import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
  });
  const InputEvent = (e) => {
    const {name, value} = e.target;
    setData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert('Message Send Sussefully'
    );
  };

  return (
    <>
      <section className="contact pt-5 pb-5">
        <h1 className="text-center text-light">
          Any Question?Feel Free <br />
          To Contact
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-12">
              <div className="adress pt-3 mb-3">
                <h3 className="text-light">Contact Information</h3>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem qui nulla saepe eligendi iste perferendis minus quaerat
                  eos et? Iste dolorem eius quis dolore quisquam minima numquam
                  possimus eligendi. Velit.
                </p>
                <p className="text-light">+19 5262149821</p>
                <p className="text-light">keniyaandrew143@gmail.com</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8 col-12">
              <form className="form" onSubmit={formSubmit}>
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6 col-6">
                    <div className="mb-3">
                      <input
                        name="firstname"
                        value={data.firstname}
                        onChange={InputEvent}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="firstname"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-6">
                    <div className="mb-3">
                      <input
                        name="lastname"
                        value={data.lastname}
                        onChange={InputEvent}
                        type="text"
                        required
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="lastname"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      type="number"
                      required
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="phonenumber"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      required
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={data.message}
                      onChange={InputEvent}
                      type="message"
                      className="form-control"
                      required
                      placeholder="message"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-warning">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
