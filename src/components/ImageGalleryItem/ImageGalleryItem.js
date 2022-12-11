// import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';


export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState(() => ({ isModalOpen: false }));

  render() {
    const { previewImg, largeImg } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <GalleryItemImage src={previewImg} alt="searchImage" />
        </GalleryItem>
        {isModalOpen &&
          createPortal(
            <Modal
              src={largeImg}
              alt="searchImage"
              onClose={this.closeModal}
            />,
            document.querySelector('#modal-root')
          )}
      </>
    );
  }
}
