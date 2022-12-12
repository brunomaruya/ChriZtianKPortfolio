import { AboutContainer, AboutWrapper } from './styles'
import img from '../../../public/assets/christian.jpg'

export const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <h1>About</h1>
        <p>yo no se</p>
      </AboutWrapper>
      <img src={img} alt="" />
    </AboutContainer>
  )
}
