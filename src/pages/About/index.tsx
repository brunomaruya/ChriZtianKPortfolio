import { AboutContainer, AboutWrapper } from './styles';
import img from '../../../public/assets/Christian2.jpg';
import img3 from '../../../public/assets/Christian4.jpg';

export const About = () => {
  //update3
  return (
    <AboutContainer>
      <img src={img3} alt="" />
      <AboutWrapper>
        <h1>About me</h1>
        <p>
          Hi! My name is Kenji! I'm Brazilian/Filipino born in Japan. I usually
          take photos and videos of nature, portrait and street. Also I can
          shoot products!
        </p>
        <p>
          Currently I'm working in factory, so I'm looking for a photography
          job!
        </p>
      </AboutWrapper>
    </AboutContainer>
  );
};
