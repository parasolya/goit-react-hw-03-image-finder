import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import css from './ImageFinder.module.css';

export default class ImageGallery extends Component {
  state = {
    arrayPhotos: [],
  }
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '34888739-64f83dbd913255152a5bcb43e';

  query = 'null';
  page = 1;
  per_page = 12;

  componentDidUpdate(prevProps, prevState)  {
    const searchParams = new URLSearchParams({
          q: this.props.photoName,
          key: this.#API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: this.per_page,
          page: this.page,
        });
    if (prevProps.photoName !== this.props.photoName) {      
      fetch(`${this.#BASE_URL}?${searchParams}`)
      .then(res => res.json())
      .then(photos => this.setState( 
        {
        arrayPhotos: photos.hits,
      }))
    }
  }

  render() { 
    
    return(
      <div>      
      {!this.state.arrayPhotos && <div>Виберіть фото</div>}
      {this.state.arrayPhotos && 
      <ul className={css.ImageGallery}>   
        {this.state.arrayPhotos.map(el => {
          return (<ImageGalleryItem key={el.id} url={el.webformatURL} alt={el.tags}/>)
        })}     
      </ul>
      }
      
    </div>
    )
  }
};

