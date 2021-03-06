import React, { FC } from "react";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

const RandomPhoto: FC<{
  name: string;
  imageUrl: string;
  onImageUrlChange: any;
  onRandomButtonBlur: any;
}> = ({ name, imageUrl, onImageUrlChange, onRandomButtonBlur }) => {
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ooops ... not found. Please click random again!"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </div>
  );
};

export default RandomPhoto;
