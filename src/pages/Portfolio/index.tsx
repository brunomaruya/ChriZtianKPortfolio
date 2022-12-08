import {
  ArrowButton,
  CloseButton,
  FullImage,
  PortfolioContainer,
} from './styles'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import images from '../../data/images.json'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'phosphor-react'

export const Portfolio = () => {
  const [data, setData] = useState({ image: '', id: 0 })

  const viewImage = (image: string, id: number) => {
    document.body.style.overflow = 'hidden'
    setData({ image, id })
  }

  const imgAction = (action: string) => {
    if (action === 'nextImg' && data.id <= images.length) {
      setData({ image: images[data.id].imgUrl, id: images[data.id].id })
    } else if (action === 'prevImg') {
      setData({ image: images[data.id - 2].imgUrl, id: images[data.id - 2].id })
      console.log(data.id)
    } else if (action === 'close') {
      document.body.style.overflow = 'visible'
      setData({ image: '', id: 0 })
    }
  }
  return (
    <PortfolioContainer>
      <h1>Portfolio</h1>
      {data.image && (
        <FullImage>
          <ArrowButton onClick={() => imgAction('prevImg')}>
            <ArrowLeft />
          </ArrowButton>
          <img src={data.image} alt="" />
          <ArrowButton onClick={() => imgAction('nextImg')}>
            <ArrowRight />
          </ArrowButton>
          <CloseButton onClick={() => imgAction('close')}>
            <X />
          </CloseButton>
        </FullImage>
      )}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={16}>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.imgUrl}
              style={{ width: '100%', display: 'block', cursor: 'pointer' }}
              alt=""
              onClick={() => viewImage(image.imgUrl, image.id)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </PortfolioContainer>
  )
}
