import { AboutContainer, AboutWrapper } from './styles'
import img from '../../../public/assets/pato.jpg'

export const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          provident eius, iusto mollitia odit autem, esse nobis fugiat quis a
          maiores! Quis explicabo excepturi officia inventore cum adipisci sint?
          Minima?
        </p>
      </AboutWrapper>
      <img src={img} alt="" />
    </AboutContainer>
  )
}
