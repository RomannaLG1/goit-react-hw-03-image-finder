// import PropTypes from 'prop-types';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ imageList }) => {

  console.log(imageList);
  return (
    <ImageGalleryStyled>
      {imageList.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          previewImg={webformatURL}
          largeImg={largeImageURL}
        />
      ))}
    </ImageGalleryStyled>
  );
};
