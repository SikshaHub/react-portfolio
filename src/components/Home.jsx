import React from 'react';
import Base from './Base';
import homeImg from '../images/education.svg';

const Home = () => {
  return (
    <Base 
      desc = "Learn anything anytime with"
      owner = "SikshaHub"
      statement = "Solve multiple choice questions with our robust API"
      imgSrc = {homeImg}
      goto = "/service"
      btnName = "Get Started"
    />
  );
}

export default Home;