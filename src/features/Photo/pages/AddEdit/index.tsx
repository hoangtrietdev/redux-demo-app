import Banner from "components/Banner";
import Images from "constants/image";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, PhotoModel, updatePhoto } from "features/Photo/components/photoSlice";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import "./style.scss";

const AddEditPage: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams() as any;
  const isAddMode = !photoId;
  const editedPhoto = useSelector((state: any) => {
    return state.photos.find((x: PhotoModel) => x.id === +photoId);
  });

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (value: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          dispatch(addPhoto(value));
          history.push("/photos");
        }
        dispatch(updatePhoto(value))
        history.push("/photos");

        resolve(true);
      }, 1000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Let pick your photo" backgroundUrl={Images.PINK_BG} />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
