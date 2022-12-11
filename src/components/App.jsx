import { Component } from 'react';
import Box from './Box';
import { ToastContainer} from 'react-toastify';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
  }



  handleFormSubmit = searchValue => {
this.setState({searchValue: searchValue});
  }

  render() {
    return (
      <Box>
        <Searchbar onFormSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery searchImg={this.state.searchValue}></ImageGallery>
 <ToastContainer autoClose={3000}/>
      </Box>
    );
  }
}
