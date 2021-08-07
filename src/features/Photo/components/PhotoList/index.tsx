import React, { FC } from "react";
import { Row, Col } from "reactstrap";
import PhotoCard from "../PhotoCard";
import { PhotoModel } from "../photoSlice";

const PhotoList: FC<{
  photoList: PhotoModel[];
  onPhotoEditClick: any;
  onPhotoRemoveClick: any;
}> = ({ photoList, onPhotoEditClick, onPhotoRemoveClick }) => {
  return (
    <Row>
      {photoList.map((photo: PhotoModel) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PhotoList;
