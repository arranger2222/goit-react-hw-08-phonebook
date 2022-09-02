import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Label, Input, ErrorNotify } from './Filter.styled';

const schema = yup.object().shape({
  filter: yup.string(),
});

const initialValues = {
  filter: '',
};

export default function Filter({ value, onChange }) {
  return (
    <Formik initialValues={initialValues} validationSchema={schema}>
      <Label htmlFor="filter">
        <Input
          type="text"
          name="filter"
          placeholder="Filter"
          value={value}
          onChange={onChange}
        />
        <ErrorNotify name="filter" component="div" />
      </Label>
    </Formik>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
