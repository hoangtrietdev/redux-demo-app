import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { Formik, Form, FastField } from "formik";
import React, { FC } from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

const PhotoForm: FC<{ initialValues: any; isAddMode: boolean; onSubmit: any }> =
  ({ initialValues, isAddMode, onSubmit }) => {
    const validationSchema = Yup.object().shape({
      title: Yup.string().required("This field is required."),

      categoryId: Yup.number().required("This field is required.").nullable(),

      photo: Yup.string().when("categoryId", {
        is: 1,
        then: Yup.string().required("This field is required."),
        otherwise: Yup.string().notRequired(),
      }),
    });
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => {
          // do something here ...
          const { isSubmitting } = formikProps;

          return (
            <Form>
              <FastField
                name="title"
                component={InputField}
                label="Title"
                placeholder="Eg: Blue Ocean ..."
              />

              <FastField
                name="categoryId"
                component={SelectField}
                label="Category"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FastField
                name="photo"
                component={RandomPhotoField}
                label="Photo"
              />

              <FormGroup>
                <Button type="submit" color={isAddMode ? "primary" : "success"}>
                  {isSubmitting && <Spinner size="sm" />}
                  {isAddMode ? "Add to album" : "Update your photo"}
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    );
  };

export default PhotoForm;
