import React, { Component } from 'react';
import { v4 as uuId } from 'uuid';
import Forms from './Forms/Forms';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    ],
    filter: '',
  };

  keyId = uuId();
  formSubmitHandler = ({ name, number }) => {
    const id = uuId();
    const contCheck = this.state.contacts.find(
      contact => contact.name === name
    );
    contCheck
      ? alert(`${name} is olready in contacts`)
      : this.setState(prev => ({
          contacts: [...prev.contacts, { id, name, number }],
        }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  componentDidMount() {
    const cont = localStorage.getItem('contacts');
    const parsedCont = JSON.parse(cont);
    if (parsedCont) {
      this.setState({ contacts: parsedCont });
    }
    
  }
  componentDidUpdate(prevProp, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Forms onSubmit={this.formSubmitHandler} />
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <Contacts
          id={this.keyId}
          onDelete={this.deleteContact}
          contacts={
            this.state.filter === ''
              ? this.state.contacts
              : this.state.contacts.filter(cont =>
                  cont.name.toLowerCase().includes(this.state.filter)
                )
          }
        />
      </div>
    );
  }
}
