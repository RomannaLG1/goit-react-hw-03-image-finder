import PropTypes from 'prop-types';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ imageList }) => {

  console.log(imageList);
  return (
    <ImageGalleryStyled>
      {imageList.map(({ id, ...otherProps }) => (
        <ImageGalleryItem
          key={id}
          previewImg={otherProps.webformatURL}
          largeImg={otherProps.largeImageURL}
        />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number.isRequired})
  )
}

