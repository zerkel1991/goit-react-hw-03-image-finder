import s from './ImageGalleryItem.module.css'
function ImageGalleryItem ({id,src}) {
  return(
  <li className={s.ImageGalleryItem} key={id}>
  <img className={s.ImageGalleryItem_image} src={src} alt="photos" />
</li>
  )
}

export default ImageGalleryItem
