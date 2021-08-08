import React, { FC } from "react";

import { Button, Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import Banner from "components/Banner";
import Images from "constants/image";
import { useDispatch, useSelector } from "react-redux";
import { PhotoModel, removePhoto } from "features/Photo/components/photoSlice";
import PhotoList from "features/Photo/components/PhotoList";
import productApi from "api/ProductApi";

const MainPage: FC = () => {
  const photos: PhotoModel[] = useSelector((state: any) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoEdit = (photo: PhotoModel) => {
    history.push(`/photos/${photo.id}`);
  };

  const handlePhotoAdd = () => {
    history.push(`/photos/add`);
  };

  const handlePhotoRemove = (photo: PhotoModel) => {
    dispatch(removePhoto(photo.id));
  };

  const fetchProductList = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await productApi.getAll(params);
      alert(response.data.length);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="photo-main">
      <Banner title="Photo Gallery" backgroundUrl={Images.BLUE_BG} />
      <Button className="m-3" color="info" onClick={fetchProductList}>
        Get List Product
      </Button>
      <Container className="text-center">
        <Button className="m-3" onClick={handlePhotoAdd}>
          Add New Photo
        </Button>

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
