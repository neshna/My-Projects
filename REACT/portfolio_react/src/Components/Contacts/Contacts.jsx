import React ,{useRef , useState} from 'react'
import './Contacts.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import emailjs from "emailjs-com";


const Contacts = () => {

  const[loading , setLoading] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "neshana_2312", // Replace with your EmailJS Service ID
        "template_5swcixj", // Replace with your EmailJS Template ID
        form.current,
        "iplUgN9RVYIr0C7m3"   // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
          setLoading(false);
        }
      );
  };


  return (
    <div className="contactContainer" id="Contact">
      <div className="contactTitle">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='patternImg' />
      </div>
      <div className="contactSection">
        <div className="contactLeft">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to send me a
            message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contactDetails">
            <div className="contactDetail" >
              <img src={mail_icon} alt='email' />
              <p>neshna2312@gmail.com</p>
            </div>
            <div className="contactDetail" >
              <img src={call_icon} alt='phno' />
              <p>6369283683</p>
            </div>
            <div className="contactDetail" >
              <img src={location_icon} alt='location' />
              <p>Theni , TamilNadu</p>
           </div>
         </div>
        </div>
        <form className="contactRight" onSubmit={sendEmail} ref={form}>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' />
          <label htmlFor="">Your Email</label>
          <input type="email" name='email' placeholder='Enter Your email' />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name='message' placeholder='Enter Your message' rows='8' />
          <button type='submit' className="contactSubmit" >
            {loading ? 'Loading...' : 'Submit Now'}
            </button>
        </form>
      </div>

    </div>
  )
}

export default Contacts
