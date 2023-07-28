import React, { useState } from 'react';
import '@/app/styles/contact.css'
import axios, { Axios } from 'axios';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fabform.io/f/j3h95AH', {
        name,
        surname,
        email,
        subject,
        message,
      });

      setIsSubmitted(true);
      setName('');
      setSurname('');
      setEmail('');
      setSubject('');
      setMessage('');



    } catch (error) {
      console.log("error")
    }

  };



  return (
    <>
      <div class="contact-page section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-text">
                <div class="section-heading">
                  <h6>Contact Us</h6>
                  <h2>Say Hello!</h2>
                </div>
                <p>The nextpro Freelancer Template is a cutting-edge web template designed specifically for freelance professionals. Built on the latest version of Next.js (13+), this template offers a seamless and modern user experience. With its sleek and responsive design, freelancers can showcase their skills, portfolio, and services in a visually appealing manner.</p>
                <ul>
                  <li><span>Address</span>Emerywood Dr, Buena Park, CA 90621, USA</li>
                  <li><span>Phone</span> +123 456 7890</li>
                  <li><span>Email</span> exmple@contact.com</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-content">
                <div class="row">
                  <div class="col-lg-12">
                    <div id="map">
                      <iframe className='google_map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2833.5604175749013!2d-117.9855059250795!3d33.88218942669188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUyJzU1LjkiTiAxMTfCsDU4JzU4LjYiVw!5e1!3m2!1sen!2sth!4v1690484436814!5m2!1sen!2sth" width="100%" height="325px" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <form id="contact-form" onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-lg-6">
                          <fieldset>
                            <input className='input_box' type="name" value={name}
                              onChange={(e) => setName(e.target.value)} id="name" placeholder="Your Name..." autocomplete="off" required />
                          </fieldset>
                        </div>
                        <div class="col-lg-6">
                          <fieldset>
                            <input className='input_box' type="surname" value={surname}
                              onChange={(e) => setSurname(e.target.value)} id="surname" placeholder="Your Surname..." autocomplete="off" required />
                          </fieldset>
                        </div>
                        <div class="col-lg-6">
                          <fieldset>
                            <input className='input_box' type="text" value={email}
                              onChange={(e) => setEmail(e.target.value)} id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                          </fieldset>
                        </div>
                        <div class="col-lg-6">
                          <fieldset>
                            <input className='input_box' type="subject" value={subject}
                              onChange={(e) => setSubject(e.target.value)} id="subject" placeholder="Subject..." autocomplete="off" />
                          </fieldset>
                        </div>
                        <div class="col-lg-12">
                          <fieldset>
                            <textarea value={message}
                              onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Your Message"></textarea>
                          </fieldset>
                        </div>
                        <div class="col-lg-12">
                          {isSubmitted && <p className='text-success'>Your message is submitted.</p>}
                          <fieldset>
                            <button type="submit" id="form-submit" class="orange-button">Send Message Now</button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;