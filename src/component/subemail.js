import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'

function Subemail() {

    const [Email, setEmail] = useState("")


    const sendemailopt = async (e) => {
        await e.preventDefault();
    
    
    
    
        const hide = message.loading('Action in progress..', 1);
    
    
    
    
    
        const url = 'https://api.sendinblue.com/v3/smtp/email';
        const apiKey = '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'; // Replace with your actual API key
    
        const data = {
          sender: {
            name: 'Delta Solution',
            email: 'info@deltasolution.pk'
          },
          to: [
            {
              email: "edevaan@yahoo.com",
              // name: name
            }
          ],
          subject: 'this ' + Email + ' subcribe newslatter, (Delta Solution)',
          htmlContent: '<div style="padding: 20px;height: fit-content;"><h1>Someone fill the NawsLater form on deltabusiness.io</h1><h3>email : ' + Email + '</h3></div>'
        };
    
        const headers = {
          'Content-Type': 'application/json',
          'api-key': apiKey
        };
    
        await axios.post(url, data, { headers })
          .then(response => {
    
           
            setEmail("")
            
    
    
            message.success("Thank you for Contacting Us ")
            console.log(response)
          }
    
          )
          .catch(error => {
            message.error("Something Went Wrong")
    
            console.log(error)
          }
          );
    
        // console.log(ali)
    
    
      }
      
      
    return (
        <form className="email-bar" onSubmit={sendemailopt}>
            <input className="email-edit" type="email"  placeholder="email" required  onChange={(e)=>setEmail(e.target.value)} value={Email} />
            <button className="subs" >Subscribe</button>
        </form>
    )
}

export default Subemail