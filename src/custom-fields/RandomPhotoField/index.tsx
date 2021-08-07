import RandomPhoto from "components/RandomPhoto";
import { ErrorMessage, FormikProps } from "formik";
import React, { FC } from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";

type RandomForm = {
  field: any;
  form: FormikProps<any>;

  label: string;
};

const RandomPhotoField: FC = (props) => {
  const { field, form, label } = props as RandomForm;

  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl: string) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />

      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default RandomPhotoField;
