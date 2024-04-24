import css from "./ImageCard.module.css";
const ImageCard = ({ image, onImageClick }) => {
  const imageCardInfo = {
    imageSrc: image.urls.regular,
    imageAltDescription: image.alt_description,
    
  };

  return (
    <div onClick={() => onImageClick(imageCardInfo)}>
      <img
        className={css.image}
        src={image.urls.small + "&w=400&h=300&fit=min"}
        alt={image.alt_description}
      />
      
    </div>
  );
};

export default ImageCard;