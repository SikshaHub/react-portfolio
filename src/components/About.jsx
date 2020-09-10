import React from 'react';
import Base from './Base';
import aboutImg from '../images/school.svg';

const About = () => {
  return (
    <Base 
      desc = "Designed and developed by"
      owner = "Vineet Tripathi"
      statement = "The Online Course help students to solve muliple choice questions from various fields"
      imgSrc = {aboutImg}
      goto = "/contact"
      btnName = "Contact Now"
    />
  );
}

export default About;