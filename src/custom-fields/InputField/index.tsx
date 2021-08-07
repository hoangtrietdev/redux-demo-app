import { ErrorMessage, FormikProps } from "formik";
import React, { FC } from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

type InputForm = {
  field: any;
  form: FormikProps<any>;

  type: string;
  label: string;
  placeholder: string;
  disabled: boolean;
};

const InputField: FC = (props) => {
  const { field, form, type, label, placeholder, disabled } =
    props as InputForm;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default InputField;
