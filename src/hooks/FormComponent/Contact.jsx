import { useState } from 'react'
import './Contact.css'
export const Contact = () =>{
   const [formData, setFormData] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
   }) 

   const changeFormData = (e) =>{
    const {id , value} = e.target;
    setFormData((prev) => ({ ...prev , [id] : value}))    
   }

   const submitForm = (e) =>{
    e.preventDefault();
    console.log(formData);
   }
   return(
    <>
        <div class="contact-container">
    <form class="contact-form">
      <h2>Contact Us</h2>
      <div class="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Full Name" value={formData.name} onChange={changeFormData} required/>
      </div>
      <div class="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email Address" value={formData.email} onChange={changeFormData} required/>
      </div>
      <div class="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="Subject of Your Message" value={formData.subject} onChange={changeFormData} required/>
      </div>
      <div class="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Write your message here" rows="5" value={formData.message} onChange={changeFormData} required></textarea>
      </div>
      <button type="submit" class="submit-button" onClick={submitForm}>Send Message</button>
    </form>
  </div>
    </>
   )
}