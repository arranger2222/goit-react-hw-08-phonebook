import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormStyled,
  Label,
  Input,
  Button,
  ErrorNotify,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <Label htmlFor="name">
          <Input type="text" name="name" placeholder="Name" />
          <ErrorNotify name="name" component="div" />
        </Label>
        <Label htmlFor="number">
          <Input type="text" name="number" placeholder="Number" />
          <ErrorNotify name="number" component="div" />
        </Label>
        <Button type="submit">Submit</Button>
      </FormStyled>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
