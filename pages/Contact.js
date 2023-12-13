import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Contactmen from "../public/contact-men.png"
import Running from "../public/running2.png"
import Landline from '../public/landline.png'
import Location from '../public/location2.png'
import Callicon from '../public/call-icon.jpg'
import Phoneicon from '../public/phone-icon.png'
import { sendEmail } from './Sendinblue';
const Contact = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [number,setNumber] = useState()
    const [msg,setMsg] = useState()
    const [details,setDetails] = useState([])
    const [subject,setSubject] = useState("Next Js feebback")
   
    const addDetails = async(e)=>{
        e.preventDefault()
     const d = {name,email,number,msg}
       setDetails([...details,d]);
       console.log(details,"h")
    //    localStorage.setItem("contactdetails",JSON.stringify(details))
       setEmail("")
       setName("")
       setNumber("")
       setMsg("")

       await sendEmail('myadagonibharath@gmail.com',email,subject,name,msg)
    }
useEffect(()=>{
    localStorage.setItem("contactdetails",JSON.stringify(details))
},[addDetails])
  return (
    <div>
        <div className='contact-container'>
        <div className='contact-con'>
        <Image src={Contactmen} width="150" height="150" className='contact-image' alt="" />
      <h1 className='contact-title'>Contact Us</h1>
      <p className='contact-para'>Use our Contact from for all information requests or contact us directly using the contact information below.</p>
    </div>
    <div className='contact-form'>
        <form onSubmit={addDetails}>
            <h3>Please Fill the Details</h3>
            <div>
            <label className='label-name' htmlFor='name'>Name</label>
            <input className='form-control input' onChange={(event)=>setName(event.target.value)} id='name' type="text" value={name} required/>
            </div>
            <div>
            <label className='label-name' htmlFor='email'>E-Mail</label>
            <input className='form-control' onChange={(event)=>setEmail(event.target.value)} id='email' type="email" value={email} required/>
            </div>
            <div>
            <label className='label-name' htmlFor='number'>Number</label>
            <input className='form-control' onChange={(event)=>setNumber(event.target.value)} id='number' type="number" value={number} required/>
            </div>
            <div>
            <label className='label-name' htmlFor='msg'>Message</label>
            <textarea className='form-control' onChange={(event)=>setMsg(event.target.value)} rows="4" id='msg' type=" text" value={msg} required></textarea>
            </div>
            <button className='btn btn-primary mt-3' type='submit'>Submit Details</button>
        </form>
        </div>
        </div>
    <div className='contact-end-container'>
        <div>
            <Image className='bottom-img' src={Running} width="100" height="100" alt=''/>
            <h1 className='end-title'>ABOUT CLUB</h1>
            <p className='end-para'>Running Guide Workouts</p>
        </div>
        <div>
            <Image className='bottom-img3' src={Callicon} width="100" height="100" alt=''/>
            <h1 className='end-title'>PHONE (LANDLINE)</h1>
            <p className='end-para'>+ 912 3 567 8987, + 912 3 567 1718</p>
        </div>
        <div>
            <Image className='bottom-img2' src={Location} width="100" height="100" alt=''/>
            <h1 className='end-title'>OUR LOCATION</h1>
            <p className='end-para'>The Courtyard, Al Quoz 1, Colorado, USA</p>
        </div>
    </div>
    </div>
  )
}

export default Contact





// import { useState } from 'react';
// import { sendEmail } from './sendinblue';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send email
//     await sendEmail(email, 'durgamahi17@gmail.com', subject, message);

//     // Reset form fields
//     setName('');
//     setEmail('');
//     setSubject('');
//     setMessage('');

//     // Optionally show a success message to the user
//     alert('Email sent successfully!');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Subject"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         required
//       ></textarea>
//       <button type="submit">Send Email</button>
//     </form>
//   );
// };

// export default Contact;
