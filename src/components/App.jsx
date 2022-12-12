import { Component } from 'react';
import Box from './Box';
import * as API from './Helpers/api-service';
import { toast, ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchValue: '',
    imageHits: [],
    page: null,
    totalImg: null,
    isLoading: false,
    error: false,
  };

  async componentDidUpdate(_, pS) {
    const prevQuery = pS.searchValue;
    const nextQuery = this.state.searchValue;
    const prevPage = pS.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      try {
        this.setState(() => ({ isLoading: true }));
        const { hits, totalHits } = await API.fetchImages(nextQuery, nextPage);
        this.setState(state => ({
          imageHits: [...state.imageHits, ...hits],
          totalImg: totalHits,
          isLoading: false,
        }));
      } catch (error) {
        this.setState({ error: true, isLoading: false });
      }
    }
  }

  handleFormSubmit = searchValue => {
    if (this.state.searchValue === searchValue) {
      return;
    }
    this.setState({ searchValue: searchValue, page: 1, imageHits: [] });
  };

  handleLoadMore = () => this.setState(({ page }) => ({ page: page + 1 }));

  render() {
    const { imageHits, totalImg, isLoading } = this.state;
    return (
      <Box display="grid" pb="24px" gridTemplateColumns="1fr" gridGap="16px">
        <Searchbar onFormSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {totalImg === 0 && !isLoading && toast.error('Sorry, no images found')}
        {imageHits.length > 0 && (
          <>
            <ImageGallery
              imageList={imageHits}
              onModalClick={this.handleModalImage}
            />
            {imageHits.length < totalImg ? (
              <Button onClick={this.handleLoadMore} />
            ) : (
              toast.info('Sorry, no more images found')
            )}
          </>
        )}

        <ToastContainer autoClose={3000} />
      </Box>
    );
  }
}
