import css from './ImageFinder.module.css';

const ImageGalleryItem = ({ url, alt }) => {
  return (
    <div>
       
      <li className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItem_image} src={url} alt={alt} />
      </li>
    </div>
  );
};
export default ImageGalleryItem;
