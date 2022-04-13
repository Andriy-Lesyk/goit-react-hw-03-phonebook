import React from 'react';
import PropTypes from 'prop-types';
import { Contacts, Contac, Btn } from './Contacts.styles';

function Contact({ contacts, onDelete }) {
  return (
    <div>
      <Contacts>
        {contacts.map(({name, number, id}) => (
          <Contac key={id}>
            <span>
              {name} : {number}
            </span>
            <Btn onClick={() => onDelete(id)}>Delete</Btn>
          </Contac>
        ))}
      </Contacts>
    </div>
  );
}
Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contact;
