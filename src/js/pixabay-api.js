const API_KEY = '46122633-b5d9525daa165f05b8fce4913';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching images');
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}