import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { Button } from './ContactItem.styled';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>

      <Button
        size="small"
        variant="contained"
        type="button"
        onClick={onDeleteContact}
        startIcon={<DeleteForeverRoundedIcon />}
      >
        Delete
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
