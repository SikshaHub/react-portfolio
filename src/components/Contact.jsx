import React, { useState } from 'react';

const Contact = () => {
  const [suggestion, setSuggestion] = useState({
    fullName: '',
    mobileNo: '',
    emailId: '',
    message: ''
  });

  const [response, setResponse] = useState("");

  const inputEvent = (event) => {
    let ename = event.target.name;
    let evalue = event.target.value;
    setSuggestion((preValue) => {
      return {
        ...preValue,
        [ename]: evalue,
      }
    });
  }

  const formSubmit = (event) => {
    event.preventDefault();
    setResponse(`Name: ${suggestion.fullName}
                Mobile No: ${suggestion.mobileNo}\nEmail Id: ${suggestion.emailId}\nMessage: ${suggestion.message}`);
    setSuggestion({
      fullName: '',
      mobileNo: '',
      emailId: '',
      message: ''
    });
  }

  return (
    <div className="contact">
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="full_name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="full_name" 
                  name="fullName"
                  placeholder="Full Name" 
                  value={suggestion.fullName}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile_no" className="form-label">Mobile No.</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="mobile_no" 
                  name="mobileNo"
                  placeholder="Mobile No: format {9876543210}" 
                  value={suggestion.mobileNo}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email_id" className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email_id" 
                  name="emailId" 
                  placeholder="name@example.com" 
                  value={suggestion.emailId}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message"
                  rows="3" 
                  placeholder="Write your message..." 
                  value={suggestion.message}
                  onChange={inputEvent}
                  required
                />
              </div>
              <button type="submit" className="btn btn-outline-primary mb-3">Submit</button>
              <p className="wrapper">{response}</p>
            </form>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Contact;