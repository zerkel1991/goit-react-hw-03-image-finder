import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css'
import { nanoid } from 'nanoid'


function ImageGallery({ images }) {
  return (
    <ul className={s.imageGallery}>
      {images.map(el => {
        return <ImageGalleryItem  key={nanoid()} id = {el.id} src={el.webformatURL} />;
      })}
    </ul>
  );
}

export default ImageGallery;
