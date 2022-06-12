import React, { useState } from 'react';
import {db} from '../firebase';
import '../App.css';

function Contact() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  const [loader, setLoader] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('contacts').add({
      name: name,
      email: email,
      number: number,
      subject: subject,
      message: message
    })
    .then(()=> {
      alert('Form has been submitted')
      setLoader(false);
    })
    .catch((error) => {
      alert(error.message)
      setLoader(false);
    });

    setName('')
    setEmail('')
    setNumber('')
    setSubject('')
    setMessage('')
  }
   
  return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <h2>Contact Details</h2>
        </div>
        <div className="form-control">
          <label>Name</label>
          <input type="text" placeholder="Ethan Hunt" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="form-control">
          <label>Email Id</label>
          <input type="email" placeholder="abc@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label>Mobile Number</label>
          <input type="tel" placeholder="Active Mobile Number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        </div>
        <div className="form-control">
          <label>Subject</label>
          <input type="text" placeholder="e.g., Job Enquiry" value={subject} onChange={(e)=>setSubject(e.target.value)} />
        </div>
        <div className="form-control" >
          <label>Message</label>
          <textarea  rows={4} placeholder="Your Message to Us" value={message} onChange={(e)=>setMessage(e.target.value)} />
        </div>
        <div className="form-control">
          <button type="submit" style={{background: loader? 'rgb(207, 231, 251)': 'rgb(180, 219, 251)'}}>Submit</button>
        </div>
      </form>
  )
}
export default Contact