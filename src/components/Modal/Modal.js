import PropTypes from 'prop-types';

import { Component } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleOverlayClick);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalStyled>
          <img src={this.props.src} alt="searchImage" />
        </ModalStyled>
      </Overlay>
    );
  }
}

Modal.propsTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
