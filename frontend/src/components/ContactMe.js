import React, { useState } from 'react';
import classes from './ContactMe.module.css';
import axios from 'axios'

const ContactMe = () => {
    const  [enteredName,   setEnteredName] = useState('');
    const  [enteredMessage,  setEnteredMessage]  =  useState('');

    const submitHandler = event => {
     event.preventDefault();
    const dash = ({name: enteredName, message: enteredMessage})

    axios.post('/api/create/message/',  dash) 
     .then(response =>{
        console.log(response)
     })
    
 
    (function(){document.getElementById( "message").value=''})();
    (function(){document.getElementById( "title").value=''})();
    (function(){document.getElementById("p1").style.display='block'})();
   };
  
 
   return (    

   
     <section className={classes.formCover}>
        <p id="p1" style={{ display:"none", color: "green", paddingTop: "20px", font: "inherit"}}>
       Thanks For Contacting, I Will Get Back To You Soon 
       <span>    <i class="fa fa-thumbs-up" style={{ fontSize:"24px", color:"green"}}></i></span></p>
       
        <div className={classes.card}>
         <form onSubmit={submitHandler}>
           <div className={classes.formcontrol}>
             <label htmlFor="title">Name:</label>
             <input type="text" id="title" value={enteredName} 
              onChange={event => {setEnteredName(event.target.value, ) }} />
           </div>
           <div className={classes.formcontrol}>
             <label htmlFor="amount">Your Message:</label>
             <textarea autoFocus rows="6" cols="100" name="comment" id="message" required value={enteredMessage} 
              onChange={event => {setEnteredMessage( event.target.value,) }}/>
           </div>
           <div className={classes.formform__actions}>
             <button type="submit" onSubmit="{ClearFormHandler}">Send Message</button>
           </div>
         </form>
         </div> 
        <div> <p style={{ color: "red", paddingTop: "20px", font: "inherit"}}>
         You Could Also Send Me An Email Instead:
        <a href="mailto:jibril41@yahoo.com?Subject=MyApp%20again" target="_top">Send Mail</a>
      </p></div>
     </section>
    
   );
 }
export default ContactMe;
