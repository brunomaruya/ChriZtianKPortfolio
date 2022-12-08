import { PortfolioContainer } from './styles'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import images from '../../data/images.json'

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h1>Portfolio</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={16}>
          {images.map((image, i) => (
            <img
              key={i}
              src={image.imgUrl}
              style={{ width: '100%', display: 'block' }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </PortfolioContainer>
  )
}
