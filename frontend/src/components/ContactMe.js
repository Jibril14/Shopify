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
    
   };
 
   return (
     <section className={classes.ingredientform}>
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
           <div className={classes.ingredientform__actions}>
             <button type="submit">Send Message</button>
           </div>
         </form>
         </div> 
     </section>
    
   );
 }
export default ContactMe;