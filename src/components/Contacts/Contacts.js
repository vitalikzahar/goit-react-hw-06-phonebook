import { useDispatch, useSelector } from 'react-redux';
import { Delete } from './Contacts.styled';
import { deleteContact } from 'redux/contactsReducer';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContacts);
  const filterItems = useSelector(selectFilter);
  const filterUsers = contactsList.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterItems.filter.toLowerCase())
  );
  return (
    <div>
      <ul>
        {filterUsers.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
            <Delete onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Delete>
          </li>
        ))}
      </ul>
    </div>
  );
};
