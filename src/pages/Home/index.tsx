import { Button, ButtonsContainer, HomeContainer, HomeWrapper } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
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
      </HomeWrapper>
    </HomeContainer>
  )
}
