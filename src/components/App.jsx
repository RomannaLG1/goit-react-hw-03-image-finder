import { Component } from 'react';
import Box from './Box';
import { Searchbar } from './Searchbar';

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
 
      </Box>
    );
  }
}
