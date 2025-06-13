import React from 'react'
import './Section.css'

const Section = () => {
    let btn=()=>{
        let emailinput=document.querySelector('input');
        const messagebox=document.querySelector('.message')
        if(emailinput.value == ""){
            messagebox.innerHTML = "Please enter your email address!";
            messagebox.style.color = "red";
            messagebox.style.fontSize = "15px";
            messagebox.style.marginTop = "10px";
        }else{
            messagebox.innerHTML = "Thank you for subscribing!";
            messagebox.style.color = "white";
            messagebox.style.fontSize = "20px";
            messagebox.style.marginTop = "10px";
            emailinput.value = "";  
          }
    }
  return (
<>
   <div className="section">
    <div className="section__title">
        <h1>Unlimited movies, TV  <br />  shows, and more
        </h1>
        <span>Starts at Rs 250. Cancel anytime.</span>
       <p>Ready to watch? Enter your email to create or restart your <br /> membership.</p>
        </div>
        <div className="forum">
          <input type="email" name="akash" placeholder='Email address'/>
        <button onClick={btn}>Get started &nbsp; &gt;
</button>
        </div>
<p className="message"></p>
   </div>
</>
)

}
export default Section