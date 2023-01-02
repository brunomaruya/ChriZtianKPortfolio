import {
  ArrowButton,
  CloseButton,
  FullImage,
  PortfolioContainer,
} from './styles';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'phosphor-react';
import { listAll, ref, getDownloadURL, getStorage } from 'firebase/storage';
import { storage } from '../../firebase';

interface imageListProps {
  url: string;
  id: number;
}

export const Portfolio = () => {
  const dataFetchedRef = useRef(false);
  const [data, setData] = useState({ image: '', id: 0 });
  const [imageList, setImageList] = useState<imageListProps[]>([
    { url: '', id: 0 },
  ]);

  console.log('batata');

  const imageListRef = ref(storage, '/images');

  // useEffect(() => {
  //   if (dataFetchedRef.current) return;
  //   dataFetchedRef.current = true;

  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => {
  //           if (prev[0].id === 0) {
  //             return [{ url, id: 1 }];
  //           } else {
  //             return [...prev, { url, id: prev[prev.length - 1].id + 1 }];
  //           }
  //         });
  //       });
  //     });
  //   });
  // }, []);
  // console.log(imageList);

  // const viewImage = (image: string, id: number) => {
  //   document.body.style.overflow = 'hidden';
  //   setData({ image, id });
  // };

  // const imgAction = (action: string) => {
  //   if (action === 'nextImg' && data.id <= imageList.length) {
  //     setData({ image: imageList[data.id].url, id: imageList[data.id].id });
  //   } else if (action === 'prevImg') {
  //     setData({
  //       image: imageList[data.id - 2].url,
  //       id: imageList[data.id - 2].id,
  //     });
  //     console.log(data.id);
  //   } else if (action === 'close') {
  //     document.body.style.overflow = 'visible';
  //     setData({ image: '', id: 0 });
  //   }
  // };
  return (
    <PortfolioContainer>
      {/* <h1>Portfolio</h1>
      {data.image && (
        <FullImage>
          <ArrowButton onClick={() => imgAction('prevImg')}>
            <ArrowLeft />
          </ArrowButton>
          <img src={data.image} alt="" />
          <CloseButton onClick={() => imgAction('close')}>
            <X />
          </CloseButton>
          <ArrowButton onClick={() => imgAction('nextImg')}>
            <ArrowRight />
          </ArrowButton>
        </FullImage>
      )}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {imageList
            .sort(function (a, b) {
              return a.id - b.id;
            })
            .map((image) => (
              <img
                key={image.id}
                src={image.url}
                style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                alt={image.id}
                onClick={() => viewImage(image.url, image.id)}
              />
            ))}
        </Masonry>
      </ResponsiveMasonry> */}
    </PortfolioContainer>
  );
};
