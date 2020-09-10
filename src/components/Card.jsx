import React from 'react';

const Card = (props) => {
  return (
    <>
    <div className="col-md-4 col-10 mx-auto">
        <div className="card courses">
            <img src={props.imgsrc} className="card-img-top" alt={props.subject} />
            <div className="card-body">
                <h5 className="card-title">{props.subject}</h5>
                <p className="card-text">{props.desc}</p>
                <a href={props.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Go to {props.subject}</a>
            </div>
        </div>
    </div>
    </>
  );
}

export default Card;