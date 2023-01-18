import { EnvelopeSimple, FacebookLogo, InstagramLogo } from 'phosphor-react';
import React, { FormEvent, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

import {
  ContactContainer,
  InformationContainer,
  MessageContainer,
} from './styles';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const SERVICE_ID = 'service_6jq2fq3';
  const TEMPLATE_ID = 'template_pvto8xr';
  const PUBLIC_ID = 'kDfYgecsyWDLPLAMR';

  const notify = () =>
    toast('Your message has been successfully sent!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.currentTarget.reset();
    notify();
  };
  return (
    <ContactContainer>
      <MessageContainer>
        <h1>Send me a Message</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </MessageContainer>

      <InformationContainer>
        <h1>Contact Information</h1>
        <ul>
          <li>
            <EnvelopeSimple />
            christiankenji2003394@gmail.com
          </li>
          <li>
            <InstagramLogo />
            christian_ks21
          </li>
          <li>
            <FacebookLogo />
            Christian Kenji
          </li>
        </ul>
      </InformationContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ContactContainer>
  );
};
