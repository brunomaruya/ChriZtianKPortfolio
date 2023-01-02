import { AboutContainer, AboutWrapper } from './styles'
import img from '../../../public/assets/Christian2.jpg'

export const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <h1>About</h1>
        <p>
          I&apos;m Brazilian and I love traveling, I love photography and
          videography, and with my mistakes I always look for new things to
          learn.
        </p>
      </AboutWrapper>
      <img src={img} alt="" />
    </AboutContainer>
  )
}
