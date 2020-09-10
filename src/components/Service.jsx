import React from 'react';
import Card from './Card';
import courses from '../Data/Courses';

const Service = () => {
  return (
    <section className="service">
      <div className="my-5">
        <h1 className="text-center"> Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {courses.map((currObj, index) => {
                return (<Card key={index}
                    subject={currObj.subject}
                    desc={currObj.desc.substring(0,120) + " ..."}
                    imgsrc={currObj.imgsrc}
                    link={currObj.link} />)
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;