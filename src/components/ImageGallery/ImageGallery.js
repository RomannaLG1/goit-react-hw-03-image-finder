// import PropTypes from 'prop-types';

import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
    error: null
  };
  componentDidUpdate(pp, ps) {
    if (pp.searchImg !== this.props.searchImg) {
      this.setState({ loading: true, image: null });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchImg}&page=1&key=30553592-7f8cf46d4a7791408268d5968&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(image => this.setState({ image }))
        .catch(error => this.setState({error}))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const {image, loading, error} = this.state;
 
    return (
      <>
      {/* {error && <h1>No found any image</h1>} */}
        {loading && <div>Loading...</div>}
        <ul>
          {image && (
            <li>
              <div>{image.hits ? image.hits[0].id : 'No found any image'}</div>
            </li>
          )}
        </ul>
      </>
    );
  }
}
