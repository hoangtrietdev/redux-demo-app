import React, { FC } from "react";

import { Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import Banner from "components/Banner";
import Images from "constants/image";
import { useDispatch, useSelector } from "react-redux";
import { PhotoModel, removePhoto } from "features/Photo/components/photoSlice";
import PhotoList from "features/Photo/components/PhotoList";

const MainPage: FC = () => {
  const photos: PhotoModel[] = useSelector((state: any) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoEdit = (photo: PhotoModel) => {
    history.push(`/photos/${photo.id}`);
  };

  const handlePhotoRemove = (photo: PhotoModel) => {
    dispatch(removePhoto(photo.id));
  };

  return (
    <div className="photo-main">
      <Banner title="Photo Gallery" backgroundUrl={Images.BLUE_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add New Photo</Link>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEdit}
          onPhotoRemoveClick={handlePhotoRemove}
        />
      </Container>
    </div>
  );
};

export default MainPage;
