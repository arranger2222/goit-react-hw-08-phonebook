import { useSelector, useDispatch } from 'react-redux';

import { filterValue } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(filterValue(e.currentTarget.value));
  };

  return (
    <>
      {' '}
      <Label>
        <Input
          value={filter}
          onChange={handleFilterChange}
          name="filter"
          placeholder="Filter"
          id="filter"
          autoComplete="off"
        />
      </Label>
    </>
  );
};

export default Filter;
