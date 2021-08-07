import React, { FC } from "react";
import { Button } from "reactstrap";
import { PhotoModel } from "../photoSlice";
import "./PhotoCard.scss";

const PhotoCard: FC<{
  photo: PhotoModel;
  onEditClick: any;
  onRemoveClick: any;
}> = ({ photo, onEditClick, onRemoveClick }) => {
  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(photo);
  };

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
