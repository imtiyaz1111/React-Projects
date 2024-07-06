import React from 'react';
import Commn from '../commn/Commn';

const About = () => {
  return (
    <>
      <Commn
        name="Welcome to About Page"
        imgsrc="image/home2.jpg"
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
}

export default About;
