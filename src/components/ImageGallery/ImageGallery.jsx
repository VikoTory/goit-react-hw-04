
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  const handleImageClick = (image) => {
    openModal(image.urls.regular);
  };

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li className={css.galleryCard} key={image.id} onClick={() => handleImageClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;