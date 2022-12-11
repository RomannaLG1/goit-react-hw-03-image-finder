import axios from 'axios';

const API_KEY = '30553592-7f8cf46d4a7791408268d5968';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery, page) {
  const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}



// this.props.searchImg