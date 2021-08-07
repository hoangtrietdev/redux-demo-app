import { ErrorMessage, FormikProps } from "formik";
import React, { FC } from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

type SelectForm = {
  field: any;
  form: FormikProps<any>;

  label: string;
  placeholder: string;
  disabled: boolean;
  options: any[];
};

const SelectField: FC = (props) => {
  const { field, form, options, label, placeholder, disabled } =
    props as SelectForm;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption: any) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        className={showError ? "is-invalid" : ""}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default SelectField;
