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
            <p>Hello, I`m ChriZtianK and I`m a photographer</p>
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
                <Phone /> 090 6390 2020
              </li>
              <li>
                <EnvelopeSimple />
                christiankenji2003394@gmail.com
              </li>
            </ul>
          </Collumn>
          <Collumn>
            <ul>
              <li>
                <InstagramLogo />
              </li>
              <li>
                <FacebookLogo />
              </li>
              <li>
                <YoutubeLogo />
              </li>
            </ul>
          </Collumn>
        </CollumnsContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}
