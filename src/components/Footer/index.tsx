import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Phone,
  YoutubeLogo,
} from 'phosphor-react'
import {
  Collumn,
  CollumnsContainer,
  FooterContainer,
  FooterWrapper,
} from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <CollumnsContainer>
          <Collumn>
            <h1>ChriZtianK</h1>
            <p>Hello, I&apos;m ChriZtianK and I&apos;m a photographer</p>
          </Collumn>
          <Collumn>
            <h1>Navigation</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact me</a>
              </li>
            </ul>
          </Collumn>
          <Collumn>
            <h1>Information</h1>
            <ul>
              <li>
                <EnvelopeSimple />
                christiankenji2003394@gmail.com
              </li>
            </ul>
          </Collumn>
          <Collumn>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/christian_ks21/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo />
                  <span>christian_ks21</span>
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FacebookLogo />
                  <span>Christian Kenji</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@christian_ks21"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YoutubeLogo />
                  <span>ChriZtianK</span>
                </a>
              </li>
            </ul>
          </Collumn>
        </CollumnsContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}
