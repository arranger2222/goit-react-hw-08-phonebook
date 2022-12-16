import { useSelector } from 'react-redux';
import { ThreeCircles } from 'react-loader-spinner';

import {
  selectFiltredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Snack } from 'components/Snack/Snack';
import { Item, List, SpinnerBox } from './ContactList.styled';

export function ContactList() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <>
      {isLoading && !error && (
        <SpinnerBox>
          <ThreeCircles
            height="100"
            width="100"
            color="#f8a035"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </SpinnerBox>
      )}
      {error && <p>{error}</p>}
      {filtredContacts.length > 0 && !error ? (
        <List>
          {filtredContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <ContactItem id={id} name={name} number={number} />
            </Item>
          ))}
        </List>
      ) : (
        !isLoading && <Snack type="error" text="Not found any contact :(" />
      )}
    </>
  );
}
