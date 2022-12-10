import { EnvelopeSimple, FacebookLogo, InstagramLogo } from 'phosphor-react'

import emailjs from '@emailjs/browser'

import React, { useRef, useState } from 'react'
import {
  ContactContainer,
  InformationContainer,
  MessageContainer,
} from './styles'

export const Contact = () => {
  const form = useRef()
  const [result, showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_9kq9qyb',
        'template_pvto8xr',
        form.current,
        'kn2KcngS9dnQUjQNb',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
    showResult(true)
  }

  setTimeout(() => {
    showResult(false)
  }, 100000)

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
              />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
            ></textarea>
            {result ? (
              <p>
                Your message has been successfully sent. I will contact you
                soon.
              </p>
            ) : null}
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
    </ContactContainer>
  )
}
