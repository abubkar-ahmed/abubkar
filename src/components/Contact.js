import React from 'react';
import emailjs from 'emailjs-com'

function Contact() {
    const [messageSent, setMessageSent] = React.useState(false);
    const [messageSentTwo, setMessageSentTwo] = React.useState(false);

    const [formData , setFormData] = React.useState({
        name:"",
        email:"",
        message:""
    })


    function handleChange(event){
        const {name,value} = event.target ;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value 
            }
        })
    }


    function sendEmail(event){
        event.preventDefault();

        emailjs.sendForm('service_ukx0mjl','template_5uf1stj',event.target,'cvfQZMqZZ-WJYRa43').then(res =>{
            setFormData({
                name:"",
                email:"",
                message:""
            })
            setMessageSent(true);
            setMessageSentTwo(true);
        }).catch(err => {
            setMessageSent(true);
            setMessageSentTwo(false);
        })
    }
  return (
    <section className='contact' id='contact'>
        <h1><span>04. </span>What's Next?</h1>
        <h2>Get In Touch</h2>
        
        <form onSubmit={sendEmail}>
            {messageSent && (messageSentTwo? <h3 className='sent'>Massege Sent</h3> : <h3 className='err'>Error</h3>)}
            <label>Name</label>
            <input type='text' name='name' onChange={handleChange} value={formData.name}/>

            <label>Email</label>
            <input type='email' name='email' onChange={handleChange} value={formData.email}/>

            <label>Message</label>
            <textarea name='message' rows='7'  onChange={handleChange} value={formData.message}/>
            {/* <input type='submit' value='Send' ></input> */}
            <button>Send</button>
        </form>
    </section>
  )
}

export default Contact