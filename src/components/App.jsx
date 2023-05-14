import React from 'react';
import { Component } from 'react';
import Searchbar from './ImageFinder/Searchbar';
import ImageGallery from './ImageFinder/ImageGallery';
import css from './ImageFinder/ImageFinder.module.css';
// import ImageGalleryItem from './ImageFinder/ImageGalleryItem';
// import Loader from './ImageFinder/Loader';
// import Button from './ImageFinder/Button';
// import Modal from './ImageFinder/Modal';


class App extends Component {
  state = {
    photoName: '',
  };
  handleSubmitForm = (data) => {
    this.setState( {
      photoName: data,
    });
    
  };
  
  render() {
    console.log(this.state);
    return (
      <div className={css.App}>        
        <Searchbar onSubmit={this.handleSubmitForm} />
         <ImageGallery photoName={this.state.photoName}/>
          
           {/* <Loader/> */}
            {/* <Button/> */}
             {/* <Modal/> */}
       
      </div>
    )
  }
    
  

};

export default App;