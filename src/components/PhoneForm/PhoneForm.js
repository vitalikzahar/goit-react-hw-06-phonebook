import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormButton,
  FormInput,
  InputName,
  InputNumber,
} from './PhoneForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsReducer';

export const PhoneForm = () => {
  const contactList = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    const { value } = evt.target;
    setName(value);
  };
  const handleChangeNumber = evt => {
    const { value } = evt.target;
    setNumber(value);
  };

  const onSubmit = (name, number) => {
    const contact = { name, number, id: nanoid() };
    if (
      contactList.contacts.find(
        userCard => userCard.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`"${contact.name}  "is already in contact`);
    }

    dispatch(addContact(contact));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };
  return (
    <FormInput onSubmit={handleSubmit}>
      <label>
        Name
        <InputName
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <InputNumber
          value={number}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <FormButton type="submit">Add contacts</FormButton>
    </FormInput>
  );
};
