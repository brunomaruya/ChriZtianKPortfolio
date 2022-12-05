import {
  Button,
  ButtonsContainer,
  HomeContainer,
  HomeWrapper,
  LastWorksContainer,
  LastWorksWrapper,
} from './styles'
import imgData from '../../data/images.json'
export const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <div>
          <h1>HELLO!</h1>
          <h2>I AM ChriZtianK</h2>
          <h3>Photographer</h3>
          <ButtonsContainer>
            <Button>
              <a href="/contact">Contact me</a>
            </Button>
            <Button>
              <a href="/portfolio">Portfolio</a>
            </Button>
          </ButtonsContainer>
        </div>
      </HomeWrapper>
      <LastWorksContainer>
        <h1>Last Works</h1>
        <LastWorksWrapper>
          {imgData.map((img) => {
            return <img key={img.id} src={img.imgUrl} />
          })}
        </LastWorksWrapper>
      </LastWorksContainer>
    </HomeContainer>
  )
}
