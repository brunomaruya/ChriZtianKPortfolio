import { EnvelopeSimple, FacebookLogo, InstagramLogo } from 'phosphor-react'
import {
  ContactContainer,
  InformationContainer,
  MessageContainer,
} from './styles'

export const Contact = () => {
  return (
    <ContactContainer>
      <MessageContainer>
        <h1>Send me a Message</h1>
        <form>
          <div>
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
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
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
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
    </ContactContainer>
  )
}
